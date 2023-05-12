import Navbar from "../navbar/Navbar";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <a href="#logo" className="header__logo">
        Portfolio
      </a>
      <Navbar></Navbar>
      <div className="bx bx-moon" id="darkMode-icon">
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </header>
  );
};

export default Header;
