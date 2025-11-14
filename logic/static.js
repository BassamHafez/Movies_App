import {
  House,
  Heart,
  Play,
  Hourglass,
  ScanHeart,
  Rocket,
} from "@/shared/icons";
import {
  AlertTriangle,
  Bell,
  CalendarClock,
  CheckCircle2,
  CreditCard,
  HardDrive,
  Mail,
  RefreshCcw,
  ShieldAlert,
  Users,
} from "lucide-react";
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

//pages
const privatePages = [
  { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Shows", path: "/tv" },
];

const publicPages = [
  { name: "Events", path: "events" },
  { name: "Tickets", path: "tickets" },
  { name: "Methods", path: "methods" },
  { name: "Packages", path: "packages" },
];

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

const moviesSideBarPages = [
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
];

const tvsSidebarPages = [
  {
    title: "Discover",
    param: "discover",
    icon: House,
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
    title: "Airing Today",
    param: "airing_today",
    icon: Rocket,
  },
  {
    title: "On The Air",
    param: "on_the_air",
    icon: Play,
  },
];

const notifications = [
  {
    _id: "not_1",
    icon: AlertTriangle,
    text: "**'The Starlight Saga'** is leaving the platform in 48 hours!",
    time: "2 min",
  },
  {
    _id: "not_2",
    icon: CreditCard,
    text: "Your **premium subscription** is expiring in 3 days. Renew now!",
    time: "10 min",
  },
  {
    _id: "not_3",
    icon: CheckCircle2,
    text: "You have successfully started your **30-day free trial**!",
    time: "1 hr",
  },
  {
    _id: "not_4",
    icon: Users,
    text: "**Alex** shared a movie suggestion with you: *'Neon City Dreams'*",
    time: "2 hrs",
  },
  {
    _id: "not_5",
    icon: ShieldAlert,
    text: "New device logged in to your account from **London, UK**.",
    time: "6 hrs",
  },
  {
    _id: "not_6",
    icon: HardDrive,
    text: "Your download of **'The Martian Colony' (S01E05)** is complete.",
    time: "1 day",
  },
  {
    _id: "not_7",
    icon: CalendarClock,
    text: "The **Season 2 Premiere** of *'Mythos'* is tonight at 11 PM!",
    time: "1 day",
  },
  {
    _id: "not_8",
    icon: RefreshCcw,
    text: "**New Episode!** *'Echoes of Time'* S03E01 is now streaming.",
    time: "2 days",
  },
  {
    _id: "not_9",
    icon: Mail,
    text: "4 movies on your **Watch List** are now available in 4K UHD.",
    time: "3 days",
  },
  {
    _id: "not_10",
    icon: Bell,
    text: "We think you'll love: **'The Last Dragon'** (based on your watch history).",
    time: "5 days",
  },
];

export {
  privatePages,
  publicPages,
  packagesData,
  playFairFont,
  interFont,
  moviesSideBarPages,
  tvsSidebarPages,
  notifications,
};
