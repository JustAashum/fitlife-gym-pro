import "./../styles/services.css";
import {
  FaDumbbell,
  FaHeartbeat,
  FaAppleAlt,
  FaRunning,
  FaUserTie,
  FaSpa
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Services({ featured = false }) {

  const services = [

    {
      icon: <FaDumbbell />,
      title: "Weight Training",
      desc: "Build strength and muscle with expert guidance."
    },

    {
      icon: <FaHeartbeat />,
      title: "Cardio Training",
      desc: "Improve stamina and heart health."
    },

    {
      icon: <FaAppleAlt />,
      title: "Nutrition Plan",
      desc: "Customized diet plans for every goal."
    },

    {
      icon: <FaRunning />,
      title: "CrossFit",
      desc: "High intensity functional workouts."
    },

    {
      icon: <FaSpa />,
      title: "Yoga",
      desc: "Increase flexibility and reduce stress."
    },

    {
      icon: <FaUserTie />,
      title: "Personal Trainer",
      desc: "One-to-one professional coaching."
    }

  ];

  const displayedServices = featured
    ? services.slice(0, 3)
    : services;

  return (

    <section className="services">

      <div className="container">

        <h5>OUR SERVICES</h5>

        <h2>
          Everything You Need To Reach Your Fitness Goals
        </h2>

        <div className="services-grid">

          {displayedServices.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

            </div>

          ))}

        </div>

        {featured && (
          <div className="services-btn">
            <Link to="/services">
              View All Services →
            </Link>
          </div>
        )}

      </div>

    </section>

  );
}

export default Services;