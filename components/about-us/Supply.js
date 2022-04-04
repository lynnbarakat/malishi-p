import { Fragment, useState } from "react";

import { Navigation, Pagination, FreeMode, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

const Supply = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [thumbsSwiperM, setThumbsSwiperM] = useState(null);

  return (
    <Fragment>
      <div className="container-fluid position-relative d-lg-block d-none">
        <div className="bg-about-supply position-absolute top-0 start-0 w-100 mx-0"></div>
        <div className="container position-relative pt-5 mt-5">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column">
              <div className="flex-grow-1">
                <h3 className="bold-font">APPROVISIONNEMENT</h3>
                <p className="regular-font pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam reiciendis in non quaerat minus tenetur magnam sed
                  consequatur nobis pariatur officia, provident iste alias
                  architecto eius repellat exercitationem doloribus culpa. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  reiciendis in non quaerat minus tenetur magnam sed consequatur
                  nobis pariatur officia, provident iste alias architecto eius
                  repellat exercitationem doloribus culpa. amet consectetur
                  adipisicing elit.
                </p>
              </div>
              <div>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={15}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="thumbs-about-supply mt-5"
                >
                  <SwiperSlide className="ratio ratio-1x1">
                    <img
                      src="https://via.placeholder.com/500x100"
                      alt=""
                      width="100px"
                      className="cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="ratio ratio-1x1">
                    <img
                      src="https://via.placeholder.com/500x200"
                      alt=""
                      width="100px"
                      className="cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="ratio ratio-1x1">
                    <img
                      src="https://via.placeholder.com/500x300"
                      alt=""
                      width="100px"
                      className="cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="ratio ratio-1x1">
                    <img
                      src="https://via.placeholder.com/500x400"
                      alt=""
                      width="100px"
                      className="cover"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="ratio ratio-1x1">
                    <img
                      src="https://via.placeholder.com/500x500"
                      alt=""
                      width="100px"
                      className="cover"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Pagination, FreeMode, Navigation, Thumbs]}
                pagination={{
                  clickable: true,
                  el: ".custom-pagination-about-supply",
                }}
              >
                <SwiperSlide className="ratio ratio-1x1">
                  <img
                    src="https://via.placeholder.com/500x100"
                    alt=""
                    className="cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="ratio ratio-1x1">
                  <img
                    src="https://via.placeholder.com/500x200"
                    alt=""
                    className="cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="ratio ratio-1x1">
                  <img
                    src="https://via.placeholder.com/500x300"
                    alt=""
                    className="cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="ratio ratio-1x1">
                  <img
                    src="https://via.placeholder.com/500x400"
                    alt=""
                    className="cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="ratio ratio-1x1">
                  <img
                    src="https://via.placeholder.com/500x500"
                    alt=""
                    className="cover"
                  />
                </SwiperSlide>
              </Swiper>
              <div className="custom-pagination-about-supply"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative d-lg-none">
        <div className="bg-about-supply position-absolute top-0 start-0 w-100 mx-0"></div>
        <div className="container pt-5 mt-5">
          <h3 className="bold-font">APPROVISIONNEMENT</h3>
          <p className="regular-font pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            reiciendis in non quaerat minus tenetur magnam sed consequatur nobis
            pariatur officia, provident iste alias architecto eius repellat
            exercitationem doloribus culpa. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam reiciendis in non quaerat
            minus tenetur magnam sed consequatur nobis pariatur officia,
            provident iste alias architecto eius repellat exercitationem
            doloribus culpa. amet consectetur adipisicing elit.
          </p>

          <div className="col-lg-6 position-relative">
            <Swiper
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Pagination, Thumbs]}
              pagination={{
                clickable: true,
                el: ".pagination-about-supply-bottom",
              }}
            >
              <SwiperSlide className="ratio ratio-1x1">
                <img
                  src="https://via.placeholder.com/500x100"
                  alt=""
                  className="cover"
                />
              </SwiperSlide>
              <SwiperSlide className="ratio ratio-1x1">
                <img
                  src="https://via.placeholder.com/500x200"
                  alt=""
                  className="cover"
                />
              </SwiperSlide>
              <SwiperSlide className="ratio ratio-1x1">
                <img
                  src="https://via.placeholder.com/500x300"
                  alt=""
                  className="cover"
                />
              </SwiperSlide>
              <SwiperSlide className="ratio ratio-1x1">
                <img
                  src="https://via.placeholder.com/500x400"
                  alt=""
                  className="cover"
                />
              </SwiperSlide>
            </Swiper>
            <div>
              <Swiper
                onSwiper={setThumbsSwiperM}
                spaceBetween={15}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Thumbs]}
                className="thumbs-about-supply mt-4"
              >
                <SwiperSlide className="ratio ratio-1x1">
                  <img
                    src="https://via.placeholder.com/500x100"
                    alt=""
                    className="cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="ratio ratio-1x1">
                  <img
                    src="https://via.placeholder.com/500x200"
                    alt=""
                    className="cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="ratio ratio-1x1">
                  <img
                    src="https://via.placeholder.com/500x300"
                    alt=""
                    className="cover"
                  />
                </SwiperSlide>
                <SwiperSlide className="ratio ratio-1x1">
                  <img
                    src="https://via.placeholder.com/500x400"
                    alt=""
                    className="cover"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div className="pagination-about-supply-bottom"></div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <p className="regular-font">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            deserunt consequuntur reiciendis nostrum voluptates, magni aut
            beatae dignissimos, consequatur eligendi sit optio itaque distinctio
            voluptatem voluptas quibusdam similique corrupti facilis. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Eius deserunt
            consequuntur reiciendis nostrum voluptates, magni aut beatae
            dignissimos, consequatur eligendi sit optio itaque distinctio
            voluptatem voluptas quibusdam similique corrupti facilis.
            <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eius deserunt consequuntur reiciendis nostrum voluptates, magni aut
            beatae dignissimos, consequatur eligendi sit optio itaque distinctio
            voluptatem voluptas quibusdam similique corrupti facilis.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Supply;
