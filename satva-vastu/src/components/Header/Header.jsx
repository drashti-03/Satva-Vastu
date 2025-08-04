/* eslint-disable no-unused-vars */

import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <nav className="navbar justify-content-center container-fluid">
        <div className="container d-flex justify-content-center">
          <a className="navbar-brand logo d-block " href="#">
            <div className="mainlogo d-flex flex-row">
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
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;

// // /* eslint-disable no-unused-vars */
// // import React from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import "./Header.css";

// // const Header = () => {
// //   return (
// //     <div>
// //       <nav className="navbar">
// //         <div className="container">
// //           <a className="navbar-brand" href="#">
// //             <div className="mainlogo d-flex flex-column text-center align-content-center justify-content-center">
// //               <div className="smalllogo ">
// //                 <img src="\assets\images\logosmall.png" alt="" />
// //               </div>
// //               <div className="vectortext d-flex flex-row text-center align-content-center justify-content-center">
// //                 <div className="vector">
// //                   <img src="\assets\images\Vector.png" alt="vector" />
// //                 </div>
// //                 <div className="text">Health | Wealth | Prosperity</div>
// //               </div>
// //             </div>
// //             <i className="bi bi-arrow-right-circle-fill"></i>
// //             <iframe
// //               style="border: 1px solid rgba(0, 0, 0, 0.1);"
// //               width="800"
// //               height="450"
// //               src="https://embed.figma.com/design/Gy2D3vanTwoZCo1yyanRyZ/Satva-Vastu?node-id=312-137&embed-host=share"
// //               allowfullscreen
// //             ></iframe>
// //           </a>
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Header;

// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <header className="hero">
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img src="" alt="Satva Vastu Logo" className="logo" />{" "}
//           {/* Add image path */}
//         </div>
//         <ul className="navbar-links">
//           <li>
//             <a href="#about">About Us</a>
//           </li>
//           <li>
//             <a href="#services">Our Services</a>
//           </li>
//           <li>
//             <a href="#contact">Contact Us</a>
//           </li>
//         </ul>
//       </nav>
//       <div className="hero-content">
//         <h1>Where Luxury Meets Harmony</h1>
//         <p>Harmonizing Spaces. Energizing Lives.</p>
//         <p className="hero-keywords">Health | Wealth | Prosperity</p>
//         <button className="hero-button">Contact Now</button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// Header.jsx
// import React from "react";
// import "./Header.scss";

// const Header = () => {
//   return (
//     <header className="hero">
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo-section">
//           {/* Logo and Text Columns */}
//           <div className="logo-column">
//             <img src="" alt="Logo" className="logo" /> {/* Add logo path */}
//           </div>
//           <div className="text-column">
//             {/* Two Rows in the Second Column */}
//             <div className="row-1">SATVA VASTU</div>
//             <div className="row-2">Harmonizing Spaces</div>
//           </div>
//         </div>
//         <ul className="navbar-links">
//           <li>
//             <a href="#about">About Us</a>
//           </li>
//           <li>
//             <a href="#services">Our Services</a>
//           </li>
//           <li>
//             <a href="#contact">Contact Us</a>
//           </li>
//         </ul>
//       </nav>

//       {/* Hero Content */}
//       <div className="hero-content">
//         <h1
//           style={{
//             fontSize: "2.5rem",
//             fontFamily: "Playfair Display, serif",
//             color: "#D2E5FF",
//           }}
//         >
//           Where Luxury Meets Harmony
//         </h1>
//         <p className="tagline" style={{ fontSize: "1.2rem", color: "#D2E5FF" }}>
//           Harmonizing Spaces. Energizing Lives.
//         </p>
//         <p
//           className="hero-keywords"
//           style={{ fontWeight: "600", color: "#D2E5FF" }}
//         >
//           Health | Wealth | Prosperity
//         </p>
//         <button
//           className="hero-button"
//           style={{
//             backgroundColor: "#D2E5FF",
//             color: "#1B1642",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "5px",
//             fontSize: "1rem",
//             cursor: "pointer",
//           }}
//         >
//           Contact Now
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import "./Header.scss";

// const Header = () => {
//   return (
//     <section className="section-1 w-100">
//       <div className="d-flex flex-column justify-content-center">
//         <div className="container-1">
//           <nav className="navbar">
//             <div className="container d-flex">
//               <a className="navbar-brand logo d-block d-lg-none" href="#">
//                 <div className="mainlogo d-flex flex-row">
//                   <div className="leftlogo d-flex justify-content-center">
//                     <img
//                       src="\assets\images\logosmall.png"
//                       alt="Small logo"
//                     />
//                   </div>
//                   <div className="rightlogo d-flex flex-column justify-content-center">
//                     <div className="vector">
//                       <img
//                         src="public\assets\images\Vector.png"
//                         alt="Satva Vastu"
//                       />
//                     </div>
//                     <hr className="redline" />
//                     <div className="vectortext">
//                       Health | Wealth | Prosperity
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </div>
//           </nav>

//           <div className="d-flex flex-column flex-lg-row mt-3 mt-lg-5 justify-content-xxl-center">
//             <div className="right1 mt-3">
//               <div className="d-flex rightillus">
//                 <img
//                   src="public\assets\images\hero1.png"
//                   alt=""
//                   className="illustration"
//                 />
//               </div>
//             </div>

//             <div className="left1 d-flex flex-column justify-content-center align-items-center align-items-lg-start mt-4 mt-lg-3 ms-lg-5 ps-lg-5">
//               <div className="heading text-center text-lg-start mt-2 mt-lg-4">
//                 <div className="modern">Modern design</div>
//                 <div className="simple">made simple.</div>
//               </div>
//               <div className="text1 text-center text-lg-start d-flex justify-content-center align-items-center mt-1 mt-lg-4">
//                 <p className="para1 mx-3 mx-lg-0">
//                   We’ll handle all your finances for free without you ever
//                   seeing a person. No fees. No bullshit.
//                 </p>
//               </div>
//               <div className="buttons d-flex flex-row justify-content-center align-items-center justify-content-lg-start mt-lg-4">
//                 <div className="">
//                   <button className="button getstarted me-3">
//                     Get Started
//                   </button>
//                 </div>
//                 <div className="">
//                   <button className="button learnmore">Learn More</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Header;
