import { Young_Serif, Outfit, DM_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";

export const youngSerif = Young_Serif({
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export const outfit = Outfit({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
});

export const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
});

export const figtree = Figtree({
	subsets: ["latin"],
	weight: ["500", "800"],
	display: "swap",
});

export const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"], // Adding 700 for headings just in case, though 500 was mentioned
	display: "swap",
});
