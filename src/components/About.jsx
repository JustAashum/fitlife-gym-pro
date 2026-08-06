import "./../styles/about.css";
import aboutImage from "../assets/images/about.jpg";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-image">
        <img src={aboutImage} alt="About FitLife Gym" />
      </div>

      <div className="about-content">

        <h5>ABOUT US</h5>

        <h2>
          We Build Strong Bodies &
          <br />
          Strong Minds
        </h2>

        <p>
          At FitLife Gym, we combine modern fitness techniques,
          certified trainers, and personalized workout plans
          to help you achieve your fitness goals faster.
        </p>

        <div className="features">

          <div>
            <FaCheckCircle className="icon"/>
            Certified Trainers
          </div>

          <div>
            <FaCheckCircle className="icon"/>
            Modern Equipment
          </div>

          <div>
            <FaCheckCircle className="icon"/>
            Personalized Diet Plans
          </div>

          <div>
            <FaCheckCircle className="icon"/>
            Flexible Membership
          </div>

        </div>

        <button className="learn-btn">
          Learn More
        </button>

      </div>

    </section>
  );
}

export default About;