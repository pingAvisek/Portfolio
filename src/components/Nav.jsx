import data from "../assets/data";
import { Link } from "react-router-dom";

export default function Nav() {
  const navLinkArray = data[0].navLinks;
  return (
    <>
      <nav>
        <ul className="gap-5 text-gray-900 justify-center items-center flex">
          {navLinkArray.map((navLink, index) => (
            <li className="nav-li" key={index}>
              <Link title={navLink.title} target="_blank" to={navLink.url}>
                {navLink.icons}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
