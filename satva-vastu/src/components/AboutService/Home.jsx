/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="vastu-section container d-flex flex-column flex-lg-row align-items-center">
        <div className="vastu-image">
          <img
            src="\assets\images\home-main.png"
            alt="Vastu Diagram"
            className="vastu-diagramm d-flex "
          />
        </div>
        <div className="vastu-text">
          <h3 className="subheading">Residential Vastu</h3>
          <p className="para">
            Your home is a reflection of your inner peace. Whether you are
            building a new house or looking to improve the energy in your
            current home, Vastu can make your space feel more balanced and
            positive.
          </p>
          <p className="aims-title">Vastu in your Home aims to</p>
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
              Promotes harmony, good health, and strong relationships.
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
              Ensures peaceful and rejuvenating bedrooms.
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
              Helps you design your kitchen for better health and prosperity.
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
              Aligns your living spaces with nature to bring happiness to your
              family.
            </li>
          </ul>
        </div>
      </div>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </>
  );
};

export default Home;
