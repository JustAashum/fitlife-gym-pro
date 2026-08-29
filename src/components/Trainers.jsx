import "./../styles/trainers.css";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaArrowRight
} from "react-icons/fa";

import trainer1 from "../assets/images/trainer1.jpg";
import trainer2 from "../assets/images/trainer2.jpg";
import trainer3 from "../assets/images/trainer3.jpg";

function Trainers() {

  const trainers = [
    {
      image: trainer1,
      name: "Alex Carter",
      role: "Strength & Conditioning Coach"
    },
    {
      image: trainer2,
      name: "Sarah Wilson",
      role: "Fitness & Nutrition Coach"
    },
    {
      image: trainer3,
      name: "Mike Johnson",
      role: "CrossFit Coach"
    }
  ];

  return (
    <section className="trainers">

      <div className="container">

        <div className="trainers-heading">

          <div>
            <span>OUR TRAINERS</span>

            <h2>
              Meet The Experts
              <br />
              Behind Your Transformation
            </h2>
          </div>

          <p>
            Our certified coaches bring experience,
            knowledge and motivation to every workout.
          </p>

        </div>


        <div className="trainers-grid">

          {trainers.map((trainer, index) => (

            <div className="trainer-card" key={index}>

              <div className="trainer-image">

                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                />

                <div className="trainer-overlay">

                  <div className="social-icons">

                    <a href="#" aria-label="Instagram">
                      <FaInstagram />
                    </a>

                    <a href="#" aria-label="Facebook">
                      <FaFacebookF />
                    </a>

                    <a href="#" aria-label="Twitter">
                      <FaTwitter />
                    </a>

                  </div>

                  <button className="profile-btn">
                    View Profile
                    <FaArrowRight />
                  </button>

                </div>

              </div>


              <div className="trainer-info">

                <h3>{trainer.name}</h3>

                <p>{trainer.role}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Trainers;