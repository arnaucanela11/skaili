"use client";
import Image from "next/image";
import AngelyLogo from "../assets/SkailiLogo.png";
import Link from "next/link";
import BgShapes from "../assets/BgShapesContact.png";
import ContactCrown from '../assets/ContactCrown.png'
import BgShapesSmallDevices from '../assets/BgShapesContactSmallDevices.png'
import "./contact.css";
import { ErrorMessage, Field, Formik } from "formik";
import * as yup from "yup";
const loginSchema = yup.object().shape({
  name: yup.string().required("required"),
  company: yup.string(),
  email: yup
    .string()
    .email("the email format is not correct")
    .required("required"),
  message: yup.string().required("required"),
  acceptPolicy: yup
    .boolean()
    .oneOf([true], "You have to accepts the privacy policy."),
});

const initailaState = {
  name: "",
  email: "",
  company: "",
  message: "",
  acceptPolicy: false,
};

const sendMessage = async (values) => {
  try {
    const resp = await fetch(
      "https://skailee-09041f34dfef.herokuapp.com/api/mail/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );
    const resp2 = await resp.json();
    return resp2;
  } catch (error) {
    return error;
  }
};

function page() {
  const handleSubmitContact = async (values, { resetForm }) => {
    if (!values.company) {
      values.company = "a company";
    }
    const { msg } = await sendMessage(values);
    if (msg) {
      resetForm();
    }
  };
  return (
    <main className="w-100vw h-[100vh] overflow-x-hidden overflow-y-scroll relative">
      <section className="header__section">
        <Link href={"/"}>
          <Image alt="logo" src={AngelyLogo} className="Skaili__logo" />
        </Link>
        <Link href="/" className="header__contact__button__contact">
          Home page
        </Link>
      </section>
      <section className="main__contact">
        <div className="contact__form__div">
          <Formik
            validationSchema={loginSchema}
            initialValues={initailaState}
            onSubmit={(values, submitProps) =>
              handleSubmitContact(values, submitProps)
            }
          >
            {({
              values,
              handleSubmit,
              handleBlur,
              handleChange,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="form__div__flex">
                  <div className="contact__data__div">
                    <span className="contact__data__span">Contact Data</span>
                    <div className="signup__form">
                      <div className="signup__form__1">
                        <label
                          htmlFor="email"
                          className="field__label__flex"
                        >
                          <label className="field__label">Name*</label>
                          <Field
                            name="name"
                            type="text"
                            className="name__field"
                            placeholder="e.g. Jose"
                          />
                          <ErrorMessage
                            name="name"
                            render={(msg) => (
                              <span style={{ color: "white" }}>
                                {msg.charAt(0).toUpperCase() + msg.slice(1)}
                              </span>
                            )}
                          />
                        </label>
                        <label
                          htmlFor="company"
                          className="field__label__flex"
                        >
                          <label className="field__label">
                            Company (optional)
                          </label>
                          <Field
                            name="company"
                            type="text"
                            className="name__field"
                            placeholder="e.g. Jose’s barbershop"
                          />
                          <ErrorMessage
                            name="company"
                            render={(msg) => (
                              <span style={{ color: "white" }}>
                                {msg.charAt(0).toUpperCase() + msg.slice(1)}
                              </span>
                            )}
                          />
                        </label>
                      </div>
                      <label
                        htmlFor="email"
                        className="field__label__flex"
                      >
                        <label className="field__label">Email*</label>
                        <Field
                          name="email"
                          type="text"
                          className="name__field__1"
                          placeholder="e.g. jose.miranda@gmail.com"
                        />
                        <ErrorMessage
                          name="email"
                          render={(msg) => (
                            <span style={{ color: "white" }}>
                              {msg.charAt(0).toUpperCase() + msg.slice(1)}
                            </span>
                          )}
                        />
                      </label>
                    </div>
                    <div className="tell__us__div">
                      <div className="tell__us__div__1">
                        <span className="contact__data__span">
                          Tell us about your idea
                        </span>
                        <span className="contact__data__span__1">
                          (in any language)
                        </span>
                      </div>
                      <Field
                        as="textarea"
                        name="message"
                        className="message__field"
                        placeholder="I want to create..."
                      />
                      <ErrorMessage
                        name="message"
                        render={(msg) => (
                          <span style={{ color: "white" }}>
                            {msg.charAt(0).toUpperCase() + msg.slice(1)}
                          </span>
                        )}
                      />
                    </div>
                    <div className="privacy__rights">
                      <label className="privacy__rights__label">
                        <div class="checkbox-wrapper-46">
                          <Field
                            name="acceptPolicy"
                            type="checkbox"
                            id="cbx-46"
                            class="inp-cbx"
                          />
                          <label for="cbx-46" class="cbx">
                            <span>
                              <svg
                                viewBox="0 0 12 10"
                                height="10px"
                                width="12px"
                              >
                                <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                              </svg>
                            </span>
                          </label>
                        </div>
                        <span className="privacy__rights__span">
                          I have read and accept the{" "}
                          <Link href={"/data_protection"} className="underline">
                            data protection policy{" "}
                          </Link>
                        </span>
                      </label>
                      <ErrorMessage
                        name="acceptPolicy"
                        className="mt-3"
                        render={(msg) => (
                          <span style={{ color: "white" }}>
                            {msg.charAt(0).toUpperCase() + msg.slice(1)}
                          </span>
                        )}
                      />
                    </div>
                    <button type="submit" className="button__submit">
                      <span className="send__span">Send</span>
                      <svg
                        width="12"
                        height="9"
                        viewBox="0 0 12 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.2674 4.85355C11.4626 4.65829 11.4626 4.34171 11.2674 4.14645L8.08539 0.964466C7.89013 0.769204 7.57355 0.769204 7.37828 0.964466C7.18302 1.15973 7.18302 1.47631 7.37828 1.67157L10.2067 4.5L7.37828 7.32843C7.18302 7.52369 7.18302 7.84027 7.37828 8.03553C7.57355 8.2308 7.89013 8.2308 8.08539 8.03553L11.2674 4.85355ZM0.913818 5H10.9138V4H0.913818V5Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
          <Image className="contact__crown" src={ContactCrown}></Image>
          <Image className="contact__crown__1" src={ContactCrown}></Image>
          <Image className="bg__shapes__small__devices" src={BgShapesSmallDevices}></Image>
        </div>
        <Image
            alt="bg__shapes"
            className="bg__shapes__contact"
            src={BgShapes}
          ></Image>
      </section>
    </main>
  );
}

export default page;
