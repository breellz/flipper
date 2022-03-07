import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
    <div className="nav-wrapper white" >
      <img src="https://res.cloudinary.com/breellz/image/upload/h_50,c_scale/v1646561361/Flipper/flipper_minified.png" alt="logo"  className="brand-logo left" />
      <ul id="nav-mobile" className="right">
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/sell">Sell</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
  
    )
}

export default Navbar