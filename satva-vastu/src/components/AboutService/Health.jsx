/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";

const Health = () => {
  return (
    <>
      <Header></Header>
      <div className="vastu-section container d-flex flex-column flex-lg-row align-items-center">
        <div className="vastu-image">
          <img
            src="\assets\images\health-main.png"
            alt="Vastu Diagram"
            className="vastu-diagramm d-flex "
          />
        </div>
        <div className="vastu-text">
          <h3 className="subheading">Health</h3>
          <p className="para">
            Did you know that the design of your home or workplace can affect
            your health? Whether you’re looking for better sleep, reduced
            stress, or an overall healthier life, Vastu can make a difference.
          </p>
          <p className="aims-title">
            Vastu regarding to any Health issues aims to
          </p>
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
              Helps position cash lockers, safes, and workspaces for maximum
              financial gain.
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
              Supports smarter financial decisions by creating a positive energy
              flow.
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
              Reduces unnecessary financial obstacles.
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
              Attracts opportunities for business growth and personal wealth.
            </li>
          </ul>
        </div>
      </div>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default Health;
