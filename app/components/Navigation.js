import Hamburger from "./Hamburger";
import Logo from "./Logo";
import { Lexend_Exa } from "next/font/google";
const lexend = Lexend_Exa({
  subsets: ["latin"],
});

export default function Navigation() {
  return (
    <nav className={`${lexend.className} flex w-full justify-between`}>
      <Logo />
      <ul>
        <li> adjust later</li>
        <li>
          {" "}
          <Hamburger />
        </li>
      </ul>
    </nav>
  );
}
