import localFont from "next/font/local";
import { Lexend_Exa } from "next/font/google";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Navigation from "./components/Navigation";

const lexendExa = Lexend_Exa({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lexend-exa",
});

// weight is literal weight of font (bold), variable is to give tailwind config access.
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-work-sans",
});

export const metadata = {
  title: "The Golden Wheat",
  description:
    "Welcome to The Golden Wheat Factory! The best baked goods in Calgary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexendExa.variable} ${workSans.variable} antialiased grid var(--background) w-[100vw]`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
