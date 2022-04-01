import { useContext, Fragment } from "react";
import GeneralContext from "../../pages/general-context";

import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Network = () => {
  const ctx = useContext(GeneralContext);

  const regularContent = (
    <Fragment>
      <div className="col">
        <div className="border-home-network">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect={"fade"}
          >
            {ctx.generalData.home_network_list[4].full_path_images.map(
              (link, index) => (
                <SwiperSlide key={index}>
                  <div className="ratio ratio-1x1 w-100">
                    <img src={link} alt="image" />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
      <div className="col">
        <div className="text-center px-2 mb-3">
          <h3 className="bold-font text-green mb-3">
            {ctx.generalData.home_network_list[1].title}
          </h3>
          <p className="mb-0">
            {ctx.generalData.home_network_list[1].description}
          </p>
        </div>
        <div className="border-home-network">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect={"fade"}
          >
            {ctx.generalData.home_network_list[1].full_path_images.map(
              (link, index) => (
                <SwiperSlide key={index}>
                  <div className="ratio ratio-1x1 w-100">
                    <img src={link} alt="image" />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
      <div className="col">
        <div className="text-center px-2 mb-3">
          <h3 className="bold-font text-green mt-5 pt-5 mb-3">
            {ctx.generalData.home_network_list[2].title}
          </h3>
          <p className="mb-0">
            {ctx.generalData.home_network_list[2].description}
          </p>
        </div>
        <div className="border-home-network">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect={"fade"}
          >
            {ctx.generalData.home_network_list[2].full_path_images.map(
              (link, index) => (
                <SwiperSlide key={index}>
                  <div className="ratio ratio-1x1 w-100">
                    <img src={link} alt="image" />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
      <div className="col">
        <div className="text-center px-2 mb-3">
          <h3 className="bold-font text-green mb-3">
            {ctx.generalData.home_network_list[3].title}
          </h3>
          <p className="mb-0">
            {ctx.generalData.home_network_list[3].description}
          </p>
        </div>
        <div className="border-home-network">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect={"fade"}
          >
            {ctx.generalData.home_network_list[3].full_path_images.map(
              (link, index) => (
                <SwiperSlide key={index}>
                  <div className="ratio ratio-1x1 w-100">
                    <img src={link} alt="image" />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
      <div className="col">
        <div className="border-home-network">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect={"fade"}
          >
            {ctx.generalData.home_network_list[4].full_path_images.map(
              (link, index) => (
                <SwiperSlide key={index}>
                  <div className="ratio ratio-1x1 w-100">
                    <img src={link} alt="image" />
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );

  const swiperContent = (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true, el: ".custom-pagination-home-network" }}
        slidesPerView={1}
        navigation={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          <div className="text-center">
            <div className="px-4 pb-4">
              <h3 className="bold-font text-green">
                {ctx.generalData.home_network_list[1].title}
              </h3>
              <p className="mb-0 two-lines">
                {ctx.generalData.home_network_list[1].description}
              </p>
            </div>
            <div className="border-home-network">
              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect={"fade"}
              >
                {ctx.generalData.home_network_list[4].full_path_images.map(
                  (link, index) => (
                    <SwiperSlide key={index}>
                      <div className="ratio ratio-1x1 w-100">
                        <img src={link} alt="image" />
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <div className="px-4 pb-4">
              <h3 className="bold-font text-green">
                {ctx.generalData.home_network_list[2].title}
              </h3>
              <p className="mb-0 two-lines">
                {ctx.generalData.home_network_list[2].description}
              </p>
            </div>
            <div className="border-home-network">
              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect={"fade"}
              >
                {ctx.generalData.home_network_list[4].full_path_images.map(
                  (link, index) => (
                    <SwiperSlide key={index}>
                      <div className="ratio ratio-1x1 w-100">
                        <img src={link} alt="image" />
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-center">
            <div className="px-4 pb-4">
              <h3 className="bold-font text-green">
                {ctx.generalData.home_network_list[3].title}
              </h3>
              <p className="mb-0 two-lines">
                {ctx.generalData.home_network_list[3].description}
              </p>
            </div>
            <div className="border-home-network">
              <Swiper
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect={"fade"}
              >
                {ctx.generalData.home_network_list[4].full_path_images.map(
                  (link, index) => (
                    <SwiperSlide key={index}>
                      <div className="ratio ratio-1x1 w-100">
                        <img src={link} alt="image" />
                      </div>
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="custom-pagination-home-network"></div>
    </div>
  );
  return (
    <Fragment>
      <div className="container pt-5 mt-5">
        <div className="row pb-4">
          <h3 className="bold-font text-center">
            {ctx.generalData.home_settings["network_section_title"]}
          </h3>
        </div>
      </div>
      <div className="container-fluid px-0 d-none d-lg-block">
        <div className="row row-cols-5 gx-0">{regularContent}</div>
      </div>
      <div className="container d-lg-none">
        <div className="row">{swiperContent}</div>
      </div>
    </Fragment>
  );
};

export default Network;
