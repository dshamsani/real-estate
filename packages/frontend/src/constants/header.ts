import { getImage } from "@/assets";

export const STATS = [
  { value: "12K+", label: "properties" },
  { value: "10K+", label: "auction" },
  { value: "12K+", label: "developers" },
];

export const HEADER_CARDS = [
  {
    id: 1,
    imageSrc: getImage("properties/house_big-1.webp"),
    title: "Residence Rybna",
    agency: "@UA real estate agency",
    countdown: { h: 18, m: 21, s: 8 },
    currentBidEth: "29.71",
  },
  {
    id: 2,
    imageSrc: getImage("properties/house_big.webp"),
    title: "Blue Sky",
    agency: "@ERA Ukraine Real Estate",
    countdown: { h: 23, m: 16, s: 11 },
    currentBidEth: "17.31",
  },
];
