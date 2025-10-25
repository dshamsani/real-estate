import { getImage } from "@/assets";

export const PARTNERS = [
  { src: getImage("partners/stellar.png"), alt: "Stellar" },
  { src: getImage("partners/blockport.png"), alt: "Blockport" },
  { src: getImage("partners/fantom.png"), alt: "Fantom" },
  { src: getImage("partners/onfido.png"), alt: "Onfido" },
  { src: getImage("partners/tr.png"), alt: "TR" },
  { src: getImage("partners/qa.png"), alt: "QA" },
];

export const BREAKPOINTS = {
  0: { slidesPerView: 2 as const },
  520: { slidesPerView: 3 as const },
  768: { slidesPerView: 4 as const },
  992: { slidesPerView: 5 as const },
  1198: { slidesPerView: 5 as const },
};
