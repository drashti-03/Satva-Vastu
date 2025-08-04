/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";

const Office = () => {
  return (
    <>
      <Header></Header>
      <div className="vastu-section container d-flex flex-column flex-lg-row align-items-center">
        <div className="vastu-image">
          <img
            src="\assets\images\office-main.png"
            alt="Vastu Diagram"
            className="vastu-diagramm d-flex "
          />
        </div>
        <div className="vastu-text">
          <h3 className="subheading">Office Vastu</h3>
          <p className="para">
            Whether you are setting up a new office or improving your existing
            workspace, Vastu can help create an environment that boosts energy
            and productivity. It’s not just about design but about ensuring that
            positive vibes flow through every corner of your office.
          </p>
          <p className="aims-title">Vastu in your Office aims to</p>
          <ul className="aims">
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
              Enhances focus and teamwork among employees.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
              Creates a stress-free and welcoming environment for staff and
              clients.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
              Supports financial growth and better decision-making.
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-check2"
                viewBox="0 0 16 16"
              >
                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
              </svg>
              Helps with proper placement of furniture, cabins, and meeting
              rooms to maximize efficiency.
            </li>
          </ul>
        </div>
      </div>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default Office;
