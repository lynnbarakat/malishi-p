import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import GeneralContext from "../../pages/general-context";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Impact = () => {
  const ctx = useContext(GeneralContext);

  const regularContent = ctx.generalData.home_impacts_list.map(
    (link, index) => (
      <div key={index} className="col-4 text-center">
        <div className="home-imp-img">
          <div className="position-relative">
            <div className="home-imp-img1">
              <img src={link.full_path_image} alt="logo" />
            </div>
            <div className="home-imp-img2">
              <img src={link.full_path_hover_image} alt="logo" />
            </div>
          </div>
          <p className="bold-font home-imp-cap pt-3">{link.title}</p>
        </div>
        <p className="regular-font pt-2 px-5">{link.description}</p>
      </div>
    )
  );

  const swiperContent = (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".custom-pagination-impact" }}
      >
        {ctx.generalData.home_impacts_list.map((link, index) => (
          <SwiperSlide key={index}>
            <div className="text-center">
              <img src={link.full_path_image} alt="logo" />
              <p className="bold-font text-uppercase text-green pt-3">
                {link.title}
              </p>
              <p className="regular-font pt-2 px-5">{link.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination-impact"></div>
    </div>
  );

  return (
    <div className="container mt-5 pt-3 position-relative">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="position-relative">
            <div className="row d-none d-lg-flex">{regularContent}</div>
            <div className="vertical-txt-home text-center w-100 pb-lg-0 pb-4">
              <h3 className="bold-font text-uppercase">
                {ctx.generalData.home_settings["impact_title"]}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-lg-none">{swiperContent}</div>
    </div>
  );
};

export default Impact;
