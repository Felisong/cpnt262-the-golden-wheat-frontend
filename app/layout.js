import localFont from "next/font/local";
import { Lexend_Exa } from "next/font/google";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import Navigation from "./components/Navigation";

const lexend = Lexend_Exa({
  subsets: ["latin"],
});
const workSans = Work_Sans({
  subsets: ["latin"],
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
        className={`${lexend.className} ${workSans.className} antialiased grid var(--background) w-[100vw]`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
