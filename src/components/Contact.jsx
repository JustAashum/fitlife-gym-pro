import "./../styles/contact.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

function Contact() {

  return (
    <section className="contact">

      <div className="container">

        <div className="contact-heading">

          <span>GET IN TOUCH</span>

          <h2>Ready To Start Your Fitness Journey?</h2>

          <p>
            Have a question about membership, personal training
            or our facilities? We'd love to hear from you.
          </p>

        </div>


        <div className="contact-grid">

          {/* CONTACT INFORMATION */}

          <div className="contact-info">

            <div className="contact-item">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3>Visit Us</h3>
                <p>123 Fitness Street, New Delhi, India</p>
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h3>Email Us</h3>
                <p>hello@forgefitness.com</p>
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                <FaClock />
              </div>

              <div>
                <h3>Opening Hours</h3>
                <p>Mon - Sun: 5:00 AM - 11:00 PM</p>
              </div>

            </div>

          </div>


          {/* CONTACT FORM */}

          <form className="contact-form">

            <div className="form-row">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

            </div>


            <input
              type="tel"
              placeholder="Phone Number"
            />


            <select defaultValue="">

              <option value="" disabled>
                Select Your Interest
              </option>

              <option value="membership">
                Membership
              </option>

              <option value="personal-training">
                Personal Training
              </option>

              <option value="nutrition">
                Nutrition Plan
              </option>

              <option value="general">
                General Enquiry
              </option>

            </select>


            <textarea
              rows="5"
              placeholder="Tell us how we can help..."
            ></textarea>


            <button type="submit">
              Start Your Journey
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;