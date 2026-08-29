import "./../styles/whyChooseUs.css";

import {
  FaDumbbell,
  FaUserCheck,
  FaClipboardList,
  FaClock
} from "react-icons/fa";

function WhyChooseUs() {

  const benefits = [
    {
      icon: <FaDumbbell />,
      title: "Modern Equipment",
      desc: "Train with professional-grade equipment designed for every fitness level."
    },
    {
      icon: <FaUserCheck />,
      title: "Expert Coaches",
      desc: "Get guidance from certified trainers who understand your fitness goals."
    },
    {
      icon: <FaClipboardList />,
      title: "Personalized Plans",
      desc: "Workouts and nutrition plans tailored to your body and objectives."
    },
    {
      icon: <FaClock />,
      title: "Flexible Schedule",
      desc: "Choose workout timings that fit naturally into your daily routine."
    }
  ];

  return (
    <section className="why-choose">

      <div className="container">

        <div className="why-heading">

          <span>WHY FORGE FITNESS</span>

          <h2>
            Everything You Need
            <br />
            To Become Stronger
          </h2>

          <p>
            We combine expert coaching, modern facilities and
            personalized training to create a better fitness experience.
          </p>

        </div>


        <div className="benefits-grid">

          {benefits.map((benefit, index) => (

            <div className="benefit-card" key={index}>

              <div className="benefit-icon">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;