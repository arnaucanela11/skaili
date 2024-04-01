"use client";
import { Shanti, Raleway, Poppins } from "next/font/google";
export const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });
export const shanti = Shanti({ subsets: ["latin"], weight: ["400"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
import "../main.css";
import Link from "next/link";
import Translator from "./Translator";

function MainScreen() {
  return (
    <Translator>
      {(translations) => (
        <div className="main__page__main__div">
          <h1 className={`main__page__main__title ${shanti.className}`}>
            {translations.maintitle1}
            <br />
            {translations.maintitle2}
          </h1>
          <h3 className={`main__page__main__description ${raleway.className}`}>
            {translations.mainsubtitle}
          </h3>
          <Link href={"/contact"} className="main__page__main__button">
            {translations.mainbutton}
            <svg
              className="main__button__svg"
              width="37"
              height="36"
              viewBox="0 0 37 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5781 13.125L21.8281 18L16.5781 22.875"
                stroke="#70757E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      )}
    </Translator>
  );
}

export default MainScreen;
