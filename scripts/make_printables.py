"""Generate printable A4 patient sheets for HealthPro Surgery.

Run from the repo root:  python3 scripts/make_printables.py
Output: public/downloads/*.pdf (linked from the matching web pages).
"""
from pathlib import Path

from reportlab.graphics import renderPDF
from reportlab.graphics.barcode.qr import QrCodeWidget
from reportlab.graphics.shapes import Drawing
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, KeepTogether, PageTemplate, Paragraph, Spacer, Table, TableStyle,
)

OUT = Path("public/downloads")
SITE = "https://www.healthprosurgery.com"

NAVY = colors.HexColor("#0b2545")
TEAL = colors.HexColor("#0a6a73")
TEAL_SOFT = colors.HexColor("#e3f2f3")
TEAL_LIGHT = colors.HexColor("#2bb3bd")
MUTED = colors.HexColor("#3d4855")
BORDER = colors.HexColor("#d5dbe2")
ALERT_BG = colors.HexColor("#fff4f2")
ALERT_BORDER = colors.HexColor("#f1c7bf")
ALERT_TEXT = colors.HexColor("#8a2414")

FONT_DIR = "/usr/share/fonts/truetype/liberation"
pdfmetrics.registerFont(TTFont("Sans", f"{FONT_DIR}/LiberationSans-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Sans-Bold", f"{FONT_DIR}/LiberationSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("Sans-Italic", f"{FONT_DIR}/LiberationSans-Italic.ttf"))
pdfmetrics.registerFont(TTFont("Serif", f"{FONT_DIR}/LiberationSerif-Regular.ttf"))
pdfmetrics.registerFont(TTFont("Serif-Bold", f"{FONT_DIR}/LiberationSerif-Bold.ttf"))
pdfmetrics.registerFontFamily("Sans", normal="Sans", bold="Sans-Bold", italic="Sans-Italic", boldItalic="Sans-Bold")

PAGE_W, PAGE_H = A4
MARGIN = 16 * mm
HEADER_H = 30 * mm
FOOTER_H = 36 * mm
CONTENT_W = PAGE_W - 2 * MARGIN

S = {
    "eyebrow": ParagraphStyle("eyebrow", fontName="Sans-Bold", fontSize=8.5, leading=11, textColor=TEAL, spaceAfter=2),
    "title": ParagraphStyle("title", fontName="Serif-Bold", fontSize=22, leading=26, textColor=NAVY, spaceAfter=4),
    "intro": ParagraphStyle("intro", fontName="Sans", fontSize=10, leading=13.6, textColor=MUTED, spaceAfter=6),
    "h2": ParagraphStyle("h2", fontName="Sans-Bold", fontSize=12, leading=15, textColor=NAVY, spaceBefore=7, spaceAfter=4),
    "body": ParagraphStyle("body", fontName="Sans", fontSize=9.5, leading=12.6, textColor=colors.HexColor("#1c2733")),
    "small": ParagraphStyle("small", fontName="Sans", fontSize=8, leading=10.5, textColor=MUTED),
    "when": ParagraphStyle("when", fontName="Sans-Bold", fontSize=9.2, leading=12, textColor=TEAL),
    "whenKey": ParagraphStyle("whenKey", fontName="Sans-Bold", fontSize=9.2, leading=12, textColor=NAVY),
    "stepTitle": ParagraphStyle("stepTitle", fontName="Sans-Bold", fontSize=10, leading=12.8, textColor=NAVY, spaceAfter=2),
    "alertTitle": ParagraphStyle("alertTitle", fontName="Sans-Bold", fontSize=11.5, leading=14.5, textColor=ALERT_TEXT, spaceAfter=3),
    "alert": ParagraphStyle("alert", fontName="Sans", fontSize=9.3, leading=12.2, textColor=colors.HexColor("#5a1d12")),
}


def bullets(items, style="body", color=TEAL):
    return [
        Paragraph(f'<font color="{color.hexval()}">•</font>&nbsp;&nbsp;{t}', ParagraphStyle(
            "b", parent=S[style], leftIndent=9, firstLineIndent=-9, spaceAfter=1.5))
        for t in items
    ]


def timeline(steps):
    rows, styles = [], [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 7), ("RIGHTPADDING", (0, 0), (-1, -1), 7),
        ("TOPPADDING", (0, 0), (-1, -1), 5), ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LINEBELOW", (0, 0), (-1, -2), 0.5, BORDER),
        ("BOX", (0, 0), (-1, -1), 0.6, BORDER),
    ]
    for i, (when, title, items, key) in enumerate(steps):
        rows.append([
            Paragraph(when, S["whenKey" if key else "when"]),
            [Paragraph(title, S["stepTitle"]), *bullets(items)],
        ])
        if key:
            styles += [
                ("BACKGROUND", (0, i), (-1, i), TEAL_SOFT),
                ("LINEBEFORE", (0, i), (0, i), 3, TEAL),
            ]
    t = Table(rows, colWidths=[38 * mm, CONTENT_W - 38 * mm])
    t.setStyle(TableStyle(styles))
    return t


def grid(cards, cols=2):
    cells = [[Paragraph(t, S["stepTitle"]), Paragraph(x, S["body"])] for t, x in cards]
    while len(cells) % cols:
        cells.append("")
    rows = [cells[i:i + cols] for i in range(0, len(cells), cols)]
    w = (CONTENT_W - (cols - 1) * 4 * mm) / cols
    t = Table(rows, colWidths=[w] * cols, hAlign="LEFT")
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2), ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t


def alert(title, items, note=None):
    content = [Paragraph(title, S["alertTitle"]), *bullets(items, "alert", ALERT_TEXT)]
    if note:
        content.append(Spacer(1, 3))
        content.append(Paragraph(f"<b>{note}</b>", S["alert"]))
    t = Table([[content]], colWidths=[CONTENT_W])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), ALERT_BG), ("BOX", (0, 0), (-1, -1), 0.8, ALERT_BORDER),
        ("LEFTPADDING", (0, 0), (-1, -1), 9), ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 7), ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return KeepTogether([Spacer(1, 6), t])


def fill_in(labels):
    """Write-in fields: bold label followed by a ruled line, two per row."""
    row = []
    for l in labels:
        row += [Paragraph(f"<b>{l}</b>", S["body"]), ""]
    lw = 34 * mm
    gap = 8 * mm
    line_w = (CONTENT_W - 2 * lw - gap) / 2
    t = Table([row], colWidths=[lw, line_w, lw + gap, line_w][: len(row)], hAlign="LEFT")
    style = [("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
             ("TOPPADDING", (0, 0), (-1, -1), 4), ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
             ("VALIGN", (0, 0), (-1, -1), "BOTTOM")]
    if len(row) > 2:
        style.append(("LEFTPADDING", (2, 0), (2, 0), gap))
    for i in range(1, len(row), 2):
        style.append(("LINEBELOW", (i, 0), (i, 0), 0.6, colors.HexColor("#9aa5b1")))
    t.setStyle(TableStyle(style))
    return KeepTogether([t, Spacer(1, 4)])


def draw_logo(c, x, y, size):
    """The site icon: navy rounded square with a white 'H' and teal underline."""
    k = size / 512
    c.setFillColor(colors.white)
    c.roundRect(x, y, size, size, 112 * k, stroke=0, fill=1)
    c.setFillColor(NAVY)
    for rx, ry, rw, rh in [(152, 128, 50, 248), (310, 128, 50, 248), (128, 128, 98, 18), (128, 358, 98, 18),
                           (286, 128, 98, 18), (286, 358, 98, 18), (202, 238, 108, 30)]:
        c.rect(x + rx * k, y + (512 - ry - rh) * k, rw * k, rh * k, stroke=0, fill=1)
    c.setFillColor(TEAL_LIGHT)
    c.roundRect(x + 196 * k, y + (512 - 404 - 14) * k, 120 * k, 14 * k, 7 * k, stroke=0, fill=1)


def make_page(sheet):
    lang_sw = sheet.get("lang") == "sw"
    T = {
        "office": "Ofisi" if lang_sw else "Office",
        "whatsapp": "WhatsApp",
        "hours": "Jumatatu–Ijumaa 9:00–17:00 · Jumamosi 9:00–12:00" if lang_sw else "Mon–Fri 9 am–5 pm · Sat 9 am–12 noon",
        "scan": "Soma mtandaoni" if lang_sw else "Scan to read online",
        "disclaimer": "Maelekezo ya jumla. Daima fuata maelekezo maalum utakayopewa na timu yetu."
        if lang_sw else "General guidance only. Always follow the specific instructions given to you by our team.",
    }

    def on_page(c, doc):
        c.saveState()
        # Header band
        c.setFillColor(NAVY)
        c.rect(0, PAGE_H - HEADER_H, PAGE_W, HEADER_H, stroke=0, fill=1)
        c.setFillColor(TEAL_LIGHT)
        c.rect(0, PAGE_H - HEADER_H - 1.2 * mm, PAGE_W, 1.2 * mm, stroke=0, fill=1)
        draw_logo(c, MARGIN, PAGE_H - HEADER_H + 7 * mm, 16 * mm)
        c.setFillColor(colors.white)
        c.setFont("Serif-Bold", 17)
        c.drawString(MARGIN + 21 * mm, PAGE_H - 14.5 * mm, "HealthPro Surgery")
        c.setFont("Sans", 8.4)
        c.setFillColor(colors.HexColor("#c9d4e2"))
        c.drawString(MARGIN + 21 * mm, PAGE_H - 19.5 * mm, "Dr John Kinyua Murithi, MBChB, FCS(ECSA), FACS")
        c.drawString(MARGIN + 21 * mm, PAGE_H - 23.5 * mm, "Consultant General, Vascular and Laparoscopic Surgeon")
        c.setFont("Sans-Bold", 8.4)
        c.setFillColor(colors.HexColor("#7fd3d9"))
        c.drawRightString(PAGE_W - MARGIN, PAGE_H - 14.5 * mm, sheet["badge"].upper())
        c.setFont("Sans", 8.4)
        c.setFillColor(colors.HexColor("#c9d4e2"))
        c.drawRightString(PAGE_W - MARGIN, PAGE_H - 19.5 * mm, "Aga Khan Hospital Mombasa")
        c.drawRightString(PAGE_W - MARGIN, PAGE_H - 23.5 * mm, "Doctors' Plaza, First Floor")

        # Footer
        top = FOOTER_H - 4 * mm
        c.setStrokeColor(BORDER)
        c.setLineWidth(0.6)
        c.line(MARGIN, top, PAGE_W - MARGIN, top)
        url = SITE + sheet["url"]
        qr = QrCodeWidget(url)
        qr.barLevel = "M"
        b = qr.getBounds()
        qsize = 24 * mm
        d = Drawing(qsize, qsize, transform=[qsize / (b[2] - b[0]), 0, 0, qsize / (b[3] - b[1]), 0, 0])
        qr.barFillColor = NAVY
        d.add(qr)
        qx = PAGE_W - MARGIN - qsize
        renderPDF.draw(d, c, qx, 6 * mm)
        c.setFont("Sans", 7)
        c.setFillColor(MUTED)
        c.drawCentredString(qx + qsize / 2, 4 * mm, T["scan"])

        x = MARGIN
        c.setFillColor(NAVY)
        c.setFont("Sans-Bold", 9.5)
        c.drawString(x, top - 7 * mm, f"{T['office']}: 0798 595 946")
        c.drawString(x + 52 * mm, top - 7 * mm, f"{T['whatsapp']}: 0721 446 206")
        c.setFont("Sans", 8.5)
        c.setFillColor(MUTED)
        c.drawString(x, top - 12 * mm, "www.healthprosurgery.com  ·  johnkinyua@gmail.com")
        c.drawString(x, top - 16.5 * mm, T["hours"])
        c.setFont("Sans-Italic", 7.6)
        c.drawString(x, top - 23 * mm, T["disclaimer"])
        c.drawString(x, top - 27 * mm, f"{sheet['file'].removesuffix('.pdf')}  ·  {sheet.get('version', 'October 2026')}")
        c.restoreState()

    out = OUT / sheet["file"]
    doc = BaseDocTemplate(
        str(out), pagesize=A4, leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=HEADER_H + 7 * mm, bottomMargin=FOOTER_H + 2 * mm,
        title=sheet["title"], author="Dr John Kinyua Murithi — HealthPro Surgery",
        subject=sheet["intro"], creator="HealthPro Surgery", lang="sw" if lang_sw else "en-GB",
    )
    frame = Frame(MARGIN, FOOTER_H + 2 * mm, CONTENT_W, PAGE_H - HEADER_H - FOOTER_H - 9 * mm, id="f",
                  leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
    doc.addPageTemplates([PageTemplate(id="p", frames=[frame], onPage=on_page)])

    story = [Paragraph(sheet["eyebrow"].upper(), S["eyebrow"]), Paragraph(sheet["title"], S["title"]),
             Paragraph(sheet["intro"], S["intro"])]
    for block in sheet["blocks"]:
        kind = block[0]
        if kind == "h2":
            story.append(Paragraph(block[1], S["h2"]))
        elif kind == "p":
            story.append(Paragraph(block[1], S["body"]))
        elif kind == "fill":
            story.append(fill_in(block[1]))
        elif kind == "timeline":
            story.append(timeline(block[1]))
        elif kind == "bullets":
            story.extend(bullets(block[1]))
        elif kind == "grid":
            story.append(grid(block[1], block[2] if len(block) > 2 else 2))
        elif kind == "alert":
            story.append(alert(*block[1:]))
        elif kind == "space":
            story.append(Spacer(1, block[1]))
    doc.build(story)
    return out


# ---------------------------------------------------------------------------
# Sheet content (mirrors the web pages)
# ---------------------------------------------------------------------------

COLONOSCOPY_EN = {
    "file": "colonoscopy-preparation.pdf",
    "url": "/services/endoscopy-preparation",
    "badge": "Patient instructions",
    "eyebrow": "Preparation guide",
    "title": "Preparing for your colonoscopy",
    "intro": "A clean bowel makes your colonoscopy safer, quicker and more accurate. These instructions are for a "
             "morning appointment; if your procedure is in the afternoon, you will be given adjusted timings.",
    "blocks": [
        ("fill", ["Procedure date:", "Arrival time:"]),
        ("space", 4),
        ("timeline", [
            ("7 days before", "Review your medicines", [
                "Stop iron tablets.",
                "Tell us if you take blood thinners (e.g. warfarin, clopidogrel, rivaroxaban, apixaban) or diabetes "
                "medicines. Do not stop these without specific advice.",
            ], False),
            ("3 days before", "Start a low-fibre diet", [
                "<b>Eat:</b> white rice, white bread, ugali, potatoes without skin, eggs, chicken, fish, clear soups.",
                "<b>Avoid:</b> fruit and vegetables with skins or seeds, beans, peas, lentils, nuts, whole grains, githeri, brown bread.",
            ], False),
            ("Day before<br/>morning", "Light breakfast, then clear fluids only", [
                "Light low-fibre breakfast, finished by 9:00 am.",
                "Then clear fluids only: water, clear soup, clear juice without bits, black tea or coffee, ORS. "
                "No milk and no red or purple drinks.",
            ], False),
            ("Day before<br/>3:00 pm", "First bottle of ColoPrep + 4 Dulcolax tablets", [
                "Take the first bottle of ColoPrep, prepared as directed on the pack.",
                "At the same time, swallow 4 tablets of Dulcolax (bisacodyl).",
                "Drink plenty of clear fluids over the following hours (at least 4–6 glasses).",
            ], True),
            ("Day before<br/>6:00 pm", "Second bottle of ColoPrep", [
                "Take the second bottle of ColoPrep, prepared as directed on the pack.",
                "Keep drinking clear fluids and stay close to a toilet. Frequent watery stools mean it is working.",
            ], True),
            ("Day of the<br/>procedure", "Nil by mouth", [
                "Sip clear fluids until 2 hours before your appointment, then nothing by mouth.",
                "Stools should be clear or pale yellow liquid. If still brown or solid, call us before coming in.",
                "Bring your medicines list, insurance card and an adult to take you home.",
            ], False),
        ]),
        ("alert", "After the procedure: seek help urgently if you have", [
            "Severe or worsening abdominal pain, or a swollen, hard abdomen",
            "Fever or vomiting",
            "More than a small amount of bleeding from the back passage",
        ], "No driving, machinery or signing important documents for 24 hours after sedation."),
    ],
}

COLONOSCOPY_SW = {
    "lang": "sw",
    "file": "maandalizi-ya-colonoscopy.pdf",
    "url": "/services/endoscopy-preparation/kiswahili",
    "badge": "Maelekezo kwa mgonjwa",
    "eyebrow": "Mwongozo wa maandalizi",
    "title": "Maandalizi ya colonoscopy",
    "intro": "Utumbo safi hufanya kipimo chako kiwe salama zaidi, cha haraka na sahihi. Maelekezo haya ni kwa miadi ya "
             "asubuhi. Ikiwa kipimo chako ni mchana, utapewa muda tofauti.",
    "blocks": [
        ("fill", ["Tarehe ya kipimo:", "Saa ya kufika:"]),
        ("space", 4),
        ("timeline", [
            ("Siku 7 kabla", "Kagua dawa zako", [
                "Acha kutumia vidonge vya madini ya chuma (iron).",
                "Tujulishe ikiwa unatumia dawa za kuzuia damu kuganda (k.m. warfarin, clopidogrel, rivaroxaban, apixaban) "
                "au dawa za kisukari. Usiziache bila ushauri maalum.",
            ], False),
            ("Siku 3 kabla", "Anza chakula chenye nyuzinyuzi kidogo", [
                "<b>Kula:</b> wali mweupe, mkate mweupe, ugali, viazi vilivyomenywa, mayai, kuku, samaki na supu safi.",
                "<b>Epuka:</b> matunda na mboga zenye maganda au mbegu, maharagwe, njegere, dengu, karanga, nafaka nzima, "
                "githeri na mkate wa kahawia.",
            ], False),
            ("Siku moja kabla<br/>asubuhi", "Kiamsha kinywa chepesi, kisha vinywaji safi pekee", [
                "Kiamsha kinywa chepesi, ukimaliza kabla ya saa tatu asubuhi (9:00 am).",
                "Baada ya hapo vinywaji safi pekee: maji, supu safi, juisi isiyo na vipande, chai au kahawa bila maziwa, ORS. "
                "Usinywe maziwa wala vinywaji vyekundu au vya zambarau.",
            ], False),
            ("Saa tisa alasiri<br/>(3:00 pm)", "Chupa ya kwanza ya ColoPrep + vidonge 4 vya Dulcolax", [
                "Kunywa chupa ya kwanza ya ColoPrep, ukiitayarisha kama ilivyoelekezwa kwenye pakiti.",
                "Wakati huo huo, meza vidonge 4 vya Dulcolax (bisacodyl).",
                "Kunywa vinywaji safi kwa wingi katika saa zinazofuata, angalau glasi 4 hadi 6.",
            ], True),
            ("Saa kumi na mbili<br/>jioni (6:00 pm)", "Chupa ya pili ya ColoPrep", [
                "Kunywa chupa ya pili ya ColoPrep, ukiitayarisha kama ilivyoelekezwa kwenye pakiti.",
                "Endelea kunywa vinywaji safi na kaa karibu na choo. Choo cha majimaji mara kwa mara kinaonyesha dawa inafanya kazi.",
            ], True),
            ("Siku ya kipimo", "Usile wala usinywe", [
                "Kunywa vinywaji safi kidogo kidogo hadi saa 2 kabla ya miadi, kisha usinywe chochote.",
                "Choo kinapaswa kuwa majimaji safi au ya manjano hafifu. Kama bado ni cha kahawia au kina vipande, tupigie simu kabla ya kuja.",
                "Leta orodha ya dawa zako, kadi ya bima na mtu mzima wa kukusindikiza nyumbani.",
            ], False),
        ]),
        ("alert", "Baada ya kipimo: tafuta msaada haraka ukipata", [
            "Maumivu makali ya tumbo yanayozidi, au tumbo kuvimba na kuwa gumu",
            "Homa au kutapika",
            "Damu nyingi kutoka njia ya haja kubwa",
        ], "Usiendeshe gari, usitumie mashine wala usitie sahihi nyaraka muhimu kwa saa 24 baada ya dawa ya usingizi."),
    ],
}

OGD_EN = {
    "file": "ogd-preparation.pdf",
    "url": "/services/endoscopy-preparation",
    "badge": "Patient instructions",
    "eyebrow": "Preparation guide",
    "title": "Preparing for your upper GI endoscopy (OGD)",
    "intro": "An OGD examines the oesophagus, stomach and duodenum with a thin flexible camera. No bowel preparation is "
             "needed; your stomach simply needs to be empty. The test usually takes 10–15 minutes.",
    "blocks": [
        ("fill", ["Procedure date:", "Arrival time:"]),
        ("h2", "Before the procedure"),
        ("bullets", [
            "<b>Do not eat for 6 hours</b> before the procedure.",
            "Small sips of water are allowed until <b>2 hours before</b>, then nothing by mouth.",
            "Take essential morning medicines (e.g. blood pressure tablets) with a sip of water unless told otherwise.",
            "Tell us in advance if you take blood thinners (warfarin, clopidogrel, rivaroxaban, apixaban) or diabetes "
            "medicines. Do not stop them without advice.",
            "If you are also having a colonoscopy on the same day, follow the colonoscopy preparation instead.",
        ]),
        ("h2", "What to bring"),
        ("bullets", [
            "Your ID and insurance card",
            "A list of your current medicines, and any previous endoscopy or scan reports",
            "An adult to accompany you home if you will receive sedation",
        ]),
        ("h2", "On the day"),
        ("grid", [
            ("Sedation and throat spray", "Most patients receive sedation and remember little of the test. A throat "
             "spray may be used to numb the throat."),
            ("Recovery", "You rest for about an hour afterwards. A mild sore throat or bloating is common and settles quickly."),
            ("Results", "Findings are discussed with you on the day. Biopsy results usually take several working days "
             "and are reviewed at follow-up."),
            ("After sedation", "Do not drive, operate machinery or sign important documents for 24 hours."),
        ]),
        ("alert", "Seek help urgently if you have", [
            "Severe chest, neck or abdominal pain",
            "Difficulty breathing or swallowing",
            "Vomiting blood, or black tarry stools",
            "Fever after the procedure",
        ]),
    ],
}

HERNIA_EN = {
    "file": "hernia-repair-recovery.pdf",
    "url": "/patient-guides/hernia-repair-recovery",
    "badge": "Patient guide",
    "eyebrow": "After your operation",
    "title": "Recovery after hernia repair",
    "intro": "Most people recover well from hernia surgery and return to normal life within a few weeks. This sheet "
             "explains what to expect, how to look after yourself, and when to seek help.",
    "blocks": [
        ("fill", ["Date of surgery:", "Follow-up date:"]),
        ("h2", "Your recovery, step by step"),
        ("timeline", [
            ("Day of surgery", "Going home", ["Most patients go home the same day or the next day. Walk gently as soon "
                                              "as you feel able; it reduces the risk of clots."], False),
            ("First week", "Soreness settles", ["Expect soreness, some swelling and bruising. Take pain relief regularly. "
                                                "Short walks several times a day."], False),
            ("1–2 weeks", "Light work and driving", ["Most people return to desk work, and drive once they can move freely "
                                                     "and do an emergency stop without pain."], False),
            ("4–6 weeks", "Heavier activity", ["Gradually return to heavy lifting, manual work and sport, as advised for "
                                               "your type of repair."], False),
        ]),
        ("h2", "Looking after yourself"),
        ("grid", [
            ("Pain relief", "Take painkillers regularly for the first few days. Press a cushion over the wound when "
             "coughing or getting up."),
            ("Wound care", "Keep the dressing clean and dry. Follow your discharge instructions for showering; no "
             "soaking or swimming until healed."),
            ("Avoid constipation", "Drink plenty of water and eat fruit, vegetables and fibre. Ask for a mild laxative if needed."),
            ("Lift carefully", "Walking is good from day one. Avoid heavy lifting and straining early on; bend at the knees."),
            ("Protect the repair", "Stopping smoking, a healthy weight and treating a chronic cough reduce the risk of recurrence."),
        ], 3),
        ("alert", "Contact us or go to A&amp;E if you have", [
            "Fever, or redness, heat or pus from the wound",
            "Pain that is severe or getting worse rather than better",
            "Being unable to pass urine",
            "Persistent vomiting or a swollen, hard abdomen",
            "A rapidly increasing swelling at the operation site",
            "Calf pain or swelling, chest pain or breathlessness",
        ]),
    ],
}

AVF_EN = {
    "file": "av-fistula-care.pdf",
    "url": "/patient-guides/av-fistula-care",
    "badge": "Patient guide",
    "eyebrow": "Dialysis access",
    "title": "Caring for your AV fistula",
    "intro": "Your fistula is your lifeline for dialysis. A few simple daily habits help it work well and last for many "
             "years, and knowing the warning signs means problems can be treated before the fistula is lost.",
    "blocks": [
        ("fill", ["Fistula arm:", "Date created:"]),
        ("h2", "Every day"),
        ("grid", [
            ("Feel the thrill", "Place your fingers lightly over the fistula each morning and evening. You should feel a "
             "continuous buzz."),
            ("Keep it clean", "Wash the arm with soap and water every day and before every dialysis session."),
            ("Protect the arm", "No blood pressure, blood tests, injections or drips in the fistula arm. Tell every "
             "health worker which arm it is."),
            ("Nothing tight", "No watches, bracelets, tight sleeves or bags pressing on the fistula. Do not sleep on that arm."),
            ("Avoid injury", "Protect the arm from knocks and cuts, and avoid carrying heavy loads with it."),
            ("After dialysis", "Press firmly but gently on the needle sites until bleeding stops, without blocking the flow."),
        ]),
        ("h2", "After the operation"),
        ("bullets", [
            "Keep the arm raised on a pillow for the first few days. Gentle finger and wrist movement is encouraged.",
            "Keep the dressing clean and dry until it is reviewed.",
            "When advised, squeeze a soft ball several times a day to help the vein enlarge.",
            "A fistula usually needs about 6 weeks or longer to mature before it is used for dialysis.",
        ]),
        ("alert", "Seek help the same day if", [
            "You can no longer feel the buzz (thrill) or hear the whoosh",
            "Redness, heat, swelling, pus or fever around the fistula",
            "Your hand becomes cold, pale, numb or painful",
            "The whole arm, hand or face becomes swollen",
            "The skin over the fistula becomes thin, shiny, scabbed or ulcerated",
        ], "Bleeding that does not stop after 10–15 minutes of firm pressure is an emergency: keep pressing and go to A&amp;E."),
    ],
}

EVLA_EN = {
    "file": "evla-varicose-veins.pdf",
    "url": "/patient-guides/bilateral-evla",
    "badge": "Patient guide",
    "eyebrow": "Varicose veins",
    "title": "Laser treatment of varicose veins (EVLA)",
    "intro": "Endovenous laser ablation (EVLA) is a modern, minimally invasive day-case treatment. A thin laser fibre "
             "is passed inside the faulty vein through a needle puncture, under ultrasound guidance, and seals it from "
             "the inside. Blood then flows through the healthy deep veins. When both legs need treatment, they are "
             "usually treated in the same session: one visit, one anaesthetic and one recovery period.",
    "blocks": [
        ("fill", ["Procedure date:", "Arrival time:"]),
        ("h2", "Before the procedure"),
        ("bullets", [
            "Continue your regular medicines unless told otherwise. Tell us if you take <b>blood thinners</b>, have had "
            "a <b>blood clot (DVT)</b>, take the <b>contraceptive pill or HRT</b>, or could be pregnant.",
            "Do not eat for about 6 hours before (sips of water until 2 hours before), as instructed when you book.",
            "Bring loose trousers or a long skirt, flat shoes, your medicines list, your insurance card and an adult "
            "to take you home.",
        ]),
        ("h2", "On the day"),
        ("grid", [
            ("Anaesthesia", "<b>Spinal anaesthesia is our preferred option</b>: you are numb from the waist down and "
             "feel nothing, with light sedation if you wish. <b>General anaesthesia</b> is available if you prefer to be "
             "asleep. Local anaesthesia alone is possible but not preferred when both legs are treated."),
            ("How long", "About one to two hours in theatre. Allow most of the day at the hospital. You go home the "
             "same day once the feeling in your legs has returned."),
        ]),
        ("h2", "Your recovery"),
        ("timeline", [
            ("Day of treatment", "Home once the anaesthetic wears off", [
                "Go home once the feeling in your legs has returned. No driving for at least 24 hours.",
            ], False),
            ("First week", "Rest, with short walks", [
                "<b>Resting at home for about a week is advisable, but not mandatory.</b> Keep your legs raised when resting.",
                "<b>Get up and walk for a few minutes every hour</b> while awake, to keep the circulation moving.",
                "Wear stockings day and night for the first 1–2 days, then in the daytime for about 1–2 weeks, as instructed.",
                "Shower once the first stockings are removed (usually after 24–48 hours).",
            ], True),
            ("Week 2", "Back to normal activities", [
                "Return to work; desk work sooner if you feel well. Drive once you can make an emergency stop comfortably.",
                "Gym, running and sport after about 2 weeks. Swim once puncture sites have healed (about a week).",
                "Avoid long-haul flights and very long journeys for about 4 weeks unless discussed with us.",
            ], False),
            ("Weeks 2–12", "Settling and follow-up", [
                "Bruising, lumps and discolouration settle. An ultrasound review checks the result.",
            ], False),
        ]),
        ("h2", "What is normal afterwards"),
        ("grid", [
            ("Bruising", "Common along the thigh or calf. Usually painless; fades over 2–3 weeks."),
            ("Tight, pulling feeling", "Often around days 5–10, like a pulled muscle. Keep walking and take simple "
             "pain relief; it settles in a few days."),
            ("Firm cord or small lumps", "This is the sealed vein. It softens and disappears over weeks to months."),
            ("Numb or tingly patch", "Occasionally, from small skin nerves near the vein. Almost always improves over time."),
        ]),
        ("p", "Pain relief: paracetamol, with ibuprofen if suitable for you, for a few days. Aching and heaviness often "
              "improve within weeks; appearance continues to improve over 2–3 months."),
        ("h2", "Common questions"),
        ("grid", [
            ("Where does the blood go?", "The sealed vein was not working properly. Blood flows through the healthy "
             "deep veins instead, and circulation usually improves."),
            ("Why both legs together?", "One visit to theatre, one anaesthetic and one recovery. If you prefer, the "
             "legs can be treated a few weeks apart."),
            ("Will the smaller veins go?", "Many shrink once the main vein is sealed. Others can be removed through "
             "tiny nicks or treated with foam, at the same time or later."),
            ("Can veins come back?", "Treated veins rarely return, but new ones can develop over the years. Staying "
             "active and avoiding long periods of standing help."),
            ("Will it hurt?", "Not during the procedure. Afterwards most people have mild aching, eased by simple painkillers."),
            ("Is it covered by insurance?", "Usually, when veins cause symptoms. We handle pre-authorisation with your insurer."),
        ]),
        ("alert", "These are uncommon, but contact us or go to A&amp;E if you notice", [
            "Increasing pain, swelling or tightness in the calf",
            "Chest pain or sudden breathlessness",
            "Fever, or spreading redness or discharge from a puncture site",
            "Bleeding that does not stop after 10 minutes of firm pressure with the leg raised",
        ]),
    ],
}

SHEETS = [COLONOSCOPY_EN, COLONOSCOPY_SW, OGD_EN, HERNIA_EN, AVF_EN, EVLA_EN]

# ---------------------------------------------------------------------------
# Google review card: page 1 an A4 desk poster, page 2 four A6 hand-out cards.
# The QR code points to /review on the site, which redirects to the Google review form.
# ---------------------------------------------------------------------------

GOLD = colors.HexColor("#c8912a")
REVIEW_URL = SITE + "/review"


def draw_qr(c, url, x, y, size, color=NAVY):
    qr = QrCodeWidget(url)
    qr.barLevel = "M"
    qr.barFillColor = color
    b = qr.getBounds()
    d = Drawing(size, size, transform=[size / (b[2] - b[0]), 0, 0, size / (b[3] - b[1]), 0, 0])
    d.add(qr)
    renderPDF.draw(d, c, x, y)


def draw_stars(c, cx, y, size, n=5, gap=None):
    import math
    gap = gap or size * 0.35
    total = n * size + (n - 1) * gap
    x0 = cx - total / 2 + size / 2
    c.setFillColor(GOLD)
    for i in range(n):
        x = x0 + i * (size + gap)
        p = c.beginPath()
        for k in range(10):
            r = size / 2 if k % 2 == 0 else size / 5
            a = math.pi / 2 + k * math.pi / 5
            px, py = x + r * math.cos(a), y + r * math.sin(a)
            p.moveTo(px, py) if k == 0 else p.lineTo(px, py)
        p.close()
        c.drawPath(p, stroke=0, fill=1)


def review_panel(c, x, y, w, h, scale):
    """One review panel (poster or card) inside the box x, y, w, h."""
    k = scale
    cx = x + w / 2
    # header band
    hb = 26 * mm * k
    c.setFillColor(NAVY)
    c.rect(x, y + h - hb, w, hb, stroke=0, fill=1)
    c.setFillColor(TEAL_LIGHT)
    c.rect(x, y + h - hb - 1.2 * mm * k, w, 1.2 * mm * k, stroke=0, fill=1)
    logo = 15 * mm * k
    c.setFont("Serif-Bold", 17 * k)
    title_w = c.stringWidth("HealthPro Surgery", "Serif-Bold", 17 * k)
    start = cx - (logo + 5 * mm * k + title_w) / 2
    draw_logo(c, start, y + h - hb + (hb - logo) / 2, logo)
    c.setFillColor(colors.white)
    c.drawString(start + logo + 5 * mm * k, y + h - hb / 2 - 6 * k, "HealthPro Surgery")

    top = y + h - hb - 16 * mm * k
    c.setFillColor(NAVY)
    c.setFont("Serif-Bold", 24 * k)
    c.drawCentredString(cx, top, "How was your visit?")
    c.setFont("Sans", 12.5 * k)
    c.setFillColor(MUTED)
    c.drawCentredString(cx, top - 9 * mm * k, "Please share your experience on Google.")
    c.setFont("Sans-Italic", 12 * k)
    c.setFillColor(colors.HexColor("#8a6418"))
    c.drawCentredString(cx, top - 15 * mm * k, "Tafadhali tuachie maoni yako kwenye Google.")
    draw_stars(c, cx, top - 26 * mm * k, 9 * mm * k)

    q = 78 * mm * k
    qy = top - 43 * mm * k - q
    c.setStrokeColor(BORDER)
    c.setLineWidth(1)
    c.roundRect(cx - q / 2 - 5 * mm * k, qy - 5 * mm * k, q + 10 * mm * k, q + 10 * mm * k, 6 * mm * k, stroke=1, fill=0)
    draw_qr(c, REVIEW_URL, cx - q / 2, qy, q)

    c.setFillColor(NAVY)
    c.setFont("Sans-Bold", 11 * k)
    c.drawCentredString(cx, qy - 13 * mm * k, "Open your phone camera  \u2192  point at the code  \u2192  tap the stars")
    c.setFont("Sans-Italic", 10 * k)
    c.setFillColor(MUTED)
    c.drawCentredString(cx, qy - 19 * mm * k, "Fungua kamera ya simu  \u2192  elekeza kwenye msimbo  \u2192  bonyeza nyota")
    c.setFont("Sans", 10 * k)
    c.setFillColor(TEAL)
    c.drawCentredString(cx, qy - 26 * mm * k, "or visit  www.healthprosurgery.com/review")

    c.setFont("Sans", 8.5 * k)
    c.setFillColor(MUTED)
    c.drawCentredString(cx, y + 12 * mm * k, "Thank you for choosing HealthPro Surgery  \u00b7  Asante kwa kutuchagua")
    c.drawCentredString(cx, y + 7 * mm * k,
                        "Aga Khan Hospital Mombasa, Doctors' Plaza  \u00b7  Office 0798 595 946  \u00b7  WhatsApp 0721 446 206")


def make_review_card():
    from reportlab.pdfgen import canvas as rl_canvas
    out = OUT / "google-review-card.pdf"
    c = rl_canvas.Canvas(str(out), pagesize=A4)
    c.setTitle("HealthPro Surgery — Google review card")
    c.setAuthor("HealthPro Surgery")
    # Page 1: A4 desk poster
    review_panel(c, 0, 0, PAGE_W, PAGE_H, 1.25)
    c.showPage()
    # Page 2: four A6 cards with cut marks
    w, h = PAGE_W / 2, PAGE_H / 2
    for i in range(2):
        for j in range(2):
            review_panel(c, i * w, j * h, w, h, 0.62)
    c.setStrokeColor(colors.HexColor("#9aa5b1"))
    c.setDash(3, 3)
    c.setLineWidth(0.5)
    c.line(w, 0, w, PAGE_H)
    c.line(0, h, PAGE_W, h)
    c.showPage()
    c.save()
    return out


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    for sheet in SHEETS:
        print(make_page(sheet))
    print(make_review_card())
