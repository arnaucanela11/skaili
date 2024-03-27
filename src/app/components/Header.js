"use client";
import Image from "next/image";
import React, { useState } from "react";
import AngelyLogo from "../assets/AngelyLogo.png";
import "./components.css";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
      {/* <button className="header__nav__toggle-button">
        <input
          type="checkbox"
          id="checkbox"
          value={toggleMenu}
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        <label for="checkbox" class="toggle">
          <div class="bars" id="bar1"></div>
          <div class="bars" id="bar2"></div>
          <div class="bars" id="bar3"></div>
        </label>
      </button> */}
      <motion.nav animate={isOpen ? "closed" : "open"} variants={variants}>
        <button className="header__nav__toggle-button">
          <input
            type="checkbox"
            id="checkbox"
            value={isOpen}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          />
          <label for="checkbox" class="toggle">
            <div class="bars" id="bar1"></div>
            <div class="bars" id="bar2"></div>
            <div class="bars" id="bar3"></div>
          </label>
        </button>

        <li className="text-white">Hello</li>
        <li className="text-white">Hello</li>
        <li className="text-white">Hello</li>
      </motion.nav>
    </section>
  );
}

export default Header;
