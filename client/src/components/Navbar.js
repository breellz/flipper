import React from "react";

const Navbar = () => {
    return (
        <nav>
    <div className="nav-wrapper white" >
      <img src="https://res.cloudinary.com/breellz/image/upload/h_50,c_scale/v1646561361/Flipper/flipper_minified.png" alt="logo"  className="brand-logo left" />
      <ul id="nav-mobile" className="right">
        <li><a href="/">Buy</a></li>
        <li><a href="/sell">Sell</a></li>
        <li><a href="/signup">Sign Up</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </div>
  </nav>
    )
}

export default Navbar