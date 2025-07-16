import {
  House,
  Heart,
  Play,
  Hourglass,
  ScanHeart,
  TvMinimalPlay,
} from "@/shared/icons";
import { Playfair_Display, Inter } from "next/font/google";

//fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const playFairFont = playfair?.className;
const interFont = inter?.className;

//data
const packagesData = [
  {
    _id: "pack_2",
    type: "economy",
    name: "🎬 CineLite",
    price: "4.99",
    features: [
      "Watch on 1 device at a time",
      "Standard Definition (SD) quality",
      "Limited movie library",
    ],
  },
  {
    _id: "pack_1",
    type: "most popular",
    name: "🍿 CinePlus",
    price: "9.99",
    features: [
      "High Definition (HD) quality",
      "Watch on 2 devices at the same time",
      "Access to new releases and popular shows",
    ],
  },
  {
    _id: "pack_3",
    type: "best price",
    name: "🎥 CineMax",
    price: "14.99",
    features: [
      "Watch on 4 devices simultaneously",
      "Ultra HD (4K) quality",
      "Unlimited access to all movies, series, and exclusives",
    ],
  },
];

const sideBarPages = [
  {
    title: "Discover",
    param: "discover",
    icon: House,
  },
  {
    title: "Now Playing",
    param: "now_playing",
    icon: Play,
  },
  {
    title: "Popular",
    param: "popular",
    icon: Heart,
  },
  {
    title: "Top Rated",
    param: "top_rated",
    icon: ScanHeart,
  },
  {
    title: "Up Coming",
    param: "upcoming",
    icon: Hourglass,
  },
  {
    title: "WatchList",
    param: "",
    icon: TvMinimalPlay,
  },
];

export { packagesData, playFairFont, interFont, sideBarPages };
