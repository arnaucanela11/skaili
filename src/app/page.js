import Image from "next/image";
import Header from "./components/Header";
import "./main.css";
import { poppins, raleway, shanti } from "./layout";
import Link from "next/link";
import CarruselImage1 from "./assets/Carrusel_image_1.png";
import CarruselImage2 from "./assets/Carrusel_image_2.png";
import CarruselImage3 from "./assets/Carrusel_image_3.jpg";
import CarruselImage4 from "./assets/Carrusel_image_4.png";
import CarruselImage5 from "./assets/Carrusel_image_5.png";
import BgColors from "./assets/Group 2.png";
import GradientServices from "./assets/GradientServices.png";
import BgEllipse from "./assets/Ellipse 5.png";
import Questions from "./components/Questions";
import FooterBg from "./assets/Ellipse 6.png";
import FooterLogo from "./assets/Group 15.png";
import Carousel from "./components/Carrusel";

const images = [
  CarruselImage4,
  CarruselImage1,
  CarruselImage3,
  CarruselImage2,
  CarruselImage5,
  CarruselImage4,
  CarruselImage1,
  CarruselImage3,
  CarruselImage2,
  CarruselImage5,
  CarruselImage4,
  CarruselImage1,
];

export default function Home() {
  return (
    <main className="h-[100vh] overflow-x-hidden overflow-y-scroll relative">
      <Header />
      <Image src={BgColors} className="main__page__bg__colors" alt="logo" />
      {/* <svg
        className="main__page__bg__colors"
        width="834"
        height="839"
        viewBox="0 0 1334 1239"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_3_42)">
          <rect
            x="463.121"
            y="350"
            width="226.158"
            height="226.158"
            transform="rotate(30.0124 463.121 350)"
            fill="#001AFF"
            fill-opacity="0.7"
          />
        </g>
        <g filter="url(#filter1_f_3_42)">
          <ellipse
            cx="853.321"
            cy="549.34"
            rx="160.257"
            ry="160.257"
            fill="#00C2FF"
            fill-opacity="0.7"
          />
        </g>
        <g filter="url(#filter2_f_3_42)">
          <path
            d="M590.865 450.322L643.094 611.066H812.111L675.373 710.412L727.602 871.156L590.865 771.811L454.127 871.156L506.356 710.412L369.619 611.066H538.636L590.865 450.322Z"
            fill="#DB00FF"
            fill-opacity="0.7"
          />
        </g>
        <g filter="url(#filter3_f_3_42)">
          <path
            d="M930.232 615.514L916.846 918.779L660.904 755.555L930.232 615.514Z"
            fill="#00FFA3"
            fill-opacity="0.7"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_3_42"
            x="0"
            y="0"
            width="1008.96"
            height="1008.96"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="175"
              result="effect1_foregroundBlur_3_42"
            />
          </filter>
          <filter
            id="filter1_f_3_42"
            x="373.064"
            y="69.0821"
            width="960.515"
            height="960.515"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="160"
              result="effect1_foregroundBlur_3_42"
            />
          </filter>
          <filter
            id="filter2_f_3_42"
            x="39.6188"
            y="120.322"
            width="1102.49"
            height="1080.83"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="165"
              result="effect1_foregroundBlur_3_42"
            />
          </filter>
          <filter
            id="filter3_f_3_42"
            x="340.904"
            y="295.514"
            width="909.327"
            height="943.264"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="160"
              result="effect1_foregroundBlur_3_42"
            />
          </filter>
        </defs>
      </svg> */}

      <section className="main__page__main__section__div" id="main__section">
        <div className="main__page__main__div">
          <h1 className={`main__page__main__title ${shanti.className}`}>
            EXPLORE NEW LIMITS
            <br />
            FOR YOUR BUSINESS
          </h1>
          <h3
            className={`main__page__main__description ${raleway.className}`}
          >
            We are a <span className="font-bold">digitalization agency</span>{" "}
            focused on helping you achieve the digitalitzation of your business,
            in a time record with our specialized team. All prepared to make
            your business more scalable.
          </h3>
          <Link href={"/contact"} className="main__page__main__button">
            Ask for a quote{" "}
            <svg
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
        <Carousel images={images} />
      </section>
      <section className="services__section" id="services__section">
        <Image
        alt="gradients"
          src={GradientServices}
          className="gradient__services__image"
        ></Image>
        <div className="services__main__div">
          <div className="services__main__flex__div">
            <span className={`services__main__title ${shanti.className}`}>
              SERVICES
            </span>
            <div className="services__main__flex__div__2">
              <div className="services__main__flex__div__3">
                <div className="services__web__creation__div">
                  <div className="web__creation__div">
                    <span
                      className={`web__creation__span ${poppins.className}`}
                    >
                      Web creation
                    </span>
                    <span
                      className={`web__creation__span__brackets ${poppins.className}`}
                    >
                      {" "}
                      (available for all kind of business)
                    </span>
                  </div>
                  <ul className={`ul__services ${poppins.className}`}>
                    <li>
                      Specially designed for you (by a professional designer)
                      and following your needs
                    </li>
                    <li>SSL certificate</li>
                    <li>SEO friendly</li>
                    <li>
                      Developed by a professional developer with a scalable
                      structure
                    </li>
                    <li>Fast loading</li>
                    <li>
                      Adaptation to complementary needs (Data Base, Backend,
                      etc)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ServicesTech__image"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="how_we_work__section" id="process__section">
        <Image src={BgEllipse} className="main__work__bg" alt="bg__colors"></Image>
        <div className="main__work__div relative">
          {/* <svg
            className="work__shape1"
            width="320"
            height="147"
            viewBox="0 0 320 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="320"
              height="300"
              transform="translate(0 -153)"
              fill="url(#paint0_radial_50_1491)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_50_1491"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(160 150) rotate(43.1524) scale(219.317 218.861)"
              >
                <stop stop-color="#C8C8C8" stop-opacity="0.1" />
                <stop offset="0.8" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            className="work__shape2"
            width="95"
            height="425"
            viewBox="0 0 95 425"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="280"
              height="425"
              transform="translate(-185)"
              fill="url(#paint0_radial_50_1645)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_50_1645"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(140 212.5) rotate(56.6222) scale(254.472 233.817)"
              >
                <stop stop-color="#C8C8C8" stop-opacity="0.1" />
                <stop offset="0.8" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <svg
          className="work__shape3"
            width="144"
            height="231"
            viewBox="0 0 144 231"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="136.663"
              height="276.201"
              transform="translate(0 51.1946) rotate(-22)"
              fill="url(#paint0_radial_50_1646)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_50_1646"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(68.3313 138.1) rotate(63.674) scale(154.081 122.489)"
              >
                <stop stop-color="#C8C8C8" stop-opacity="0.1" />
                <stop offset="0.8" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg> */}
          <span className="how_we_work__title">HOW WE WORK?</span>
          <div className="main__work__div__flex">
            <div className="main__work__div__flex__1">
              <div className="work__content__div">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_46_1440)">
                    <path
                      d="M13.5667 28.3494L14.5928 27.6637C14.48 27.495 14.3273 27.3568 14.1483 27.2613C13.9693 27.1658 13.7696 27.1159 13.5667 27.1161V28.3494ZM18.5 35.7445L17.4739 36.4277C17.5865 36.5966 17.7391 36.7351 17.9181 36.8309C18.0971 36.9267 18.297 36.9768 18.5 36.9768C18.703 36.9768 18.9029 36.9267 19.0819 36.8309C19.2609 36.7351 19.4135 36.5966 19.5261 36.4277L18.5 35.7445ZM23.4333 28.3494V27.1161C23.2304 27.1159 23.0307 27.1658 22.8517 27.2613C22.6727 27.3568 22.52 27.495 22.4072 27.6637L23.4333 28.3494ZM12.5405 29.0327L17.4739 36.4277L19.5261 35.0587L14.5928 27.6637L12.5405 29.0327ZM19.5261 36.4277L24.4595 29.0327L22.4072 27.6637L17.4739 35.0587L19.5261 36.4277ZM23.4333 29.5827H33.3V27.1161H23.4333V29.5827ZM33.3 29.5827C35.3449 29.5827 37 27.9301 37 25.8827H34.5333C34.5333 26.566 33.9833 27.1161 33.3 27.1161V29.5827ZM37 25.8827V3.7H34.5333V25.8852L37 25.8827ZM37 3.7C37 1.65267 35.3449 0 33.3 0V2.46667C33.9833 2.46667 34.5333 3.01673 34.5333 3.7H37ZM33.3 0H3.7V2.46667H33.3V0ZM3.7 0C1.65513 0 0 1.65267 0 3.7H2.46667C2.46667 3.01673 3.01673 2.46667 3.7 2.46667V0ZM0 3.7V25.8852H2.46667V3.69753L0 3.7ZM0 25.8852C0 27.9301 1.65513 29.5827 3.7 29.5827V27.1161C3.53795 27.1164 3.37742 27.0847 3.22764 27.0228C3.07786 26.961 2.94177 26.8701 2.82718 26.7556C2.71259 26.641 2.62175 26.5049 2.55989 26.3551C2.49802 26.2053 2.46634 26.0448 2.46667 25.8827L0 25.8852ZM3.7 29.5827H13.5667V27.1161H3.7V29.5827ZM12.3333 19.7333H24.6667V17.2667H12.3333V19.7333ZM9.86667 12.3333H27.1333V9.86667H9.86667V12.3333Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_46_1440">
                      <rect width="37" height="37" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="work__contact__span">
                  <b>Contact</b> and explain your project to us.
                </span>
                <Link className="work__contact__button" href={'/contact'}>Contact now</Link>
              </div>
              <div className="work__line1" />
              <div className="work__email__div">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 38C26 37.32 26.08 36.66 26.18 36H8V16L24 26L40 16V26.18C41.44 26.42 42.78 26.92 44 27.62V12C44 9.8 42.2 8 40 8H8C5.8 8 4 9.8 4 12V36C4 38.2 5.8 40 8 40H26.18C26.08 39.34 26 38.68 26 38ZM40 12L24 22L8 12H40ZM36 32V36H44V40H36V44L30 38L36 32Z"
                    fill="white"
                  />
                </svg>

                <span className="work__email__span">
                  We will reply you in a few time, explaining the stimated
                  budget and all the details.
                </span>
              </div>
              <div className="work__line1" />
              <div className="work__email__div">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.654 0C4.635 0 3 1.635 3 3.654V17.364C3 19.386 4.635 21.024 6.654 21.024H35.346C37.365 21.024 39 19.386 39 17.364V3.654C39 1.635 37.365 0 35.346 0H6.654ZM14.763 28.323C14.763 29.4699 14.3074 30.5699 13.4964 31.3809C12.6854 32.1919 11.5854 32.6475 10.4385 32.6475C9.29157 32.6475 8.19162 32.1919 7.38062 31.3809C6.56962 30.5699 6.114 29.4699 6.114 28.323C6.114 27.1761 6.56962 26.0761 7.38062 25.2651C8.19162 24.4541 9.29157 23.9985 10.4385 23.9985C11.5854 23.9985 12.6854 24.4541 13.4964 25.2651C14.3074 26.0761 14.763 27.1761 14.763 28.323ZM31.575 32.649C32.7219 32.649 33.8219 32.1934 34.6329 31.3824C35.4439 30.5714 35.8995 29.4714 35.8995 28.3245C35.8995 27.1776 35.4439 26.0776 34.6329 25.2666C33.8219 24.4556 32.7219 24 31.575 24C30.4281 24 29.3281 24.4556 28.5171 25.2666C27.7061 26.0776 27.2505 27.1776 27.2505 28.3245C27.2505 29.4714 27.7061 30.5714 28.5171 31.3824C29.3281 32.1934 30.4281 32.649 31.575 32.649ZM10.437 34.983C8.78089 34.9833 7.17839 35.57 5.91368 36.6392C4.64897 37.7085 3.80378 39.191 3.528 40.824C3.423 41.46 3.957 41.988 4.602 41.988H16.275C16.92 41.988 17.454 41.46 17.349 40.824C17.0731 39.1905 16.2275 37.7075 14.9622 36.6383C13.6968 35.569 12.0936 34.9826 10.437 34.983ZM24.666 40.824C24.9414 39.1904 25.7866 37.7071 27.0517 36.6375C28.3167 35.5678 29.9198 34.9809 31.5765 34.9809C33.2332 34.9809 34.8363 35.5678 36.1013 36.6375C37.3664 37.7071 38.2116 39.1904 38.487 40.824C38.592 41.46 38.058 41.988 37.413 41.988H25.74C25.098 41.988 24.561 41.46 24.666 40.824ZM24.369 6.363C24.369 7.25651 24.0141 8.11343 23.3822 8.74524C22.7504 9.37705 21.8935 9.732 21 9.732C20.1065 9.732 19.2496 9.37705 18.6178 8.74524C17.986 8.11343 17.631 7.25651 17.631 6.363C17.631 5.46948 17.986 4.61257 18.6178 3.98076C19.2496 3.34895 20.1065 2.994 21 2.994C21.8935 2.994 22.7504 3.34895 23.3822 3.98076C24.0141 4.61257 24.369 5.46948 24.369 6.363ZM15.075 16.971C15.3116 15.5708 16.0365 14.2996 17.1211 13.3829C18.2057 12.4662 19.5799 11.9632 21 11.9632C22.4201 11.9632 23.7943 12.4662 24.8789 13.3829C25.9635 14.2996 26.6884 15.5708 26.925 16.971C27.015 17.517 26.559 17.967 26.007 17.967H15.99C15.438 17.967 14.985 17.517 15.075 16.971Z"
                    fill="white"
                  />
                </svg>

                <span className="work__email__span">
                  Aprove or reject our offer, if you accept, we will agree an
                  online meeting and start planifying the project.
                </span>
              </div>
            </div>
            <div className="work__line2" />
            <div className="main__work__div__flex__1">
              <div className="work__email__div">
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.25 27.5625H21.4375V30.625H12.25V27.5625ZM12.25 33.6875H27.5625V36.75H12.25V33.6875Z"
                    fill="white"
                  />
                  <path
                    d="M39.8125 6.125H9.1875C8.37565 6.12622 7.59739 6.44926 7.02333 7.02333C6.44926 7.59739 6.12622 8.37565 6.125 9.1875V39.8125C6.12622 40.6244 6.44926 41.4026 7.02333 41.9767C7.59739 42.5507 8.37565 42.8738 9.1875 42.875H39.8125C40.6244 42.8738 41.4026 42.5507 41.9767 41.9767C42.5507 41.4026 42.8738 40.6244 42.875 39.8125V9.1875C42.8738 8.37565 42.5507 7.59739 41.9767 7.02333C41.4026 6.44926 40.6244 6.12622 39.8125 6.125ZM27.5625 9.1875V15.3125H21.4375V9.1875H27.5625ZM9.1875 39.8125V9.1875H18.375V18.375H30.625V9.1875H39.8125L39.814 39.8125H9.1875Z"
                    fill="white"
                  />
                </svg>
                <span className="work__deliver__span">
                  We will be delivering your project on average about ten days.{" "}
                  <b>
                    You can accept (pay and get the project) or reject it (no
                    pay).
                  </b>
                </span>
              </div>
              <div className="work__line1" />
              <div className="work__email__div">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M32.0833 34.375V38.9583C32.0833 39.5661 31.8419 40.149 31.4121 40.5788C30.9823 41.0086 30.3995 41.25 29.7917 41.25H13.75L6.875 48.125V25.2083C6.875 24.6005 7.11644 24.0177 7.54621 23.5879C7.97598 23.1581 8.55888 22.9167 9.16667 22.9167H13.75M48.125 32.0833L41.25 25.2083H25.2083C24.6005 25.2083 24.0177 24.9669 23.5879 24.5371C23.1581 24.1073 22.9167 23.5245 22.9167 22.9167V9.16667C22.9167 8.55888 23.1581 7.97598 23.5879 7.54621C24.0177 7.11644 24.6005 6.875 25.2083 6.875H45.8333C46.4411 6.875 47.024 7.11644 47.4538 7.54621C47.8836 7.97598 48.125 8.55888 48.125 9.16667V32.0833Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="work__email__span">
                  Stay in contact to create the project fulfilling all your
                  needs.
                </span>
              </div>
              <div className="work__line1" />
              <div className="work__email__div">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.5833 2.08325L36.9583 7.81242L31.25 10.4166L36.9583 13.0416L39.5833 18.7499L42.1875 13.0416L47.9167 10.4166L42.1875 7.81242M18.75 8.33325L13.5417 19.7916L2.08333 24.9999L13.5417 30.2083L18.75 41.6666L23.9583 30.2083L35.4167 24.9999L23.9583 19.7916M39.5833 31.2499L36.9583 36.9583L31.25 39.5833L36.9583 42.1874L39.5833 47.9166L42.1875 42.1874L47.9167 39.5833L42.1875 36.9583"
                    fill="white"
                  />
                </svg>

                <span className="work__email__span">
                  A designer will start working on your project, while a
                  developer will be creating the project structure.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="questions__section" id="questions__section">
        <span className="questions__title">FREQUENT QUESTIONS</span>
        <Questions />
      </section>
      <section className="footer__section">
        <Image src={FooterBg} className="footer__bg" alt="footer__bg"></Image>
        <div className="footer__div">
          <div className="footer__links__div">
            <a className="footer__links__span" href="#services__section">
              Services
            </a>
            <a href="#process__section" className="footer__links__span">
              Process
            </a>
            <a className="footer__links__span" href="#questions__section">
              Frequent questions
            </a>
            <Link href="/contact" className="header__contact__button">
              Contact
            </Link>
          </div>
          <a href="#main__section">
            <Image src={FooterLogo} alt="footer__logo"></Image>
          </a>
          <span className="rights__span">@Skailee all rights reserved 2024</span>
        </div>
      </section>
    </main>
  );
}
