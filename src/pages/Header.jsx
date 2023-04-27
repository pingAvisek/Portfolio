import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import data from "../assets/data";

export default function Header() {
  const navLinkArray = data[0].navLinks;

  return (
    <>
      <div className="header-layout">
        <header className="p-4 bg-transparent shadow-lg min-w-[3.75rem]">
          <div className=" container mx-auto flex justify-between items-center ">
            <Link to="/">
              <Logo />
            </Link>
            <nav>
              <ul className="gap-5 text-gray-500 justify-center items-center flex">
                {navLinkArray.map((navLink, index) => (
                  <li className="nav-li" key={index}>
                    <Link
                      title={navLink.title}
                      target="_blank"
                      to={navLink.url}
                    >
                      {navLink.icons}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}
