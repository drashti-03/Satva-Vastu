/* eslint-disable no-unused-vars */
import React from "react";
import "./Services.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const servicesData = [
  {
    id: 1,
    title: "Office Vastu",
    description:
      "Your office can easily be transformed into a comfy place for employees to work in!",
    image: "/assets/images/office.png",
    logo: "/assets/images/office.png",
  },
  {
    id: 2,
    title: "Residential Vastu",
    description:
      "Create a warm, welcoming home filled with peace and positivity!",
    image: "/assets/images/home.png",
    logo: "/assets/images/home.png",
  },
  {
    id: 3,
    title: "Factory Vastu",
    description: "Boost factory energy for growth and success.",
    image: "/assets/images/factory.png",
    logo: "/assets/images/factory.png",
  },
  {
    id: 4,
    title: "Health",
    description: "Reach out for guidance on enhancing health in your space.",
    image: "/assets/images/health.png",
    logo: "/assets/images/health.png",
  },
  {
    id: 5,
    title: "Wealth",
    description: "Attract prosperity and wellness into your living space.",
    image: "/assets/images/wealth.png",
    logo: "/assets/images/wealth.png",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-cards">
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1 },
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            centeredSlides={false}
            loop={false}
            pagination={{ clickable: true }}
            className="services-swiper"
          >
            {servicesData.map(({ id, title, description, image, logo }) => (
              <SwiperSlide key={id} className="card swiper-slide d-flex flex-column">
                <div className="card-img-top flex-grow-1 d-flex align-items-stretch">
                  <img
                    src={image}
                    alt={title}
                    className="img-fluid brand-image"
                  />
                </div>
                <div className="card-title d-flex flex-row justify-content-between mx-5 mt-4 pt-2 flex-grow-1 w-100">
                  <div className="brand align-self-center ms-4">
                    <img
                      src={logo}
                      alt={title + ' logo'}
                      className="stripe-logo img-fluid"
                    />
                  </div>
                  <div className="rightarrow align-self-center me-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>
                  </div>
                </div>
                <div className="card-body text4 text-start d-flex justify-content-start flex-grow-1 mb-4 px-4 pb-1 py-0">
                  {description}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
