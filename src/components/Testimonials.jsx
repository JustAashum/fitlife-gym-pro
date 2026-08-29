import "./../styles/testimonials.css";

import {
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";

function Testimonials() {

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Member for 2 years",
      text: "The trainers are extremely supportive and the equipment is excellent. I have seen a huge improvement in my strength and fitness.",
      rating: 5
    },
    {
      name: "Priya Verma",
      role: "Member for 1 year",
      text: "What I love most is the personalized approach. The trainers actually understand your goals instead of giving everyone the same routine.",
      rating: 5
    },
    {
      name: "Arjun Mehta",
      role: "Member for 8 months",
      text: "Great atmosphere, professional trainers and a really motivating community. Forge Fitness has completely changed my approach to training.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials">

      <div className="container">

        <div className="testimonials-heading">

          <span>MEMBER STORIES</span>

          <h2>
            What Our Members Say
          </h2>

          <p>
            Real experiences from people who are
            working toward becoming their strongest selves.
          </p>

        </div>


        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (

            <div
              className="testimonial-card"
              key={index}
            >

              <FaQuoteLeft className="quote-icon" />


              <div className="stars">

                {[...Array(testimonial.rating)].map(
                  (_, starIndex) => (
                    <FaStar key={starIndex} />
                  )
                )}

              </div>


              <p className="testimonial-text">
                "{testimonial.text}"
              </p>


              <div className="member-info">

                <div className="member-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;