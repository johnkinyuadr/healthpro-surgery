import type { Metadata } from "next";
import Link from "next/link";
import DownloadLinks from "@/components/DownloadLinks";
import FAQSection from "@/app/components/FAQSection";
import ServiceCover from "@/components/ServiceCover";
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY, waLink } from "@/lib/site";

const IMAGE = "/images/services/endoscopy-preparation.jpg";

export const metadata: Metadata = {
  title: "Maandalizi ya Endoscopy na Colonoscopy | Kusafisha Utumbo",
  description:
    "Jinsi ya kujiandaa kwa endoscopy (OGD) au colonoscopy katika HealthPro Surgery, Mombasa: chakula, muda wa kunywa ColoPrep na Dulcolax, dawa, kufunga na siku ya kipimo.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    locale: "sw_KE",
    title: "Maandalizi ya Endoscopy na Colonoscopy | HealthPro Surgery",
    description:
      "Chakula, muda wa kunywa dawa ya kusafisha utumbo, dawa zako, kufunga na unachotarajia siku ya kipimo.",
    images: [{ url: `https://www.healthprosurgery.com${IMAGE}`, width: 1200, height: 800 }],
  },
  alternates: {
    canonical: "/services/endoscopy-preparation/kiswahili",
    languages: {
      en: "/services/endoscopy-preparation",
      sw: "/services/endoscopy-preparation/kiswahili",
    },
  },
};

const COLONOSCOPY_TIMELINE = [
  {
    when: "Siku 7 kabla",
    title: "Kagua dawa zako",
    items: [
      "Acha kutumia vidonge vya madini ya chuma (iron).",
      "Tujulishe ikiwa unatumia dawa za kuzuia damu kuganda (k.m. warfarin, clopidogrel, rivaroxaban, apixaban) au dawa za kisukari. Usiziache bila ushauri maalum.",
      "Endelea na dawa nyingine zote za kawaida isipokuwa umeelekezwa vinginevyo.",
    ],
  },
  {
    when: "Siku 3 kabla",
    title: "Anza chakula chenye nyuzinyuzi kidogo",
    items: [
      "Kula: wali mweupe, mkate mweupe, ugali, viazi vilivyomenywa, mayai, kuku, samaki na supu safi.",
      "Epuka: matunda na mboga zenye maganda au mbegu, maharagwe, njegere, dengu, karanga, nafaka nzima, githeri na mkate wa kahawia.",
    ],
  },
  {
    when: "Siku moja kabla — asubuhi",
    title: "Kiamsha kinywa chepesi, kisha vinywaji safi pekee",
    items: [
      "Kula kiamsha kinywa chepesi chenye nyuzinyuzi kidogo, ukimaliza kabla ya saa tatu asubuhi (9:00 am).",
      "Baada ya hapo, kunywa vinywaji safi pekee: maji, supu safi isiyo na vipande, juisi safi isiyo na vipande, chai au kahawa bila maziwa, na ORS.",
      "Epuka vinywaji vyekundu au vya zambarau, pamoja na maziwa.",
    ],
  },
  {
    when: "Siku moja kabla — saa tisa alasiri (3:00 pm)",
    title: "Chupa ya kwanza ya ColoPrep + vidonge 4 vya Dulcolax",
    items: [
      "Kunywa chupa ya kwanza ya ColoPrep, ukiitayarisha kama ilivyoelekezwa kwenye pakiti.",
      "Wakati huo huo, meza vidonge 4 vya Dulcolax (bisacodyl).",
      "Kunywa vinywaji safi kwa wingi katika saa zinazofuata, angalau glasi 4 hadi 6.",
    ],
    highlight: true,
  },
  {
    when: "Siku moja kabla — saa kumi na mbili jioni (6:00 pm)",
    title: "Chupa ya pili ya ColoPrep",
    items: [
      "Kunywa chupa ya pili ya ColoPrep, ukiitayarisha kama ilivyoelekezwa kwenye pakiti.",
      "Endelea kunywa vinywaji safi kwa wingi jioni nzima.",
      "Kaa karibu na choo. Kwenda haja mara kwa mara na choo cha majimaji ni kawaida, na kunaonyesha kuwa dawa inafanya kazi.",
    ],
    highlight: true,
  },
  {
    when: "Siku ya kipimo",
    title: "Usile wala usinywe",
    items: [
      "Unaweza kunywa vinywaji safi kidogo kidogo hadi saa 2 kabla ya miadi yako, kisha usinywe chochote.",
      "Choo chako kinapaswa kuwa majimaji safi au ya manjano hafifu. Ikiwa bado ni cha kahawia au kina vipande vigumu, tupigie simu kabla ya kuja.",
      "Leta orodha ya dawa zako, kadi ya bima, na mtu wa kukusindikiza nyumbani.",
    ],
  },
];

const OGD_STEPS = [
  "Usile chakula kwa saa 6 kabla ya kipimo.",
  "Unaweza kunywa maji kidogo kidogo hadi saa 2 kabla, kisha usinywe chochote.",
  "Meza dawa muhimu za asubuhi (k.m. za shinikizo la damu) kwa maji kidogo, isipokuwa umeelekezwa vinginevyo.",
  "Tujulishe mapema kuhusu dawa za kuzuia damu kuganda na dawa za kisukari.",
  "Panga mtu wa kukusindikiza nyumbani ikiwa utapewa dawa ya usingizi.",
];

const faqs = [
  {
    question: "Kwa nini kusafisha utumbo ni muhimu?",
    answer:
      "Utumbo mpana lazima uwe safi kabisa ili ndani yake ionekane vizuri. Usafishaji usiotosha unaweza kuficha vinyama (polyps) au matatizo mengine, na huenda kipimo kikalazimika kurudiwa.",
  },
  {
    question: "Nikitapika au nikishindwa kumaliza dawa, nifanye nini?",
    answer:
      "Punguza kasi, pumzika kwa dakika 30 hadi 60, kisha endelea kunywa taratibu. Ukishindwa kabisa kuimeza dawa, piga simu ofisini kabla ya miadi yako upate ushauri.",
  },
  {
    question: "Nina kisukari. Kuna jambo maalum la kufanya?",
    answer:
      "Ndiyo. Kwa kuwa utakula kidogo, kiasi cha vidonge vya kisukari au insulini kinaweza kuhitaji kubadilishwa siku moja kabla na siku ya kipimo. Pima sukari mara nyingi zaidi na wasiliana nasi mapema upate mpango maalum.",
  },
  {
    question: "Nitapewa dawa ya usingizi? Naweza kuendesha gari baadaye?",
    answer:
      "Wagonjwa wengi hupewa dawa ya usingizi. Usiendeshe gari, usitumie mashine wala usitie sahihi nyaraka muhimu kwa saa 24 baadaye. Panga mtu mzima akusindikize nyumbani.",
  },
  {
    question: "Nitafute msaada wa haraka lini baada ya kipimo?",
    answer:
      "Wasiliana nasi au nenda idara ya dharura ukipata maumivu makali ya tumbo yanayozidi, tumbo kuvimba na kuwa gumu, homa, kutapika, au damu nyingi kutoka njia ya haja kubwa.",
  },
];

export default function EndoscopyPreparationSwahiliPage() {
  return (
    <>
      <section className="hero" lang="sw">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Mwongozo wa maandalizi
        </div>
        <h1 className="h1">Maandalizi ya endoscopy na colonoscopy</h1>
        <p className="p" style={{ maxWidth: 780 }}>
          Maandalizi mazuri hufanya kipimo chako kiwe salama zaidi, cha haraka na sahihi. Tafadhali
          soma maelekezo haya kwa makini unapopanga miadi, na fuata ushauri wowote maalum utakaopewa na
          timu yetu.
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href="#colonoscopy">
            Maandalizi ya colonoscopy
          </a>
          <a className="btn" href="#ogd">
            Endoscopy ya juu (OGD)
          </a>
        </div>
        <div className="langSwitch" lang="en">
          <span>English version:</span>
          <Link href="/services/endoscopy-preparation">Preparing for endoscopy &amp; colonoscopy</Link>
        </div>
        <DownloadLinks keys={["colonoscopy-sw", "colonoscopy"]} label="Karatasi ya kuchapisha (PDF):" />
      </section>

      <div lang="sw">
      <ServiceCover
        images={[{ src: IMAGE, alt: "Daktari na muuguzi wakimweleza mgonjwa maandalizi ya colonoscopy" }]}
      />

      <h2 id="colonoscopy" className="sectionTitle anchorTarget">
        Colonoscopy: hatua kwa hatua za kusafisha utumbo
      </h2>
      <p className="p" style={{ maxWidth: 780, margin: "0 0 18px" }}>
        Maelekezo haya ni kwa miadi ya asubuhi. Ikiwa kipimo chako ni mchana, utapewa muda tofauti.
      </p>
      <ol className="prepTimeline">
        {COLONOSCOPY_TIMELINE.map((step) => (
          <li key={step.when} className={step.highlight ? "prepStep prepStepKey" : "prepStep"}>
            <div className="prepWhen">{step.when}</div>
            <div className="prepBody">
              <h3>{step.title}</h3>
              <ul>
                {step.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <section id="ogd" className="card anchorTarget" style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 22 }}>Endoscopy ya juu (OGD)</h2>
        <p style={{ marginBottom: 10 }}>
          Hakuna haja ya kusafisha utumbo kwa OGD. Tumbo linahitaji tu kuwa tupu:
        </p>
        <ul className="list">
          {OGD_STEPS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="small" style={{ marginTop: 12 }}>
          Ikiwa utafanyiwa OGD na colonoscopy siku moja, fuata maandalizi ya colonoscopy.
        </p>
      </section>

      <FAQSection title="Maswali yanayoulizwa mara kwa mara" faqs={faqs} />

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Una swali kuhusu maandalizi yako?</h2>
        <p>
          Piga simu ofisini{" "}
          <a href={`tel:+${OFFICE_PHONE}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
            {OFFICE_PHONE_DISPLAY}
          </a>{" "}
          au tutumie ujumbe wa WhatsApp. Vipimo hufanyika Aga Khan Hospital Mombasa.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Habari HealthPro Surgery, nina swali kuhusu maandalizi ya endoscopy/colonoscopy.")}
            target="_blank"
            rel="noreferrer"
          >
            Uliza kwa WhatsApp
          </a>
          <Link className="btn" href="/services/gi-endoscopy">
            Kuhusu endoscopy na colonoscopy
          </Link>
        </div>
        <p className="small" style={{ margin: 0 }}>
          Haya ni maelekezo ya jumla. Daima fuata maelekezo maalum utakayopewa na timu yetu.
        </p>
      </section>
      </div>
    </>
  );
}
