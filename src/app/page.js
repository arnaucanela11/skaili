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
import Questions from "./components/Questions";
import Carousel from "./components/Carrusel";
import MainScreen from "./components/MainScreen";
import Services from "./components/Services";
import Process from "./components/Process";
import Footer from "./components/Footer";

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
        <MainScreen />
        <Carousel images={images} />
      </section>
      <Services />
      <Process />
      <Questions />
      <Footer />
    </main>
  );
}
