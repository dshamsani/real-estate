import type { PropertyTab } from "@/app/Properties";
import { getImage } from "@/assets";

type CardItem = {
  id: number;
  imageSrc: string;
  title: string;
  agency: string;
  countdown: { h: number; m: number; s: number };
  currentBidEth: string;
  category: Exclude<PropertyTab, "All">;
};

export const TABS: PropertyTab[] = ["All", "Cottage", "Chalet", "Manor", "Penthouse", "Farmhouse", "Duplex"];

export const TAB_BREAKPOINTS = {
  0: { slidesPerView: 3 as const },
  768: { slidesPerView: 6 as const },
};

export const CARD_BREAKPOINTS = {
  0: { slidesPerView: 1 as const },
  520: { slidesPerView: 2 as const },
  768: { slidesPerView: 3 as const },
  992: { slidesPerView: 4 as const },
  1198: { slidesPerView: 5 as const },
};

export const PROPERTIES_CARDS: CardItem[] = [
  {
    id: 1,
    imageSrc: getImage("properties/picture-of-a-wooden-building-in-the-forest.webp"),
    title: "Cottage «Forrest 1»",
    agency: "@Red Oak Realty",
    countdown: { h: 9, m: 45, s: 8 },
    currentBidEth: "29.71",
    category: "Cottage",
  },
  {
    id: 2,
    imageSrc: getImage("properties/pexels-stan-krotov-12737424 1.webp"),
    title: "Freshness",
    agency: "@ERA Ukraine Real Estate",
    countdown: { h: 29, m: 15, s: 10 },
    currentBidEth: "14.81",
    category: "Chalet",
  },
  {
    id: 3,
    imageSrc: getImage("properties/pexels-rachel-claire-8112843 1.webp"),
    title: "Wish house",
    agency: "@UA real estate agency",
    countdown: { h: 23, m: 6, s: 1 },
    currentBidEth: "16.62",
    category: "Manor",
  },
  {
    id: 4,
    imageSrc: getImage("properties/david-kovalenko-9-qFzV9a2Zc-unsplash.webp"),
    title: "Spruce",
    agency: "@Dream House",
    countdown: { h: 10, m: 30, s: 58 },
    currentBidEth: "17.01",
    category: "Farmhouse",
  },
  {
    id: 5,
    imageSrc: getImage("properties/house_big-1.webp"),
    title: "Residence Rybna",
    agency: "@UA real estate agency",
    countdown: { h: 18, m: 21, s: 8 },
    currentBidEth: "29.71",
    category: "Penthouse",
  },
  {
    id: 6,
    imageSrc: getImage("properties/house_big.webp"),
    title: "Blue Sky",
    agency: "@ERA Ukraine Real Estate",
    countdown: { h: 23, m: 16, s: 11 },
    currentBidEth: "17.31",
    category: "Duplex",
  },
];
