import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const resumeURL =
    "https://drive.google.com/file/d/1BLibHCK-2yyrrzygLTQnfcTfCxQT_RkPUxexig0cHVA/preview";

  function previewResume() {
    window.open(`${resumeURL}`, "_blank");
  }

  return (
    <section className="home padding flex flex-col items-start justify-center w-screen h-screen">
      <h5 className="font-mono font-semibold text-gray-600 tracking-wide text-lg">
        Hi, It's me
      </h5>
      <h1
        title="@pingAvisek"
        className="text-5xl font-bold py-4 text-primary-700"
      >
        Abhishek Ghimire.
      </h1>
      <h1 className="text-5xl font-bold text-primary-600 opacity-100 py-4">
        I build things for the Internet.
      </h1>
      <p className="py-4 mb-4 text-gray-700 w-[58ch] font-medium">
        Motivated and enthusiastic learner with a passion for frontend web
        development. Problem solver, task-oriented, and always eager to learn.
      </p>
      <Link
        onClick={previewResume}
        className="font-medium text-white bg-primary-700 uppercase tracking-wide border-2 rounded-sm py-2 px-3 transition duration-300 ease-in-out border-primary-700 hover:text-primary-700 hover:bg-primary-50 "
      >
        Resume
      </Link>
    </section>
  );
}
