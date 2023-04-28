import React from "react";
import { Link } from "react-router-dom";
import { BiCloudDownload } from "react-icons/bi";
import Design from "../components/Design";

export default function Home() {
  const resumeURL =
    "https://docs.google.com/document/u/0/export?format=pdf&id=1BLibHCK-2yyrrzygLTQnfcTfCxQT_RkPUxexig0cHVA";

  function previewResume() {
    window.open(`${resumeURL}`, "_blank");
  }

  return (
    <section className="home w-full -z-10 container mx-auto">
      <div className="absolute z-10 ">{/* <Design /> */}</div>

      <div className="hero-content relative sm:p-4 w-full h-screen  text-center padding flex flex-col items-center justify-center">
        <p className="font-mono  relative z-50 font-semibold text-gray-300 tracking-wide text-lg">
          Hi, It's me
        </p>
        <h1
          title="@pingAvisek"
          className="text-5xl relative z-50 font-bold py-4 text-primary-500"
        >
          Abhishek Ghimire.
        </h1>
        {/* <h1 className="text-5xl relative z-50 font-bold text-primary-600">
          I build things for the Internet.
        </h1> */}
        <p className="relative z-50 mb-4 text-gray-500 max-w-[58ch]">
          Motivated and enthusiastic learner with a passion for frontend web
          development. Problem solver, task-oriented, and always eager to learn.
        </p>

        <Link
          onClick={previewResume}
          rel="noopener noreferrer"
          title="Download Resume"
          className="uppercase font-medium tracking-wide flex items-center justify-center gap-2 bg-primary-700 text-white py-2 px-3 border-0 rounded-md transition hover:bg-primary-900 relative z-50"
        >
          <span>resume</span>
          <BiCloudDownload size="1.3rem" />
        </Link>
      </div>
    </section>
  );
}
