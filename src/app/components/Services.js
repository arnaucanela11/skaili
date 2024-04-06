"use client";
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
                <div className="services__main__left__div">
                  <div className="services__main__flex__div__3">
                    <div className="services__web__creation__div">
                      <div className="services__web__creation__div__shadow"></div>
                      <div className="web__creation__div">
                        <span
                          className={`web__creation__span ${poppins.className}`}
                        >
                          {translations.webcreationspan}
                        </span>
                        <span
                          className={`web__creation__span__brackets ${poppins.className}`}
                        >
                          {translations.webcreationspan1}
                        </span>
                      </div>
                      <ul className={`ul__services ${poppins.className}`}>
                        <li>{translations.servicestext1}</li>
                        <li>{translations.servicestext2}</li>
                        <li>{translations.servicestext3}</li>
                        <li>{translations.servicestext4}</li>
                        <li>{translations.servicestext5}</li>
                        <li>{translations.servicestext6}</li>
                        <li className="services__special__li">{translations.servicestext7}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="services__alert__div">
                    <svg
                    className="services__alert__svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8333 14.5834C10.8333 14.8044 10.7455 15.0163 10.5892 15.1726C10.433 15.3289 10.221 15.4167 9.99999 15.4167C9.77898 15.4167 9.56701 15.3289 9.41073 15.1726C9.25445 15.0163 9.16666 14.8044 9.16666 14.5834C9.16666 14.3624 9.25445 14.1504 9.41073 13.9941C9.56701 13.8378 9.77898 13.75 9.99999 13.75C10.221 13.75 10.433 13.8378 10.5892 13.9941C10.7455 14.1504 10.8333 14.3624 10.8333 14.5834ZM10.625 7.70837C10.625 7.54261 10.5591 7.38364 10.4419 7.26643C10.3247 7.14922 10.1658 7.08337 9.99999 7.08337C9.83423 7.08337 9.67526 7.14922 9.55805 7.26643C9.44084 7.38364 9.37499 7.54261 9.37499 7.70837V11.4584C9.37499 11.6241 9.44084 11.7831 9.55805 11.9003C9.67526 12.0175 9.83423 12.0834 9.99999 12.0834C10.1658 12.0834 10.3247 12.0175 10.4419 11.9003C10.5591 11.7831 10.625 11.6241 10.625 11.4584V7.70837Z"
                        fill="white"
                        fill-opacity="0.7"
                      />
                      <path
                        d="M8.19666 2.70334C8.99916 1.31584 11.0008 1.31584 11.8033 2.70334L19.2758 15.6233C20.0783 17.0125 19.0758 18.75 17.4717 18.75H2.52832C0.923321 18.75 -0.078346 17.0125 0.724154 15.6233L8.19666 2.70334ZM10.7217 3.32918C10.6482 3.20293 10.5429 3.09816 10.4162 3.02534C10.2896 2.95253 10.1461 2.9142 9.99999 2.9142C9.85391 2.9142 9.71039 2.95253 9.58375 3.02534C9.45712 3.09816 9.3518 3.20293 9.27832 3.32918L1.80665 16.2492C1.73384 16.376 1.6956 16.5196 1.69574 16.6658C1.69589 16.8121 1.73442 16.9557 1.80749 17.0823C1.88055 17.2089 1.98559 17.3142 2.11209 17.3875C2.23859 17.4608 2.38212 17.4996 2.52832 17.5H17.4717C17.6177 17.4995 17.7611 17.4607 17.8875 17.3874C18.0139 17.3142 18.1189 17.209 18.1919 17.0825C18.2649 16.956 18.3035 16.8125 18.3038 16.6665C18.304 16.5204 18.2659 16.3768 18.1933 16.25L10.7217 3.32918Z"
                        fill="white"
                        fill-opacity="0.7"
                      />
                    </svg>
                    <span className="services__alert__span">{translations.servicesalerttext}</span>
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
