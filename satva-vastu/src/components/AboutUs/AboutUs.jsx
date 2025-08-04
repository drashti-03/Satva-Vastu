/* eslint-disable no-unused-vars */
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-blue-50 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-center gap-10">
        <div className="flex-shrink-0">
          <img
            src="assets/images/aboutus.png"
            alt="Satva Vastu Elements"
            className="w-72 max-w-full rounded-lg shadow-md"
          />
        </div>

        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">About Us</h2>

          <div className="border-2 border-blue-400 rounded-md p-4 mb-4">
            <p className="mb-2">
              <strong>Mr. Vimal Ashara</strong>, the founder of Satva Vastu, is
              a trusted and professionally qualified Vastu consultant based in
              India. With extensive expertise and skills, he specializes in{" "}
              <strong>enhancing Happiness and Prosperity</strong>
            </p>

            <ul className="flex flex-wrap gap-4 mb-2">
              <li className="bg-blue-100 px-4 py-1 rounded-full font-medium">
                Health
              </li>
              <li className="bg-green-100 px-4 py-1 rounded-full font-medium">
                Wealth
              </li>
              <li className="bg-purple-100 px-4 py-1 rounded-full font-medium">
                Career
              </li>
              <li className="bg-pink-100 px-4 py-1 rounded-full font-medium">
                Relationships
              </li>
            </ul>

            <p>
              in your journey of lifespan by combining our ancient Vedic Vastu
              and Astrology called <strong>Astro Vastu</strong>.
            </p>
          </div>

          <div>
            <p className="italic font-medium mb-2">
              We at Satva Vastu, prominently believe that every person has
              ability to live healthy and happy life.
            </p>
            <p>
              But due to some imbalance of Vastu in their home or premises, they
              may encounter some kind of obstacles in areas of health, wealth or
              prosperity in their lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

// import React from "react";
// import "./About.scss";

// const About = () => {
//   return (
//     <section className="about-section">
//       <div className="about-content">
//         <h2 className="about-title">About Us</h2>
//         <p className="about-text">
//           <b>Mr. Vimal Ashara</b>, the founder of Satva Vastu, is a trusted and professionally qualified Vastu consultant based in India. With extensive expertise and skills, he specializes in <b>enhancing Happiness and Prosperity</b>
//         </p>
//         <ul className="about-features">
//           <li><span className="icon health-icon"></span>Health</li>
//           <li><span className="icon wealth-icon"></span>Wealth</li>
//           <li><span className="icon career-icon"></span>Career</li>
//           <li><span className="icon relationships-icon"></span>Relationships</li>
//         </ul>
//         <p className="about-text">
//           in your journey of lifespan by combining our ancient Vedic Vastu and Astrology called <b>Astro Vastu</b>.
//         </p>
//         <p className="about-bold-text">
//           We at Satva Vastu, prominently believe that every person has ability to live healthy and happy life.
//         </p>
//         <p className="about-text">
//           But due to some imbalance of Vastu in their home or premises, they may encounter some kind of obstacles in areas of health, wealth or prosperity in their lives.
//         </p>
//       </div>
//       <div className="about-image-container">
//         <img
//           src="/assets/images/gunas.svg"
//           alt="Vastu Diagram"
//           className="about-image"
//         />
//       </div>
//     </section>
//   );
// };

// export default About;
