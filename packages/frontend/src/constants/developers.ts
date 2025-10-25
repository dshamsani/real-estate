import { getImage } from "@/assets";

export const DEVS_BREAKPOINTS_TOP = {
  0: { slidesPerView: 2 as const },
  596: { slidesPerView: 3 as const },
  998: { slidesPerView: 4 as const },
  1198: { slidesPerView: 5 as const },
};

export const DEVS_BREAKPOINTS_BOTTOM = {
  0: { slidesPerView: 2 as const },
  596: { slidesPerView: 3 as const },
  1298: { slidesPerView: 5 as const },
};

export const DEVELOPERS_TOP = [
  { src: getImage("developers/logo-01.png"), alt: "UA real house", name: "UA real house" },
  { src: getImage("developers/logo-02.png"), alt: "ERA Ukraine Real Estate", name: "ERA Ukraine Real Estate" },
  { src: getImage("developers/logo-03.png"), alt: "Happy Neighbor", name: "Happy Neighbor" },
  { src: getImage("developers/logo-04.png"), alt: "American Home Agents", name: "American Home Agents" },
  { src: getImage("developers/logo-05.png"), alt: "Ukr Home Agents", name: "Ukr Home Agents" },
  { src: getImage("developers/logo-06.png"), alt: "UA real estate agency", name: "UA real estate agency" },
];

export const DEVELOPERS_BOTTOM = [
  { src: getImage("developers/logo-07.png"), alt: "Red Oak Realty", name: "Red Oak Realty" },
  { src: getImage("developers/logo-08.png"), alt: "Dream House", name: "Dream House" },
  { src: getImage("developers/logo-09.png"), alt: "Leading Real Estate Companies", name: "Leading Real Estate Companies" },
  { src: getImage("developers/logo-10.png"), alt: "Home Partners of World", name: "Home Partners of World" },
  { src: getImage("developers/logo-11.png"), alt: "Red Oak Realty", name: "Red Oak Realty" },
  { src: getImage("developers/logo-13.png"), alt: "American Home Agents", name: "American Home Agents" },
  { src: getImage("developers/logo-12.png"), alt: "UA real estate agency", name: "UA real estate agency" },
];
