import { FaDumbbell } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar-custom">

      <div className="logo">
        <Link to="/">
          <FaDumbbell />
          <span>Forge Fitness</span>
        </Link>
      </div>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/services">Services</Link></li>

        <li><Link to="/trainers">Trainers</Link></li>

        <li><Link to="/pricing">Pricing</Link></li>

        <li><Link to="/contact">Contact</Link></li>

      </ul>

      <Link to="/contact" className="join-btn">
        Join Now
      </Link>

    </nav>
  );
}

export default Navbar;