import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h3>GET IN TOUCH</h3>
        <p>
          Have any questions? We are always open to talk about your association.
        </p>
        <Link to="/contact">
          <button>GET IN TOUCH</button>
        </Link>
      </div>

      <h6>Created by @Shadaw</h6>
    </>
  );
};
export default Footer;
