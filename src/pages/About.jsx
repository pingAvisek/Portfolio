import React from "react";
import aboutImage from "../assets/images/most-honest-man-in-Nepal-pingAvisek.jpg";

export default function About() {
  return (
    <section className="about gap container m-auto  ">
      <h1 className="heading">About me</h1>
      <p className="paragraph">
        An enthusiastic front-end Web Developer with expertise in JavaScript,
        React.js, Tailwind, and many more.
      </p>
      <div className="even-cols flex items-center justify-around flex-col lg:flex-row  m-auto gap-4">
        <div className="image-content relative ">
          <img
            src={aboutImage}
            alt="about-me-photo-pingAvisek"
            className="about-image shadow-lg max-w-xs h-auto rounded-full outline outline-primary-100 text-center m-auto"
            draggable={false}
          />
        </div>

        <div className="text-content paragraph-sharp max-w-[70ch]">
          <p>
            Hey there, I'm <span className="highlight">Abhishek Ghimire</span>,
            a Bachelor in Information and Technology student currently seeking
            new opportunities to extend my skills and deliver my expertise to
            the world. I have always been passionate about technology, and
            frontend web development is where my heart lies.
          </p>
          <br />
          <p>
            I am a dedicated learner who enjoys tackling complex tasks, and I am
            constantly{" "}
            <span className="highlight">
              looking for new ways to improve my skills.
            </span>{" "}
            I am currently seeking for some company or team to join, where I can
            continue to hone my skills and gain valuable experience in the
            field. With my problem-solving abilities, task-oriented mindset, and
            enthusiasm for learning, I am confident that I would be a valuable
            asset to any team.
          </p>
          <br />
          <p>
            If you're looking for a passionate and hard-working team player,
            <span className="highlight"> I'd love to hear from you. </span>
            Together, we can create amazing things and make a positive impact in
            the world of web development.
          </p>
        </div>
      </div>
    </section>
  );
}
