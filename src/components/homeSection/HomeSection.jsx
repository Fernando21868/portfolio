import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./homeSection.css";
import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";

const HomeSection = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-section__content">
        <h3 className="home-section__subname">Hello, I am</h3>
        <h1 className="home-section__name">Fernando</h1>
        <p className="home-section__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          alias deleniti sint deserunt quod doloremque, natus, eum saepe ex quam
          eaque nisi culpa quisquam laborum assumenda, aut iusto a aliquam.
        </p>
        <div className="home-section__social-media">
          <a className="home-section__icon" href="#facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="home-section__icon" href="#instagra">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </a>
          <a className="home-section__icon" href="#linkedin">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <a href="#btn" className="home-section__btn">
          Download CV
        </a>
      </div>
      <div className="home-section__profession-container">
        <div className="home-section__profession-box">
          <div className="home-section__profession" style={{ "--i": 1 }}>
            <FontAwesomeIcon
              className="home-section__profession-i"
              icon={faPalette}
            />{" "}
            <h3 className="home-section__profession-title">Web Designer</h3>
          </div>
          <div className="home-section__profession" style={{ "--i": 2 }}>
            <FontAwesomeIcon
              className="home-section__profession-i"
              icon={faCode}
            />
            <h3 className="home-section__profession-title">Web Developer</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
