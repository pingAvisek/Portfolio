import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitted(true);

    emailjs
      .sendForm(
        "service_yxecqu9",
        "template_83fzi2e",
        form.current,
        "GdHujjPcs0elxZtC4"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setSubmitted(false);
          displaySuccess();
          clearData();
        },
        (error) => {
          // console.log(error.text);
          setSubmitted(false);
          displayError();
        }
      );
  };

  const clearData = () => {
    form.current.reset();
  };

  const displaySuccess = () => {
    const success = document.querySelector(".success");
    success.classList.remove("hidden");
    setTimeout(() => {
      success.classList.add("hidden");
    }, 3000);
  };

  const displayError = () => {
    const error = document.querySelector(".error");
    error.classList.remove("hidden");
    setTimeout(() => {
      error.classList.add("hidden");
    }, 3000);
  };

  return (
    <section className="contact container mx-auto gap relative">
      <h1 className="heading ">Leave a message</h1>
      <p className="paragraph">
        If you have any queries, please don't{" "}
        <span className="highlight">hesitate</span> to contact me.
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[640px] mx-auto text-left"
      >
        <label htmlFor="fullname">Full name:</label>
        <div className="icon-input">
          <BsFillPersonFill className="text-xl ml-2  hidden sm:block text-primary-950" />
          <input
            className="capitalize "
            type="text"
            minLength={5}
            name="fullname"
            placeholder="Enter your coolname"
            autoComplete="off"
            required
          />
        </div>
        <label htmlFor="email">Email:</label>
        <div className="icon-input ">
          <MdAlternateEmail className="text-xl ml-2 hidden sm:block text-primary-950" />
          <input
            type="email"
            autoComplete="off"
            name="email"
            placeholder="coolusername@hotmail.com"
            required
          />
        </div>
        <label htmlFor="message">Message:</label>
        <div className="icon-input items-start">
          <BiMessageAltDetail className="text-xl ml-2 mt-2 hidden sm:block text-primary-950" />
          <textarea
            name="message"
            rows="5"
            required
            autoComplete="off"
            minLength={10}
            placeholder="Hi Abhishek, I have seen your portfolio and I..."
          ></textarea>
        </div>

        {submitted ? (
          <div className="lds-hourglass"></div>
        ) : (
          <div className="btn-area flex text-black items-center justify-start gap-4">
            <button
              type="submit"
              className="bg-primary-900 hover:bg-primary-800"
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    height="14"
                    width="14"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Send</span>
            </button>

            <button
              type="reset"
              className="bg-primary-700 text-gray-100 border-2 border-primary-700"
            >
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <svg
                    className="reset-svg"
                    height="14"
                    width="14"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Reset</span>
            </button>
          </div>
        )}
      </form>
      {/* Success and Error message */}
      <div className="success bg-green-300 message-box hidden ">
        <p>Message sent successfully</p>
      </div>

      <div className="error bg-red-300  message-box hidden ">
        <p>Couldn't contact Mr. Abhishek</p>
      </div>
    </section>
  );
}
