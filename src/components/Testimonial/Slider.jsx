import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";
import img1 from "../../assets/testimonial/img1.webp";
import img2 from "../../assets/testimonial/img2.webp";
import img3 from "../../assets/testimonial/img3.webp";
import img4 from "../../assets/testimonial/img4.webp";
import img5 from "../../assets/testimonial/img5.webp";

const Slider = () => {
  const { t } = useTranslation(["Slider"]);

  const data = [
    {
      content: t("testimonial1_content"),
      name: "Saran S",
      designation: t("testimonial1_designation"),
      image: img1,
    },
    {
      content: t("testimonial2_content"),
      name: "Anamika Prajin",
      designation: t("testimonial2_designation"),
      image: img2,
    },
    {
      content: t("testimonial3_content"),
      name: "Shairin Konghay",
      designation: t("testimonial3_designation"),
      image: img3,
    },
    {
      content: t("testimonial4_content"),
      name: "Athira K.G.",
      designation: t("testimonial4_designation"),
      image: img4,
    },
    {
      content: t("testimonial5_content"),
      name: "Supratim Bhattacharjee",
      designation: t("testimonial5_designation"),
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
        {data.map(({ image, designation, name, content }, i) => (
          <SwiperSlide key={i}>
            <div className="card">
              <p>"{content}"</p>
              <div className="card-name-img">
                <div className="person-name">
                  <h2>{name}</h2>
                  <p>{designation}</p>
                </div>
                <div>
                  <img src={image} alt={name} loading="lazy" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
