import { useContext, Fragment } from "react";
import GeneralContext from "../../pages/general-context";
import Image from "next/dist/client/image";
import border from "../../Asssets/border-home-partners.svg";

import { Navigation, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Partners = () => {
  const ctx = useContext(GeneralContext);

  return (
    <Fragment>
      <div className="container-fluid px-0 pt-5 mt-5 d-lg-block d-none overflow-hidden">
        <div className="row">
          <h3 className="bold-font text-center pb-4 text-uppercase">
            {ctx.generalData.home_settings["partners_section_title"]}
          </h3>
        </div>
        <div className="row row-cols-7">
          <Swiper
            modules={[Autoplay, Navigation, EffectCoverflow]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: -140,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            slidesPerView={7}
            spaceBetween={30}
            slidesPerGroup={1}
            grabCursor={true}
            loop={true}
            loopFillGroupWithBlank={true}
          >
            {ctx.generalData.partners_list.map((link, index) => (
              <SwiperSlide key={index}>
                <div className="col">
                  <div className="d-flex justify-content-center align-items-center position-relative">
                    <Image src={border} alt="border" />
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <img
                        src={link.full_path_logo}
                        alt="partners"
                        className="ratio ratio-1x1 contain"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="container d-lg-none pt-5">
        <div className="row">
          <h3 className="bold-font text-center pb-3">
            {ctx.generalData.home_settings["partners_section_title"]}
          </h3>
        </div>
        <div className="row">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation={true}
            centeredSlides={true}
          >
            {ctx.generalData.partners_list.map((link, index) => (
              <SwiperSlide key={index}>
                <div className="d-flex justify-content-center align-items-center position-relative bg-home-partners">
                  {/* <Image src={border} alt="border" /> */}
                  <div className="position-absolute top-50 start-50 translate-middle">
                    <img
                      src={link.full_path_logo}
                      alt="partners"
                      className="ratio ratio-1x1 contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default Partners;
