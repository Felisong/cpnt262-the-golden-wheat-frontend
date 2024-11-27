import localFont from "next/font/local";
import { Lexend_Exa } from "next/font/google";
import "./globals.css";
import { Work_Sans } from "next/font/google";

const lexend = Lexend_Exa({
  subsets: ["latin"],
});
const workSans = Work_Sans({});

export const metadata = {
  title: "The Golden Wheat",
  description: "Welcome to The Golden Wheat Factory! The best. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend.className} ${workSans.className} antialiased`}>
        {children}
        <nav></nav>
      </body>
    </html>
  );
}
