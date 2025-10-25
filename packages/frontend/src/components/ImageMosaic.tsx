import type { FC } from "react";

type MosaicImage = {
  src: string;
  alt: string;
};

type ImageMosaicProps = {
  images: MosaicImage[];
  className?: string;
  gap?: number;
  imgClassName?: string;
};

export const ImageMosaic: FC<ImageMosaicProps> = ({ images, className, gap = 8, imgClassName }) => {
  const styleRow = { gap: `${gap}px` };

  return (
    <div className={className}>
      <div className="d-flex" style={styleRow}>
        {[images[0], images[1]].map((img) => (
          <div key={img.src} style={{ flex: 1 }}>
            <img
              src={img.src}
              alt={img.alt}
              className={imgClassName ?? "img p-0"}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 50vw, 25vw"
              style={{
                width: "100%",
                aspectRatio: "4 / 5",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      <div className="d-flex mt-2" style={styleRow}>
        {[images[2], images[3]].map((img) => (
          <div key={img.src} style={{ flex: 1 }}>
            <img
              src={img.src}
              alt={img.alt}
              className={imgClassName ?? "img p-0"}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 50vw, 25vw"
              style={{
                width: "100%",
                aspectRatio: "4 / 5",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
