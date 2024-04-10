import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer mt-3">
      <Link to="/" className="footer-link">
        <h4 className="text-center ">MOVIEDB</h4>
      </Link>
    </div>
  );
};

export default Footer;
