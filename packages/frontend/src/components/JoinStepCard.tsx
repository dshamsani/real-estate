import type { FC } from "react";
import { AnimationTitles } from "../components/AnimationTitles";

type JoinStepCardProps = {
  step: number;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
};

export const JoinStepCard: FC<JoinStepCardProps> = ({ step, title, description, imgSrc, imgAlt }) => (
  <div className="d-flex align-items-start flex-column px-3 py-4 text-start">
    <h4 className="gray-100 mb-5">{step}</h4>
    <img
      src={imgSrc}
      alt={imgAlt}
      loading="lazy"
      decoding="async"
      style={{
        width: "100%",
        height: "auto",
        maxWidth: "220px",
        objectFit: "contain",
      }}
    />
    <AnimationTitles title={title} className="h4 mt-5 mb-4 text-white" />
    <p className="gray-50">{description}</p>
  </div>
);
