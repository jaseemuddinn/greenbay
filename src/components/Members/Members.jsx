import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./members.css";
const Members = () => {
  return (
    <div className="members">
      <div className="members1">
        <Navbar />
        <p>MEMBERS</p>
      </div>
      <div className="executive-members">
        <h1>EXECUTIVE MEMBERS</h1>
        <div className="executiveList">
          <div className="executiveName">
            <BiSolidUserCircle className="userlogo" />
            <p>Mr. Sachin Agarwal</p>
            <p className="tag">(President)</p>
          </div>
          <div className="executiveName">
            <BiSolidUserCircle className="userlogo" />
            <p>Dr. Kuldeep Dhar</p>
            <p className="tag">Vice President</p>
          </div>
          <div className="executiveName">
            <BiSolidUserCircle className="userlogo" />
            <p>Mr. Aman Pruthi</p>
            <p className="tag">Secretary</p>
          </div>
          <div className="executiveName">
            <BiSolidUserCircle className="userlogo" />
            <p>Dr. Sanjay Kumar Sharma</p>
            <p className="tag">Joint Secretary</p>
          </div>
          <div className="executiveName">
            <BiSolidUserCircle className="userlogo" />
            <p>Mr. Rajesh Singla</p>
            <p className="tag">Treasurer</p>
          </div>
          <div className="executiveName">
            <BiSolidUserCircle className="userlogo" />
            <p>Mr. Ajay Kumar</p>
            <p className="tag">Executive Member</p>
          </div>
          <div className="executiveName">
            <BiSolidUserCircle className="userlogo" />
            <p>Mr. M J Naseem</p>
            <p className="tag">Executive Member</p>
          </div>
          {/* <div className="executiveName">
            <BiSolidUserCircle className="userlogo" />
            <p>ABHISHEK SINGH</p>
          </div> */}
        </div>
        <h1>ASSOCIATION MEMBERS</h1>

        <ol>
          <li>ANKIT SAXENA</li>
          <li>GUNJAN SHARMA</li>
          <li>MR. RAKESH KUMAR</li>
          <li>MR. PRAKASH BHATIA</li>
          <li>MS. KIRTI KHANNNA</li>
          <li>DR. K.L AGARWAL</li>
          <li>DR. DIVYA DWIVEDI</li>
        </ol>
      </div>
      <Footer className="memfooter" />
    </div>
  );
};

export default Members;
