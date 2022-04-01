import { Fragment, useContext } from "react";
import GeneralContext from "../../pages/general-context";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Actuality = () => {
  const ctx = useContext(GeneralContext);
  return (
    <Fragment>
      <div className="container pt-5 mt-5 pb-3">
        <div className="row text-center">
          <h3 className="bold-font text-uppercase">
            {ctx.generalData.home_settings["news_section_title"]}
          </h3>
        </div>
      </div>
      <div className="container d-none d-lg-block">
        <div className="row">
          {ctx.generalData.news_list.map((link) => (
            <div key={link.id} className="col-4">
              <div className="d-flex flex-column bg-home-actuality p-3 position-relative h-100">
                <div className="flex-grow-1">
                  <p className="regular-font small-text">{link.date}</p>
                  <p className="bold-font">{link.title}</p>
                  <p className="regular-font">{link.small_text}</p>
                </div>
                <div className="d-flex justify-content-start align-items-center py-3">
                  <Link href="/">
                    <button className="std-button">Lire La Suite</button>
                  </Link>
                </div>
                <div className="position-absolute top-0 start-0 bottom-0 bg-img-home-actuality">
                  <img
                    src={link.news_list_header[0].full_path_image}
                    alt="try"
                    className="bg-img-g-a"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container d-lg-none">
        <div className="row">
          <div className="swiper-container">
            <Swiper
              className="h-100"
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".custom-pagination-home-actuality",
              }}
              centeredSlides={true}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
               
              }}
            >
              {ctx.generalData.news_list.map((link) => (
                <SwiperSlide className="h-100" key={link.id}>
                  <div className="d-flex flex-column h-100 bg-home-actuality-mobile py-4 px-3 mx-sm-0 mx-3 position-relative">
                    <div className="flex-grow-1">
                      <p className="regular-font small-text mb-2">{link.date}</p>
                      <p className="bold-font">{link.title}</p>
                      <p className="regular-font">{link.small_text}</p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center">
                      <Link href="/">
                        <button className="std-button">Lire La Suite</button>
                      </Link>
                    </div>
                    <div className="position-absolute top-0 start-0 bottom-0 bg-img-home-actuality">
                      <img
                        src={link.news_list_header[0].full_path_image}
                        alt="try"
                        className="bg-img-g-a"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-pagination-home-actuality"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Actuality;
