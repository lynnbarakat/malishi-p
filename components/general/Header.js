import Nav from "./Nav";
import { useContext } from "react";
import GeneralContext from "../../pages/general-context";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Header = (props) => {
  const ctx = useContext(GeneralContext);
  return (
    <header className="header position-relative">
      <Nav />
      <div className="position-absolute top-0 start-0 w-100 header-background"></div>
      <div className="container">
        <div className="row">
          <h1 className="pt-5 mt-5 pb-4 bold-font">{props.title}</h1>
          <div className="col-lg-6">
            <p className="regular-font">{props.text}</p>
          </div>
        </div>
        <div className="row">
          <div className="swiper-container position-relative">
            <div className="custom-pagination-right"></div>
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={{ clickable: true, el: ".custom-pagination-right" }}
            >
              {props.image.map((link) => (
                <SwiperSlide key={link.id}>
                  <div className="ratio ratio-home-header">
                    <img
                      src={link.full_path_image}
                      alt="logo"
                      className="cover"
                    />
                  </div>
                  <p className="pt-3 description-text regular-font text-green">
                    {link.description}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
