import React from "react";
import { slider1, slider2, slider3 } from "./../style/images.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import "./../style/Home.css";
import "swiper/css";
import "swiper/css/effect-fade";

const Home = () => {
  return (
    <div className="container home">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        autoplay={{ delay: 3000 }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img className="bgimg" src={slider1} alt="background" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="bgimg" src={slider2} alt="background" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="bgimg" src={slider3} alt="background" />
        </SwiperSlide>
      </Swiper>
      <h1 className="head">The World's Leading Distance-Learning Provider</h1>
    </div>
  );
}

export default Home;