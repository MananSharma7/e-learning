import React from "react";
import { Link } from "react-router-dom";
import { slider1, slider2, slider3 } from "./../style/images.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import logoImg from "./../style/Node.js_logo.png";
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
      <div className="ui container" style={{ margin: "50px 0" }}>
        <h1 className="head">Welcome To Learn Online!</h1>
        <h2>Courses:</h2>
        <div className="ui three cards">
          <Link class="ui card image" to="/courses">
            <img className="cardImg" alt="course-img" src={logoImg} />
          </Link>
          <Link class="ui card image" to="/courses">
            <img className="cardImg" alt="course-img" src={logoImg} />
          </Link>
          <Link class="ui card image" to="/courses">
            <img className="cardImg" alt="course-img" src={logoImg} />
          </Link>
          <Link class="ui card image" to="/courses">
            <img className="cardImg" alt="course-img" src={logoImg} />
          </Link>
        </div>
      </div>
    </div >
  );
}

export default Home;