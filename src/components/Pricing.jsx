import "./../styles/pricing.css";

import {
  FaCheck,
  FaDumbbell,
  FaCrown
} from "react-icons/fa";

function Pricing() {

  const plans = [
    {
      name: "Basic",
      price: "999",
      description: "Perfect for getting started.",
      icon: <FaDumbbell />,
      features: [
        "Full Gym Access",
        "Cardio Equipment",
        "Locker Access",
        "Free Fitness Assessment"
      ]
    },

    {
      name: "Pro",
      price: "1,999",
      description: "For serious fitness enthusiasts.",
      popular: true,
      icon: <FaCrown />,
      features: [
        "Everything in Basic",
        "Personal Training",
        "Customized Workout Plan",
        "Nutrition Guidance",
        "Group Classes"
      ]
    },

    {
      name: "Elite",
      price: "2,999",
      description: "The complete fitness experience.",
      icon: <FaCrown />,
      features: [
        "Everything in Pro",
        "Dedicated Personal Trainer",
        "Personalized Diet Plan",
        "24/7 Gym Access",
        "Monthly Progress Tracking"
      ]
    }
  ];

  return (
    <section className="pricing">

      <div className="container">

        <div className="pricing-heading">

          <span>MEMBERSHIP PLANS</span>

          <h2>
            Choose Your Fitness Journey
          </h2>

          <p>
            Simple plans designed to fit your goals,
            lifestyle and training needs.
          </p>

        </div>


        <div className="pricing-grid">

          {plans.map((plan, index) => (

            <div
              className={`pricing-card ${
                plan.popular ? "popular" : ""
              }`}
              key={index}
            >

              {plan.popular && (
                <div className="popular-badge">
                  MOST POPULAR
                </div>
              )}


              <div className="plan-icon">
                {plan.icon}
              </div>

              <h3>{plan.name}</h3>

              <p className="plan-description">
                {plan.description}
              </p>


              <div className="price">

                <span>₹</span>

                {plan.price}

                <small>/month</small>

              </div>


              <div className="plan-features">

                {plan.features.map((feature, featureIndex) => (

                  <div
                    className="feature"
                    key={featureIndex}
                  >

                    <FaCheck />

                    <span>{feature}</span>

                  </div>

                ))}

              </div>


              <button className="plan-button">
                Choose Plan
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;