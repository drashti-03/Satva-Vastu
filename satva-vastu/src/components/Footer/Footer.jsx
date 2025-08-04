/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="footer d-flex flex-column flex-lg-row ">
        {" "}
        <div className="left-f d-flex flex-column">
          <div className="mainlogo-f d-flex flex-row mt-4">
            <div className="leftlogo d-flex justify-content-center align-content-center">
              <img src="\assets\images\logosmall.svg" alt="Small logo" />
            </div>
            <div className="rightlogo d-flex flex-column justify-content-center">
              <div className="vector">
                <img
                  src="\assets\images\Vector.svg"
                  alt="Satva Vastu"
                  className="vectorimg"
                />
              </div>
              <hr className="redline" />
              <div className="vectortext">Health | Wealth | Prosperity</div>
            </div>
          </div>
          <div className="para-f mt-2 mt-lg-4">
            Satva looks after growth, love and the higher mind.
          </div>
        </div>
        <div className="service-f">
          <ul>
            <p className="aims-title">Our Services</p>
            <li>Office Vastu</li>
            <li>Residential Vastu</li>
            <li>Factory Vastu</li>
            <li>Health</li>
            <li>Wealth</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
