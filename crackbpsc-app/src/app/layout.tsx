import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
    title: "CrackBPSC — हर टेस्ट में एक कदम जीत के करीब",
  description: "BPSC, TRE 4.0, SSC, Railway, Banking, UPSC और सभी प्रतियोगी परीक्षाओं (All Exams) के लिए स्मार्ट Bilingual Mock Tests, PYQs, Current Affairs और Live Rank Analysis।",

};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
