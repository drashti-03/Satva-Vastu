/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";

const Factory = () => {
  return (
    <>
      <Header></Header>
      <div className="vastu-section container d-flex flex-column flex-lg-row align-items-center">
        <div className="vastu-image">
          <img
            src="\assets\images\factory-main.png"
            alt="Vastu Diagram"
            className="vastu-diagramm d-flex "
          />
        </div>
        <div className="vastu-text">
          <h3 className="subheading">Factory Vastu</h3>
          <p className="para">
            Starting a factory or improving operations in an existing one? Vastu
            for factories ensures that your space is set up to maximize
            efficiency and growth.
          </p>
          <p className="aims-title">Vastu in your Factory aims to</p>
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
              Helps place machines and equipment to avoid breakdowns and delays.
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
              Ensures smooth production processes and better workflow.
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
              Reduces workplace accidents and creates a safe environment.
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
              Attracts stability, prosperity, and long-term success for your
              business.
            </li>
          </ul>
        </div>
      </div>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default Factory;
