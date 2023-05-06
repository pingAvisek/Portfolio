import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { DiReact, DiNpm, DiGit } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { SiVisualstudiocode } from "react-icons/si";

export default function Technology() {
  return (
    <section className="container mx-auto gap">
      <h1 className="heading">Tech I use</h1>
      <p className="paragraph">
        I possess a range of technology skills, with a particular focus on the
        following areas. However, I am always willing to expand my knowledge and
        learn new technologies as needed to fulfill job requirements:
      </p>

      <div className="flex flex-wrap gap-2 justify-center items-center">
        <div className="p-3 inline-block border-2 rounded-sm bg-primary-100 border-primary-300">
          <h2 className="heading py-4 after:hidden text-lg text-primary-950">
            For client-side applications
          </h2>
          <div className="icons text-5xl p-2 flex items-center justify-center gap-4 flex-wrap">
            <AiFillHtml5 color="#f06529" title="HTML5" />
            <FaCss3Alt color="#264de4" title="CSS3" />
            <SiJavascript
              color="#F0DB4F"
              title="JavaScript"
              style={{ background: "#323330" }}
            />
            <SiTailwindcss color="#3B82F6" title="TailwindCSS" />
            <DiReact color="#61dbfb" title="React.js" />
          </div>
        </div>

        <div className="p-3 inline-block border-2 rounded-sm bg-primary-100 border-primary-300">
          <h2 className="heading py-4 after:hidden text-lg text-primary-950">
            Others and More!
          </h2>
          <div className="icons text-5xl p-2 flex items-center justify-center gap-4 flex-wrap">
            <DiGit color="#f34f29" title="Git" />
            <AiFillGithub color="#171515 " title="GitHub" />
            <SiNetlify color="#20C2B9" title="Netlify" />
            <FcLinux title="Linux" />
            <SiVisualstudiocode color="#0078d7 " title="Visual Studio Code" />
          </div>
        </div>
      </div>

      <p className="paragraph">
        In addition to these specific skills, I am also comfortable with
        learning and using new software and technologies. I am confident in my
        ability to adapt and learn quickly to meet any project requirements.
      </p>
    </section>
  );
}
