import { Playfair_Display, Inter } from "next/font/google";
import {
  ChartPie,
  Users,
  House,
  Headset,
  Monitor,
  Palette,
  Podcast,
} from "lucide-react";

//fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
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
    title: "overview",
    url: "/dashboard/overview",
    icon: House,
  },
  {
    title: "administrators",
    url: "/dashboard/administrators",
    icon: Monitor,
  },
  {
    title: "users",
    url: "/dashboard/users",
    icon: Users,
  },
  {
    title: "reports",
    url: "/dashboard/reports",
    icon: ChartPie,
  },
  {
    title: "themeSettings",
    url: "/dashboard/theme-setting",
    icon: Palette,
  },
  {
    title: "marketing",
    url: "/dashboard/marketing",
    icon: Podcast,
  },
  {
    title: "customers",
    url: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "support",
    url: "/dashboard/support",
    icon: Headset,
  },
];

export { packagesData, playFairFont, interFont, sideBarPages };
