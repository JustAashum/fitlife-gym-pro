import { FaDumbbell } from "react-icons/fa";
import "./../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar-custom">

      <div className="logo">
        <FaDumbbell />
        <span>FitLife Gym</span>
      </div>

      <ul className="nav-links">

        <li><a href="#">Home</a></li>

        <li><a href="#">About</a></li>

        <li><a href="#">Services</a></li>

        <li><a href="#">Trainers</a></li>

        <li><a href="#">Pricing</a></li>

        <li><a href="#">Contact</a></li>

      </ul>

      <button className="join-btn">
        Join Now
      </button>

    </nav>
  );
}

export default Navbar;