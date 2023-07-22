import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("SEND NOW");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Sent!");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="contact">
      <div className="contact1">
        <Navbar />
        <p>CONTACT US</p>
      </div>
      <div className="contact_card">
        <div className="container mt-5">
          <h3 className="mb-3">Get In Touch</h3>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control" id="message" required />
            </div>
            <button className="btn btn-danger mb-5" type="submit">
              {formStatus}
            </button>
          </form>
        </div>

        <div className="talk2us">
          <h3 className="mb-3">Talk To Us</h3>
          <div className="talk2us1">
            <AiOutlineMail className="talk2uslogo" />
            <div>
              <p className="talk2ustext">EMAIL</p>
              <p className="talk2usdata">something@ggvra.in</p>
            </div>
          </div>
          <div className="talk2us1">
            <BsFillTelephoneFill className="talk2uslogo" />
            <div>
              <p className="talk2ustext">PHONE NUMBER</p>
              <p className="talk2usdata">202-555-882-876</p>
            </div>
          </div>
          <div className="talk2us1">
            <BsFillGeoAltFill className="talk2uslogo" />
            <div>
              <p className="talk2ustext">ADDRESS</p>
              <p className="talk2usdata">GREATER NOIDA , ADD</p>
            </div>
          </div>
          <div className="talk2us1"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
