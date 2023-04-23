import { Link, NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import {
  BsGithub,
  BsTwitter,
  BsLinkedin,
  BsTelegram,
  BsFacebook,
} from "react-icons/bs";
import { useRef, useState, useEffect } from "react";
import Home from "../pages/Home";

export default function HeaderLayout() {
  const headerRef = useRef(null);
  const [mainHeight, setMainHeight] = useState(0);

  useEffect(() => {
    const headerHeight = headerRef.current.offsetHeight;
    const windowHeight = window.innerHeight;
    setMainHeight(windowHeight - headerHeight);
  }, []);

  return (
    <>
      <div className="header-layout">
        <header ref={headerRef} className="p-4 bg-primary-50 shadow-lg ">
          <div className="container mx-auto flex justify-between items-center ">
            <Link to="/">
              <Logo />
            </Link>
            <nav>
              <ul
                className="gap-5 text-gray-500 justify-center items-center flex"
                id="menu"
              >
                <li className="nav-li hover:text-[#171515]">
                  <NavLink to="/">
                    <BsGithub />
                  </NavLink>
                </li>
                <li className="nav-li hover:text-[#00acee]">
                  <NavLink to="about">
                    <BsTwitter />
                  </NavLink>
                </li>
                <li className="nav-li hover:text-primary-700">
                  <NavLink to="services">
                    <BsLinkedin />
                  </NavLink>
                </li>
                <li className="nav-li hover:text-[#0088cc]">
                  <NavLink to="contact">
                    <BsTelegram />
                  </NavLink>
                </li>
                <li className="nav-li hover:text-[#3b5998]">
                  <NavLink to="contact">
                    <BsFacebook />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Home mainHeight={mainHeight} />
        </header>
      </div>
    </>
  );
}
