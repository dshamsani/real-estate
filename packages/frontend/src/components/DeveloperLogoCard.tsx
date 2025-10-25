import type { FC } from "react";

export type DeveloperLogoCardProps = {
  src: string;
  alt: string;
  name: string;
};

export const DeveloperLogoCard: FC<DeveloperLogoCardProps> = ({ src, name }) => (
  <div className="d-flex justify-content-between align-items-center px-3 py-2">
    <img
      className="pe-3"
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      decoding="async"
      style={{ height: 40, width: "auto", objectFit: "contain" }}
    />
    <h6 className="m-0 text-white">{name}</h6>
  </div>
);
