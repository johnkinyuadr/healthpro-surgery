import Image from "next/image";

export type CoverImage = { src: string; alt: string };

// Full-width photo (or pair of photos) shown beneath a page header.
export default function ServiceCover({ images }: { images: CoverImage[] }) {
  if (images.length === 0) return null;
  return (
    <div className={images.length > 1 ? "serviceCover serviceCoverPair" : "serviceCover"}>
      {images.map((img, i) => (
        <figure key={img.src}>
          <Image
            src={img.src}
            alt={img.alt}
            width={1200}
            height={800}
            priority={i === 0}
            sizes={images.length > 1 ? "(max-width: 700px) 100vw, 580px" : "(max-width: 1200px) 100vw, 1150px"}
          />
        </figure>
      ))}
    </div>
  );
}
