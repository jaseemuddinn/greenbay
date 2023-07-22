import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import photo from "../../Assets/gree.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="landing-page">
        <div>
          <Navbar />
        </div>
        <div className="mainContent">
          <h1>GREENBAY GOLF VILLAGE</h1>
          <h3>RESIDENT ASSOCIATION</h3>
          <Link to="/contact">
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <div className="about-sec">
        <div className="about-content">
          <h3>ABOUT US</h3>
          <p>
            Welcome to the GreenBay Golf Village Resident Association! We are a
            vibrant community committed to fostering connections and a strong
            sense of belonging among our residents.....
            <span className="read-more">
              <Link to="/about">Read more</Link>
            </span>
          </p>
        </div>
        <div className="about-pic">
          <img src={photo} alt="pic" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
