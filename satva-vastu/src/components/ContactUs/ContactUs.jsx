/* eslint-disable no-unused-vars */

import React from "react";
import "./ContactUs.scss";

const ContactUS = () => {
  return (
    <div
      id="contact-us"
      className="vastu-section container d-flex flex-column flex-lg-row align-items-center"
    >
      <div className="vastu-image">
        <h2 className="satva-heading">Contact Us</h2>
        <p className="aims-title">ADDRESS</p>
        <div className="para">
          5-6 Panchshil Plaza <br />
          Panchvati Road - Kotechanagar Road, <br />
          Near, Amin Marg, <br />
          Rajkot, Gujarat - 360001 <br />
        </div>
        <p className="aims-title">CONTACT DETAILS</p>
        <div className="para">
          +91 9426969501 <br />
          vimal.ashara@gmail.com <br />
        </div>
      </div>
      <div className="contact-diagramm d-flex">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231.3121758687675!2d70.78161196033477!3d22.289277343681302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbe23ff3844d%3A0x4bd890b120ab95be!2sVastu%20Consultant%20Vimal%20M%20Ashara%20-%20Satva%20Vastu!5e0!3m2!1sen!2sin!4v1753631137263!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUS;
