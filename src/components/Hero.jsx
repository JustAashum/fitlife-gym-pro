import "./../styles/hero.css";
import heroImage from "../assets/images/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${heroImage})`,
      }}
    >
      <div className="hero-content">

        <span className="tag">
          🔥 PREMIUM FITNESS EXPERIENCE
        </span>

        <h1>
          Transform Your Body
          <br />
          Transform Your Life
        </h1>

        <p>
          Train with certified coaches, personalized workout plans,
          and world-class equipment designed to help you achieve your
          fitness goals faster.
        </p>

        <div className="hero-buttons">

          <Link to="/contact" className="learn-btn">
          Start Free Trial
        </Link>

          <Link to="/pricing" className="learn-btn">
          Explore Plans
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Hero;