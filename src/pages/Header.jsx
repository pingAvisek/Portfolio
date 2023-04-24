import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import {
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsTelegram,
  BsFacebook,
} from "react-icons/bs";

export default function Header() {
  return (
    <>
      <div className="header-layout">
        <header className="p-4 bg-primary-50 shadow-lg min-w-[3.75rem]">
          <div className=" container mx-auto flex justify-between items-center ">
            <Link to="/">
              <Logo />
            </Link>
            <nav>
              <ul
                className="gap-5 text-gray-500 justify-center items-center flex"
                id="menu"
              >
                <li className="nav-li hover:text-[#171515]">
                  <Link to="https://github.com/pingAvisek" target="_blank">
                    <BsGithub />
                  </Link>
                </li>
                <li className="nav-li hover:text-[#00acee]">
                  <Link to="https://twitter.com/pingAvisek" target="_blank">
                    <BsTwitter />
                  </Link>
                </li>
                <li className="nav-li hover:text-primary-700">
                  <Link
                    to="https://www.linkedin.com/in/pingavisek/"
                    target="_blank"
                  >
                    <BsLinkedin />
                  </Link>
                </li>
                <li className="nav-li hover:text-[#0088cc]">
                  <Link to="https://t.me/pingAvisek" target="_blank">
                    <BsTelegram />
                  </Link>
                </li>
                <li className="nav-li hover:text-[#3b5998]">
                  <Link
                    to="https://www.facebook.com/pingAvisek"
                    target="_blank"
                  >
                    <BsFacebook />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
