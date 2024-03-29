import Image from "next/image";
import AngelyLogo from "../assets/SkailiLogo.png";
import Link from "next/link";
import "./data_protection.css";
import { shanti } from "../layout";

function page() {
  return (
    <main className="w-100vw h-[100vh] overflow-x-hidden overflow-y-scroll relative">
      <section className="header__section">
        <Link href={"/"}>
          <Image alt="logo" src={AngelyLogo} className="Skaili__logo" />
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
                For the use of certain services, the user must provide personal
                data. By ticking the checkbox provided in the contact forms on
                the website, users expressly, freely, and unequivocally accept
                that their personal data will be processed by Skaili. Skaili
                will inform the user accordingly, and analyze the information
                derived from such management to improve our services and adapt
                them to the preferences of users, for the following purposes:{" "}
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
                  We prepare a 'business profile' based on the provided
                  information. No automated decisions will be made based on this
                  profile.
                </li>
              </ul>
            </div>
          </div>
          <div className="data__protection__purpose__div">
            <span className="purpose__span">2. Legitimation</span>
            <div className="ml-8 mt-4">
              <span className="purpose__text__span">
                When the user sends their personal data to Skaili, they
                expressly consent to Skaili carrying out the following
                activities and/or actions, unless otherwise stated during the
                contracting or subscription process of any Skaili product and/or
                service, or as a result of subsequent revocation of the
                initially granted consent:
              </span>
              <ul className="purpose__text__ul">
                <li>
                  Process orders, requests, or respond to inquiries made by the
                  user through any of the contact forms available on the Skaili
                  website.
                </li>
                <li>Carry out statistical studies</li>{" "}
              </ul>
              <span className="legitimation__text__span__1">
                By submitting data, you consent to Skaili processing your
                personal data according to the purposes described. You guarantee
                that the data provided are truthful, accurate, and complete, and
                you are responsible for notifying any changes to them.
              </span>
            </div>
          </div>
          <div className="data__protection__purpose__div">
            <span className="purpose__span">3. Recipients</span>
            <div className="ml-8 mt-4 flex flex-col gap-4">
              <span className="purpose__text__span">
                The data will be shared with other companies within the Skaili
                business group for internal administrative purposes, including
                the processing of personal data of customers or employees. The
                files are stored with our technological providers for web
                storage, email, and online marketing, ensuring EU-US Privacy
                Shield security.
              </span>
              <ul className="recipients__text__ul">
                <li>Vercel as the hosting provider.</li>
              </ul>
              <span className="purpose__text__span">
                By accepting this Privacy Policy, you expressly authorize us to
                process and share your personal data with the aforementioned
                companies and/or to transfer your personal data to the referred
                service providers as processors located for the purposes
                described herein, in order to provide you with a comprehensive
                service.
              </span>
              <span className="purpose__text__span">
                Skaili expressly informs and guarantees users that their
                personal data will not be transferred to third-party companies
                under any circumstances. In the event that any type of personal
                data transfer is to occur, prior explicit, informed, and
                unequivocal consent will be requested from the data subjects.
              </span>
            </div>
          </div>
          <div className="data__protection__purpose__div">
            <span className="purpose__span">4. Rights</span>
            <div className="ml-8 mt-4 flex flex-col gap-4">
              <span className="purpose__text__span">
                In accordance with data protection legislation, you have the
                right to information, access, rectification, cancellation,
                opposition, and portability. You have the right to obtain
                confirmation as to whether or not Skaili processes personal data
                concerning you. Interested persons have the right to access
                their personal data, as well as to request rectification of
                inaccurate data or, where appropriate, request their deletion,
                particularly when the data are no longer necessary for the
                purposes for which they were collected.
              </span>
              <span className="purpose__text__span">
                In certain circumstances, data subjects may request the
                limitation of the processing of their data, in which case we
                will only keep them for the exercise or defense of claims.
              </span>
              <span className="purpose__text__span">
                You can exercise your rights of access, rectification,
                cancellation, opposition, and portability by sending an email to
                info@skaili.es.
              </span>
              <span className="purpose__text__span">
                Skaili also undertakes to guarantee the confidentiality of your
                personal data and to use them in accordance with the purposes
                indicated above.
              </span>
              <span className="purpose__text__span">
                Likewise, it shall take all necessary measures to prevent
                alteration, loss, processing, or unauthorized access to personal
                data, in accordance with the provisions of the regulations on
                the protection of personal data.
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
