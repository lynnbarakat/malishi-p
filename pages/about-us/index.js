import { Fragment, useContext } from "react";
import Footer from "../../components/general/Footer";
import Layout from "../../components/general/Layout";
import Nav from "../../components/general/Nav";
import AboutUs from "../../components/home/AboutUs";
import GeneralContext from "../general-context";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Section2 from "../../components/about-us/Section2";
import Supply from "../../components/about-us/Supply";
import FabricationProcess from "../../components/about-us/FabricationProcess";
import Quality from "../../components/about-us/Quality";

const HomePage = () => {
  const ctx = useContext(GeneralContext);
  return (
    <Fragment>
      <header className="header position-relative">
        <Nav />
        <div className="position-absolute top-0 start-0 w-100 header-background"></div>
        <div className="container">
          <div className="row">
            <h1 className="pt-5 mt-5 pb-4 bold-font">A PROPOS</h1>
            <div className="col-lg-6">
              <p className="regular-font">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                voluptatum minima voluptas reiciendis ab dicta soluta modi ipsa
                pariatur voluptate distinctio laboriosam quos itaque
                perferendis, incidunt consequuntur ad alias tenetur.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container position-relative">
              <div className="custom-pagination-right"></div>
              <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true, el: ".custom-pagination-right" }}
              >
                <SwiperSlide>
                  <div className="ratio ratio-home-header">
                    <img
                      src={"https://via.placeholder.com/1200x300"}
                      alt="logo"
                      className="cover"
                    />
                  </div>
                  <p className="pt-3 description-text regular-font text-green">
                    Description 1
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ratio ratio-home-header">
                    <img
                      src={"https://via.placeholder.com/1200x300"}
                      alt="logo"
                      className="cover"
                    />
                  </div>
                  <p className="pt-3 description-text regular-font text-green">
                    Deccription 2
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </header>
      <AboutUs
        title={ctx.generalData.about_settings["about_malishi_title"]}
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius deserunt
        consequuntur reiciendis nostrum voluptates, magni aut beatae
        dignissimos, consequatur eligendi sit optio itaque distinctio voluptatem
        voluptas quibusdam similique corrupti facilis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius deserunt
        consequuntur reiciendis nostrum voluptates, magni aut beatae
        dignissimos, consequatur eligendi sit optio itaque distinctio voluptatem
        voluptas quibusdam similique corrupti facilis."
        button={false}
      />
      <Section2 />
      <Supply />
      <FabricationProcess />
      <Quality />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
