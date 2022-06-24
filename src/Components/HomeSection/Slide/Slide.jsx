import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

/// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
import { sliderData } from "../../../api/dummyData";
import "./slide.scss";
export default function Slide(props) {
  return (
    <section>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {sliderData.map(({ images }, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${images})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></SwiperSlide>
          );
        })}
      </Swiper>
      <div className="slide-form">
        <div className="container">
          <h2>Enjoy Your Holiday</h2>
          <span className="mb-3 d-block">Search and Book Hotel</span>
          <form action="">
            <div className="row">
              <div className="col-lg-12 mb-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search City"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Check In"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="form-group">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Check Out"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Adult(s)"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mb-3">
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Children(0 - 17)"
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rooms"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <div className="form-group">
                  <button type="submit" className="submit">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
