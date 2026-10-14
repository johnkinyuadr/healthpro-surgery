type Props = { youtubeId: string; title: string };

// Privacy-enhanced YouTube embed (no tracking cookies until the viewer presses play).
export default function VideoEmbed({ youtubeId, title }: Props) {
  return (
    <div className="videoFrame">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

// Instagram reel embed (official /embed endpoint, no extra script needed).
export function InstagramEmbed({ shortcode, title }: { shortcode: string; title: string }) {
  return (
    <div className="reelFrame">
      <iframe
        src={`https://www.instagram.com/reel/${shortcode}/embed/`}
        title={title}
        loading="lazy"
        allow="encrypted-media; picture-in-picture; web-share"
        scrolling="no"
        allowFullScreen
      />
    </div>
  );
}
