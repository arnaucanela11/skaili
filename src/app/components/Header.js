import Image from "next/image";
import React from "react";
import AngelyLogo from "../assets/AngelyLogo.png";
import "./components.css";
import Link from "next/link";

function Header() {
  return (
    <section className="header__section">
      <Image alt="logo" src={AngelyLogo} className="Angely__logo" />
      <div className="header__elements__div">
        <a className="footer__links__span" href="#services__section">
          Services
        </a>
        <a href="#process__section" className="footer__links__span">
          Process
        </a>
        <a className="footer__links__span" href="#questions__section">
          Frequent questions
        </a>
      </div>
      <Link href="/contact" className="header__contact__button">
        Contact
      </Link>
    </section>
  );
}

export default Header;
