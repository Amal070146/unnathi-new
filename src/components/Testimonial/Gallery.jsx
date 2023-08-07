import React, { useEffect } from "react";
import "./Testimonial.css";
import img1 from "../../assets/gallery/img1.png";
import img2 from "../../assets/gallery/img2.png";
import img3 from "../../assets/gallery/img3.png";
import img4 from "../../assets/gallery/img4.png";
import img5 from "../../assets/gallery/img5.png";

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <div className="gallery" id="gallery">
        <img className="gallery1" src={img1} alt="" />
        <img className="gallery2" src={img2} alt="" />
        <img className="gallery3" src={img3} alt="" />
        <img className="gallery4" src={img4} alt="" />
        <img className="gallery5" src={img5} alt="" />
        <img className="gallery6" src={img1} alt="" />
        <img className="gallery7" src={img2} alt="" />
        <img className="gallery8" src={img3} alt="" />
        <img className="gallery9" src={img4} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
