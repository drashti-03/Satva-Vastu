/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutService.scss";
import { GiHealthNormal } from "react-icons/gi";
import { FaAward } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { GiLovers } from "react-icons/gi";
import { TiArrowRightThick } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const AboutService = () => {
  const navigate = useNavigate();

  const handleServiceClick = (servicePath) => {
    navigate(servicePath);
  };

  return (
    <div className="wholething d-flex flex-column aboutservice">
      <div className="vastu-section container container-2 d-flex flex-column flex-lg-row">
        <div className="about-image">
          <img
            src="\assets\images\aboutus.png"
            alt="Vastu Diagram"
            className="about-diagram d-flex "
          />
        </div>
        <div className="about-text">
          <h2 className="about-heading">About Us</h2>
          <div className="para">
            Mr. Vimal Ashara, the founder of Satva Vastu, is a trusted and
            professionally qualified Vastu consultant based in India. With
            extensive expertise and skills, he specializes in{" "}
            <b>enhancing Happiness and Prosperity</b> in your journey of
            lifespan by combining our ancient Vedic Vastu and Astrology called{" "}
            <b>Astro Vastu</b>.
          </div>
          <p className="aims-title">Be it your</p>
          <ul className="aims">
            <li>
              <GiHealthNormal className="bullet" />
              HEALTH
            </li>
            <li>
              <FaAward className="bullet" />
              CAREER
            </li>
            <li>
              <GiReceiveMoney className="bullet" />
              WEALTH
            </li>
            <li>
              <GiLovers className="bullet" />
              RELATIONSHIPS
            </li>
          </ul>
          <div className="para">
            <b>
              We at Satva Vastu , prominently believe that every person has
              ability to live healthy and happy life.
            </b>{" "}
            But due to some imbalance of Vastu in their home or premises, they
            may encounter some kind of obstacles in areas of health, wealth or
            prosperity in their lives.
          </div>
        </div>
      </div>
      <div className="lower swiper mySwiper d-flex flex-column justify-content-center align-items-stretch w-100">
        <h2 id="about-service" className="our-service service-card">
          Our Services
        </h2>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
          className="mySwiper scroll-card swiper-wrapper-about justify-content-center align-items-stretch w-100"
        >
          <SwiperSlide className="card d-flex flex-column servicecard">
            {" "}
            <div className="card-img-top flex-grow-1">
              <img
                src="/assets/images/office.png"
                alt=""
                className="img-fluid brand-image"
              />
            </div>
            <div className="card-title d-flex flex-row justify-content-between mx-5 pt-2 flex-grow-1 w-100 --bs-card-spacer-y-0">
              <div className="brand align-self-center ms-4">
                <h5 className="card-title" onClick={() => navigate("/office")}>
                  OFFICE VASTU
                </h5>
              </div>
              <div className="rightarrow align-self-center me-4 ">
                <TiArrowRightThick
                  className="svgarrow"
                  onClick={() => navigate("/office")}
                />
              </div>
            </div>
            <div className="card-body text4 text-start d-flex justify-content-start flex-grow-1 mb-4 px-4 pb-1 py-0">
              Your office can easily be transformed into a comfy place for
              employees to work in!
            </div>
          </SwiperSlide>

          <SwiperSlide className="card d-flex flex-column ">
            {" "}
            <div className="card-img-top flex-grow-1">
              <img
                src="/assets/images/home.png"
                alt=""
                className="img-fluid brand-image"
              />
            </div>
            <div className="card-title d-flex flex-row justify-content-between mx-5 pt-2 flex-grow-1 w-100 --bs-card-spacer-y-0">
              <div className="brand align-self-center ms-4">
                <h5 className="card-title" onClick={() => navigate("/home")}>
                  RESIDENTIAL VASTU
                </h5>
              </div>
              <div className="rightarrow align-self-center me-4 ">
                <TiArrowRightThick
                  className="svgarrow"
                  onClick={() => navigate("/home")}
                />
              </div>
            </div>
            <div className="card-body text4 text-start d-flex justify-content-start flex-grow-1 mb-4 px-4 pb-1 py-0">
              Create a warm, welcoming home filled with peace and positivity!
            </div>
          </SwiperSlide>

          <SwiperSlide className="card d-flex flex-column">
            {" "}
            <div className="card-img-top flex-grow-1">
              <img
                src="/assets/images/factory.png"
                alt=""
                className="img-fluid brand-image"
              />
            </div>
            <div className="card-title d-flex flex-row justify-content-between mx-5 pt-2 flex-grow-1 w-100 --bs-card-spacer-y-0">
              <div className="brand align-self-center ms-4">
                <h5 className="card-title" onClick={() => navigate("/factory")}>
                  FACTORY VASTU
                </h5>
              </div>
              <div className="rightarrow align-self-center me-4 ">
                <TiArrowRightThick
                  className="svgarrow"
                  onClick={() => navigate("/factory")}
                />
              </div>
            </div>
            <div className="card-body text4 text-start d-flex justify-content-start flex-grow-1 mb-4 px-4 pb-1 py-0">
              Boost factory energy for growth and success.
            </div>
          </SwiperSlide>

          <SwiperSlide className="card d-flex flex-column">
            {" "}
            <div className="card-img-top flex-grow-1">
              <img
                src="/assets/images/wealth.png"
                alt=""
                className="img-fluid brand-image"
              />
            </div>
            <div className="card-title d-flex flex-row justify-content-between mx-5 pt-2 flex-grow-1 w-100 --bs-card-spacer-y-0">
              <div className="brand align-self-center ms-4">
                <h5 className="card-title" onClick={() => navigate("/wealth")}>
                  WEALTH
                </h5>
              </div>
              <div className="rightarrow align-self-center me-4 ">
                <TiArrowRightThick
                  className="svgarrow"
                  onClick={() => navigate("/wealth")}
                />
              </div>
            </div>
            <div className="card-body text4 text-start d-flex justify-content-start flex-grow-1 mb-4 px-4 pb-1 py-0">
              Attract prosperity and wellness into your living space.
            </div>
          </SwiperSlide>

          <SwiperSlide className="card d-flex flex-column">
            {" "}
            <div className="card-img-top flex-grow-1">
              <img
                src="/assets/images/health.png"
                alt=""
                className="img-fluid brand-image"
              />
            </div>
            <div className="card-title d-flex flex-row justify-content-between mx-5 pt-2 flex-grow-1 w-100 --bs-card-spacer-y-0">
              <div className="brand align-self-center ms-4">
                <h5 className="card-title" onClick={() => navigate("/health")}>
                  HEALTH
                </h5>
              </div>
              <div className="rightarrow align-self-center me-4 ">
                <TiArrowRightThick
                  className="svgarrow"
                  onClick={() => navigate("/health")}
                />
              </div>
            </div>
            <div className="card-body text4 text-start d-flex justify-content-start flex-grow-1 mb-4 px-4 pb-1 py-0">
              Reach out for guidance on enhancing health in your space.
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default AboutService;
