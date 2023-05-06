import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Nav from "../components/Nav";

export default function Header() {
  return (
    <>
      <div className="header-layout">
        <header className="min-w-[3.75rem]">
          <div className="p-4 container mx-auto flex justify-between items-center ">
            <Link to="/">
              <Logo />
            </Link>
            <Nav />
          </div>
        </header>
      </div>
    </>
  );
}
