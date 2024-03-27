import Image from "next/image";
import AngelyLogo from "../assets/AngelyLogo.png";
import Link from "next/link";
import "./data_protection.css";
import { shanti } from "../layout";

function page() {
  return (
    <main className="w-100vw h-[100vh] overflow-x-hidden overflow-y-scroll relative">
      <section className="header__section">
        <Link href={"/"}>
          <Image alt="logo" src={AngelyLogo} className="Angely__logo" />
        </Link>
        <div className="flex flex-row gap-10 justify-center items-center">
          <Link href="/contact" className="header__contact__button">
            Contact
          </Link>
        </div>
      </section>
      <section className="data__protection__section">
        <div className="w-[90%] flex flex-col items-center gap-2 justify-center">
          <span className={`data__protection__title ${shanti.className}`}>
            DATA PROTECTION
          </span>
          <div className="w-[100%] h-[1px] bg-white" />
        </div>
        <div className="data__protection__content__div">
          <div className="data__protection__purpose__div">
            <span className="purpose__span">1. Purpose</span>
            <div className="ml-8 mt-4">
              <span className="purpose__text__span">
                For the use of certain services, the user must communicate
                personal data. Users, by ticking the box enabled in the contact
                forms enabled on the website expressly and freely and
                unequivocally accept that their personal data are processed by
                Skaili, where it will inform the user according to analyze the
                information that derives from such management to improve our
                services and adapt them to the preferences of users with the
                following purposes:{" "}
              </span>
              <ul className="purpose__text__ul">
                <li>
                  Facilitate access to the Website and improve your user
                  experience. Manage the services requested on the Website.
                </li>
                <li>
                  Provide offers of products and services of interest to
                  interested parties.
                </li>{" "}
                <li>
                  We prepare a «business profile», based on the information
                  provided. No automated decisions will be made based on this
                  profile.
                </li>
              </ul>
            </div>
          </div>
          <div className="data__protection__purpose__div">
            <span className="purpose__span">2. Legitimation</span>
            <div className="ml-8 mt-4">
              <span className="purpose__text__span">
                When the user sends his personal data to Skaili, he expressly
                consents that Skaili carries out the following activities and/or
                actions, unless otherwise stated when contracting or subscribing
                to any Skaili product and/or service or as a result of a
                subsequent revocation of the consent initially granted:
              </span>
              <ul className="purpose__text__ul">
                <li>
                  Process orders, requests or respond to requests that are made
                  by the user through any of the contact forms that are made
                  available to the user on the Skaili website
                </li>
                <li>Carry out statistical studies</li>{" "}
              </ul>
              <span className="legitimation__text__span__1">
                By sending data, you consent to Skaili processing your personal
                data according to the purposes described. You guarantee that the
                data provided are truthful, accurate and complete, and you are
                responsible for notifying any changes in these.
              </span>
            </div>
          </div>
          <div className="data__protection__purpose__div">
            <span className="purpose__span">3. Recipients</span>
            <div className="ml-8 mt-4 flex flex-col gap-4">
              <span className="purpose__text__span">
                The data will be communicated to other companies of the Skaili
                business group for internal administrative purposes, including
                the processing of personal data of customers or employees. The
                files are stored in our technological providers of Web storage,
                Email and online marketing, according to EU-US Privacy security:
              </span>
              <ul className="recipients__text__ul">
                <li>Hostinger as the hosting provider.</li>
              </ul>
              <span className="purpose__text__span">
                By accepting this Privacy Policy, you expressly authorize us to
                process and communicate your personal data to the aforementioned
                companies and/or to transfer your personal data to the referred
                service providers as processors located for the purposes
                described herein and to give you a complete service.
              </span>
              <span className="purpose__text__span">
                Skaili expressly informs and guarantees users that their
                personal data will not be transferred in any case to third
                companies, and that whenever some type of transfer of personal
                data is to take place, prior express consent would be requested,
                informed, and unequivocal by the holders.
              </span>
            </div>
          </div>
          <div className="data__protection__purpose__div">
            <span className="purpose__span">4. Rights</span>
            <div className="ml-8 mt-4 flex flex-col gap-4">
              <span className="purpose__text__span">
                In accordance with data protection legislation, you have the
                right to information, access, rectification, cancellation,
                opposition and portability. You. you have the right to obtain
                confirmation as to whether or not we process personal data
                concerning you at Skaili. Interested persons have the right to
                access your personal data, as well as to request rectification
                of inaccurate data or where appropriate, request their deletion
                where, inter alia, the data are no longer necessary for the
                purposes for which they were collected.
              </span>
              <span className="purpose__text__span">
                En determinadas circunstancias, los interesados podrán solicitar
                la limitación del tratamiento de sus datos, en cuyo solo caso
                los conservaremos para el ejercicio o la defensa de
                reclamaciones.
              </span>
              <span className="purpose__text__span">
                En determinadas circunstancias y por motivos relacionados con su
                situación particular, los interesados podrán oponerse al
                tratamiento de sus datos Skaili dejará de tratar los datos,
                salvo por motivos legítimos imperiosos, o el ejercicio o la
                defensa de posibles reclamaciones.
              </span>
              <span className="purpose__text__span">
                You can exercise your rights of access, rectification,
                cancellation, opposition and portability by sending an email to
                info@skaili.es.
              </span>
              <span className="purpose__text__span">
                Skaili also undertakes to guarantee the confidentiality of your
                personal data and to use them in accordance with the purposes
                indicated above.
              </span>
              <span className="purpose__text__span">
                Likewise, it shall take all necessary measures to prevent its
                alteration, loss, processing or unauthorized access, in
                accordance with the provisions of the regulations on the
                protection of personal data.
              </span>
            </div>
          </div>
          <div className="data__protection__purpose__div">
            <span className="purpose__span">
              5. Period of retention of data
            </span>
            <div className="ml-8 mt-4 flex flex-col gap-4">
              <span className="purpose__text__span">
                We will keep your personal data for the duration of the
                contractual relationship with us and, once terminated, for the
                limitation periods of the obligations that may have arisen from
                the processing of the data and/or the deadlines that are legally
                established.
              </span>
            </div>
          </div>
          <div className="data__protection__purpose__div">
            <span className="purpose__span">6. Responsible</span>
            <div className="ml-8 mt-4 flex flex-col gap-4 mb-12">
              <span className="purpose__text__span">
                The personal data you provide us through the website
                www.skaili.com (hereinafter the «Website») as a user of the same
                will be included in a file owned by Arnau Canela Daunis from now
                Skaili, with registered office in Carrer Pintor Doménech i Farré
                3-A2, 08320 El Masnou (Barcelona); provided with N.I.F. no.
                48221444N; with e-mail address info@skaili.es.
              </span>
              <span className="purpose__text__span">
                The processing of your data and this Privacy Policy will be
                governed by the General Data Protection Regulation or Regulation
                [EU] (2016/679) (the «GDPR»).
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
