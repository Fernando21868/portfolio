import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="header__navbar">
      <a href="#home" className="header__navbar-item active">
        Home
      </a>
      <a href="#about" className="header__navbar-item">
        About
      </a>
      <a href="#services" className="header__navbar-item">
        Services
      </a>
      <a href="#portfolio" className="header__navbar-item">
        Portfolio
      </a>
      <a href="#contact" className="header__navbar-item">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
