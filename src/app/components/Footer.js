"use client";
import Translator from "./Translator";
import FooterBg from "../assets/Ellipse 6.png";
import FooterLogo from "../assets/Group 15.png";
import Link from "next/link"
import Image from "next/image"

function Footer() {
  return (
    <Translator>
      {(translations) => (
        <section className="footer__section">
          <Image src={FooterBg} className="footer__bg" alt="footer__bg"></Image>
          <div className="footer__div">
            <div className="footer__links__div">
              <a className="footer__links__span" href="#services__section">
                {translations.headerelement1}
              </a>
              <a href="#process__section" className="footer__links__span">
                {translations.headerelement2}
              </a>
              <a className="footer__links__span" href="#questions__section">
                {translations.headerelement3}
              </a>
              <Link href="/contact" className="header__contact__button__footer">
              {translations.contactbutton}
              </Link>
            </div>
            <a href="#main__section">
              <Image src={FooterLogo} alt="footer__logo"></Image>
            </a>
            <span className="rights__span">
              @Skaili all rights reserved 2024
            </span>
          </div>
        </section>
      )}
    </Translator>
  );
}

export default Footer;
