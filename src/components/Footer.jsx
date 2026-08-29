import "./../styles/footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaArrowUp
} from "react-icons/fa6";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">

            <h2>FORGE<span>.</span></h2>

            <p>
              Build strength. Build confidence.
              Build a better version of yourself.
            </p>

            <div className="footer-socials">

              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>

              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>

              <a href="#" aria-label="X">
                <FaXTwitter />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>

            </div>

          </div>


          {/* QUICK LINKS */}

          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#trainers">Trainers</a>
            <a href="#pricing">Pricing</a>

          </div>


          {/* SERVICES */}

          <div className="footer-links">

            <h3>Services</h3>

            <a href="#services">Weight Training</a>
            <a href="#services">Cardio Training</a>
            <a href="#services">CrossFit</a>
            <a href="#services">Yoga</a>
            <a href="#services">Personal Training</a>

          </div>


          {/* CONTACT */}

          <div className="footer-contact">

            <h3>Contact</h3>

            <p>New Delhi, India</p>

            <p>+91 12345678</p>

            <p>hello@forgefitness.com</p>

            <button
              className="back-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <FaArrowUp />
            </button>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>
            © 2026 Forge Fitness. All rights reserved.
          </p>

          <div>

            <a href="#">Privacy Policy</a>

            <a href="#">Terms & Conditions</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;