"use client";
import { useEffect, useState } from "react";
import "./components.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

function Questions() {
  const [question, setQuestion] = useState("1");
  useEffect(() => {
    console.log(question);
  }, [question]);
  return (
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
            Can we start your project on any date?
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
              As we have limited manpower (a limited number of designers and
              developers), we may not be able to handle all demand if it's too
              large. Therefore, it's possible that we may need to reschedule
              your project to another date, but we will do so as soon as
              possible.
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
            How much time does a project take on average?
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
              Obviously, all projects have different needs, but on average, the
              duration of each project is about <b>10 days.</b>
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
            What is the average price of a project?
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
              Considering that all projects have particular features and needs,
              and the price depends entirely on those, the average price is over
              $350.
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
            How many people will be working on your project?
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
              You will have two people (one designer and one developer) working
              on your project.
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
            Who will provide the media files for the project?
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
              We will try to make the process as easy and simple as possible for
              you, but we might need you to provide specific media (such as
              photos or videos) in order to achieve the desired result.
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
            if (prev == "5") {
              return "0";
            } else return "5";
          })
        }
      >
        <div className="question__not__hidden__div">
          <span className={`question__main__span `}>
            What happens if I ultimately don't like the result?
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
              The idea is for us to receive some feedback from you during the
              digitization process. However, if you are ultimately not satisfied
              with the delivered product, we can either make some final
              adjustments, or if the issue is significant, we can cancel the
              contract. This way, the website wouldn't be delivered, and no
              payment would be required.
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Questions;
