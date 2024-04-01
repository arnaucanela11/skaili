"use client"
import Image from "next/image";
import { shanti, poppins } from "./MainScreen";
import ServicesLines from "../assets/ServicesLines.png";
import GradientServices from "../assets/GradientServices.png";
import Translator from "./Translator";

function Services() {
  return (
    <Translator>
    {(translations) => (
    <section className="services__section" id="services__section">
      <Image
        alt="gradients"
        src={GradientServices}
        className="gradient__services__image"
      ></Image>
      <div className="services__main__div">
        <div className="services__main__flex__div">
          <div className="services__title__div">
            <Image className="services__lines" src={ServicesLines}></Image>
            <span className={`services__main__title ${shanti.className}`}>
              {translations.servicestitle}
            </span>
            <Image className="services__lines" src={ServicesLines}></Image>
          </div>
          <div className="services__main__flex__div__2">
            <div className="services__main__flex__div__3">
              <div className="services__web__creation__div">
                <div className="services__web__creation__div__shadow"></div>
                <div className="web__creation__div">
                  <span className={`web__creation__span ${poppins.className}`}>
                    {translations.webcreationspan}
                  </span>
                  <span
                    className={`web__creation__span__brackets ${poppins.className}`}
                  >
                    {translations.webcreationspan1}
                  </span>
                </div>
                <ul className={`ul__services ${poppins.className}`}>
                  <li>
                    {translations.servicestext1}
                  </li>
                  <li>{translations.servicestext2}</li>
                  <li>{translations.servicestext3}</li>
                  <li>
                  {translations.servicestext4}
                  </li>
                  <li>{translations.servicestext5}</li>
                  <li>
                  {translations.servicestext6}
                  </li>
                </ul>
              </div>
            </div>
            <div className="ServicesTech__image"></div>
          </div>
        </div>
      </div>
    </section>
    )}
    </Translator>
  );
}

export default Services;
