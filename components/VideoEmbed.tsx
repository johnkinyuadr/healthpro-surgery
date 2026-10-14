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
