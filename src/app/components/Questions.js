"use client";
import { useEffect, useState } from "react";
import "./components.css";
import { Poppins } from "next/font/google";
import Translator from "./Translator";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

function Questions() {
  const [question, setQuestion] = useState("1");
  useEffect(() => {
    console.log(question);
  }, [question]);
  return (
    <Translator>
      {(translations) => (
        <section className="questions__section" id="questions__section">
          <span className="questions__title">{translations.questionstitle}</span>
          <div className="questions__main__div">
            <div
              className="question__div"
              onClick={() =>
                setQuestion((prev) => {
                  if (prev == "1") {
                    return "0";
                  } else return "1";
                })
              }
            >
              <div className="question__not__hidden__div">
                <span className={`question__main__span `}>
                  {translations.question1}
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                    fill="white"
                  />
                </svg>
              </div>
              {question == "1" ? (
                <div className="ml-5 mb-5 mt-2 w-[90%]">
                  <span className={`question__1__text ${poppins.className}`}>
                    {translations.text1}
                  </span>
                </div>
              ) : (
                ""
              )}
              <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
            </div>
            <div
              className="question__div"
              onClick={() =>
                setQuestion((prev) => {
                  if (prev == "2") {
                    return "0";
                  } else return "2";
                })
              }
            >
              <div className="question__not__hidden__div">
                <span className={`question__main__span `}>
                  {translations.question2}
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                    fill="white"
                  />
                </svg>
              </div>
              {question == "2" ? (
                <div className="ml-5 mb-5 mt-2 w-[90%]">
                  <span className={`question__1__text ${poppins.className}`}>
                    {translations.text2}
                  </span>
                </div>
              ) : (
                ""
              )}
              <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
            </div>
            <div
              className="question__div"
              onClick={() =>
                setQuestion((prev) => {
                  if (prev == "3") {
                    return "0";
                  } else return "3";
                })
              }
            >
              <div className="question__not__hidden__div">
                <span className={`question__main__span`}>
                  {translations.question3}
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                    fill="white"
                  />
                </svg>
              </div>
              {question == "3" ? (
                <div className="ml-5 mb-5 mt-2 w-[90%]">
                  <span className={`question__1__text ${poppins.className}`}>
                    {translations.text3}
                  </span>
                </div>
              ) : (
                ""
              )}
              <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
            </div>
            <div
              className="question__div"
              onClick={() =>
                setQuestion((prev) => {
                  if (prev == "4") {
                    return "0";
                  } else return "4";
                })
              }
            >
              <div className="question__not__hidden__div">
                <span className={`question__main__span `}>
                  {translations.question4}
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                    fill="white"
                  />
                </svg>
              </div>
              {question == "4" ? (
                <div className="ml-5 mb-5 mt-2 w-[90%]">
                  <span className={`question__1__text ${poppins.className}`}>
                    {translations.text4}
                  </span>
                </div>
              ) : (
                ""
              )}
              <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
            </div>
            <div
              className="question__div"
              onClick={() =>
                setQuestion((prev) => {
                  if (prev == "5") {
                    return "0";
                  } else return "5";
                })
              }
            >
              <div className="question__not__hidden__div">
                <span className={`question__main__span `}>
                  {translations.question5}
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                    fill="white"
                  />
                </svg>
              </div>
              {question == "5" ? (
                <div className="ml-5 mb-5 mt-2 w-[90%]">
                  <span className={`question__1__text ${poppins.className}`}>
                    {translations.text5}
                  </span>
                </div>
              ) : (
                ""
              )}
              <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
            </div>
            <div
              className="question__div"
              onClick={() =>
                setQuestion((prev) => {
                  if (prev == "6") {
                    return "0";
                  } else return "6";
                })
              }
            >
              <div className="question__not__hidden__div">
                <span className={`question__main__span `}>
                  {translations.question6}
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                    fill="white"
                  />
                </svg>
              </div>
              {question == "6" ? (
                <div className="ml-5 mb-5 mt-2 w-[90%]">
                  <span className={`question__1__text ${poppins.className}`}>
                    {translations.text6}
                  </span>
                </div>
              ) : (
                ""
              )}
              <div className="bg-[#ffffffa0] border-[#ffffffa0] h-[0.5px] w-[100%]" />
            </div>
            <div
              className="question__div__1"
              onClick={() =>
                setQuestion((prev) => {
                  if (prev == "7") {
                    return "0";
                  } else return "7";
                })
              }
            >
              <div className="question__not__hidden__div">
                <span className={`question__main__span `}>
                  {translations.question7}
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.75 16C27.75 16.1989 27.671 16.3897 27.5303 16.5303C27.3897 16.671 27.1989 16.75 27 16.75H16.75V27C16.75 27.1989 16.671 27.3897 16.5303 27.5303C16.3897 27.671 16.1989 27.75 16 27.75C15.8011 27.75 15.6103 27.671 15.4697 27.5303C15.329 27.3897 15.25 27.1989 15.25 27V16.75H5C4.80109 16.75 4.61032 16.671 4.46967 16.5303C4.32902 16.3897 4.25 16.1989 4.25 16C4.25 15.8011 4.32902 15.6103 4.46967 15.4697C4.61032 15.329 4.80109 15.25 5 15.25H15.25V5C15.25 4.80109 15.329 4.61032 15.4697 4.46967C15.6103 4.32902 15.8011 4.25 16 4.25C16.1989 4.25 16.3897 4.32902 16.5303 4.46967C16.671 4.61032 16.75 4.80109 16.75 5V15.25H27C27.1989 15.25 27.3897 15.329 27.5303 15.4697C27.671 15.6103 27.75 15.8011 27.75 16Z"
                    fill="white"
                  />
                </svg>
              </div>
              {question == "7" ? (
                <div className="ml-5 mb-5 mt-2 w-[90%]">
                  <span className={`question__1__text ${poppins.className}`}>
                    {translations.text7}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      )}
    </Translator>
  );
}

export default Questions;
