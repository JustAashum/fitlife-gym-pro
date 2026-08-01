import "./../styles/hero.css";
import heroImage from "../assets/images/hero.jpg";

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
          🔥 India's Premium Fitness Center
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

          <button className="btn-primary">
            Start Free Trial
          </button>

          <button className="btn-outline">
            Explore Plans
          </button>

        </div>

      </div>
    </section>
  );
}

export default Hero;