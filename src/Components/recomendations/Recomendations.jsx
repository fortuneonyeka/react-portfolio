import React from "react";
import "./Recomendations.css";
import RecomendationsData from "../../data/Recomendations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Recomendations = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <section id="recomendations">
      <h5>Reviews From Collegues</h5>
      <h2>Recomendations</h2>

      <Swiper
        className="container testimonials__container mySwiper"
        
        pagination={pagination}
        modules={[Pagination]}
       
       
      >
        {RecomendationsData.map((recomendation, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="collegue__image">
                <img
                  src={recomendation.img}
                  alt={recomendation.name}
                  className="collegue__profile-image"
                />
              </div>
              <h3 className="collegue__name">{recomendation.name}</h3>
              <h5 className="collegue__recomendation">
                {recomendation.recomendation}
              </h5>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Recomendations;
