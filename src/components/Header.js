import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li>
            <Link className="nav-links" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
          <button className="login" 
          onClick={() => 
            // toggling
          btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
