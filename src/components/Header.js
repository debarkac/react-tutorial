import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  //using userContext
  const {loggedInUser}=useContext(userContext);


  //subscribing to redux store using a selector
  const cartItems=useSelector((store)=>store.cart.items);

  return (
    <div className="header flex justify-between items-center px-6 py-0 top-0 left-0 bg-green-100">
      <div className="logoContainer">
        <img className="logo h-20 w-20" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="list-none flex gap-8 items-center ">
          <li className="p-2 cursor-pointer text-inherit hover:text-blue-300"><Link to="/">Home</Link></li>
          <li className="p-2 cursor-pointer text-inherit hover:text-blue-300"><Link to="/aboutus">About Us</Link></li>
          <li className="p-2 cursor-pointer text-inherit hover:text-blue-300"><Link to="/contactus">Contact Us</Link></li>
          <li className="p-2 cursor-pointer text-inherit hover:text-blue-300">
            <Link className="nav-links" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="p-2 cursor-pointer text-inherit hover:text-blue-300"><Link to="/cart">Cart-{cartItems.length}</Link></li>
          {/* <button className="p-2 cursor-pointer text-inherit hover:text-blue-300 login" 
          onClick={() => 
            // toggling
          btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}>
            {btnName}
          </button> */}

          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
