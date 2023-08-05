import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import img1 from "../../assets/testimonial/img1.png";
import img2 from "../../assets/testimonial/img2.png";
import img3 from "../../assets/testimonial/img3.png";
import img4 from "../../assets/testimonial/img4.png";
import img5 from "../../assets/testimonial/img5.png";

const Slider = () => {
  const data = [
    {
      content:
        "Working on social projects during my internship was a powerful journey of empathy and personal growth.",
      name: "Saran S",
      designation: "MA Public Policy & Governance, TISS Hyderabad",
      image: img1,
    },
    {
      content:
        "My internship at UNNATHI was a life-changing experience that has made me a more passionate advocate for social policies.",
      name: "Anamika Prajin",
      designation: "MA Public Policy & Governance, TISS Hyderabad",
      image: img2,
    },
    {
      content:
        "It was an honour to have worked with a talented and creative team -collectively contributing towards Unnathi's mission",
      name: "Shairin Konghay",
      designation: "MA Public Policy & Governance,TISS Hyderabad",
      image: img3,
    },
    {
      content:
        "The team's boundless commitment and extraordinary efforts have left an indelible mark on me.",
      name: "Athira K.G.",
      designation: "MA Public Policy & Governance, TISS Hyderabad",
      image: img4,
    },
    {
      content:
        "My internship at UNNATHI was a life-changing experience that has made me a more passionate advocate for social policies.",
      name: "Supratim Bhattacharjee",
      designation: "MA Public Policy & Governance, TISS Hyderabad",
      image: img5,
    },
  ];
  return (
    <div className="slider">
      <Swiper
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {" "}
        {data.map(({ image, designation, name, content }, i) => (
          <SwiperSlide>
            <div class="card">
              <p>"{content}"</p>
              <div className="card-name-img">
                <div className="person-name">
                  <h2>{name}</h2>
                  <p>{designation}</p>
                </div>

                <div>
                  <img src={image} />
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
        ))}{" "}
      </Swiper>
    </div>
  );
};

export default Slider;
