import React from "react";
import { Link } from "react-router-dom";

const navigation = props => {
  return (
    <div className="NavigationItems">
      <Link to="/">Chat</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  );
};

export default navigation;

/* <nav>
      <a href="index.html">Chat</a>
      <a href="contact.html">Contact Us</a>
    </nav> */
