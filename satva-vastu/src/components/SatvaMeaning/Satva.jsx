/* eslint-disable no-unused-vars */

import React from "react";
import "./Satva.scss";

const Satva = () => {
  return (
    <div className="vastu-section container d-flex flex-column flex-lg-row align-items-center">
      <div className="vastu-image">
        <h2 className="satva-heading">What does Satva mean?</h2>

        <ul className="features">
          <li className="satvalist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
            Three gunas: Tamas, Rajas, and Satva are present in all beings and
            surroundings
          </li>
          <li className="satvalist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
            Each guna varies in level, shaping qualities of mind and body
          </li>
          <li className="satvalist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
              />
            </svg>
            Humans are uniquely capable of consciously adjusting guna levels
          </li>
        </ul>
        <div className="para">
          Meaning of Satva is the tendency towards selfless service and
          satisfaction with life. Satva looks after growth, love and the higher
          mind. Its direction is upward. It is responsible for equilibrium,
          harmony, peace and knowledge. The Satva guna also represents
          tranquilly, balance and pure intelligence.
        </div>
      </div>
      <div>
        <img
          src="\assets\images\gunas.svg"
          alt="Vastu Diagram"
          className="vastu-diagramm d-flex "
        />
      </div>
    </div>
  );
};

export default Satva;
