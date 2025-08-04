/* eslint-disable no-unused-vars */

import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutService from "../AboutService/AboutService";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("about-service");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container-1 d-flex flex-column flex-lg-row justify-content-xxl-center">
        <div className="leftside d-flex justify-content-center align-items-center ">
          {/* <img
            src="\assets\images\hero1.svg"
            alt="Hero1"
            className="heroimages"
          /> */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="\assets\images\hero1.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="\assets\images\hero2.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="\assets\images\hero3.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="\assets\images\hero4.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="\assets\images\hero5.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="\assets\images\hero6.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="\assets\images\hero7.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="\assets\images\hero8.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="\assets\images\hero9.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="\assets\images\hero10.svg"
                alt="Hero1"
                className="heroimages"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="rightside d-flex flex-column justify-content-center">
          <div className="heading text-center text-lg-start mt-2 mt-lg-4">
            <div className="space">Harmonizing Spaces</div>
            <div className="lives mt-2 mt-lg-4">Energizing Lives</div>
          </div>
          <div className="buttons d-flex flex-md-row flex-column justify-content-center align-items-center justify-content-lg-start">
            <div className="">
              <button
                className="button contact me-md-5"
                onClick={scrollToContact}
              >
                Contact Us
              </button>
            </div>
            <div className="">
              <button className="button ourservice" onClick={scrollToServices}>
                Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
