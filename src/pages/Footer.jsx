import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function Footer() {
  const presentYear = new Date().getFullYear();
  // alert(presentYear);
  return (
    <footer className="gap bg-primary-100 text-white pb-0">
      <section className="footer container mx-auto">
        <div className="left-right flex items-center justify-between">
          <div className="left">
            <Logo />
          </div>
          <div className="right">
            <div className="social">
              <Nav />
            </div>
          </div>
        </div>

        <div className="copyright paragraph text-center text-xs font-normal">
          <p>&copy; 2018 - {presentYear} · All Rights Reserved · @pingAvisek</p>
        </div>
      </section>
    </footer>
  );
}
