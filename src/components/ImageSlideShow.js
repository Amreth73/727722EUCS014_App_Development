import React, { useState, useEffect } from "react";
import "./ImageSlideshow.css";

const ImageSlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateSlides = () => {
    const slides = document.querySelectorAll(".imageSlides");
    const dots = document.querySelectorAll(".circle");

    slides.forEach((slide, index) => {
      slide.classList.toggle("visible", index === currentIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("dot", index === currentIndex);
    });
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    updateSlides();
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`imageSlides ${index === currentIndex ? "visible" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}

      <a className="arrow" id="leftArrow" onClick={prevSlide}>
        &#10094;
      </a>
      <a className="arrow" id="rightArrow" onClick={nextSlide}>
        &#10095;
      </a>

      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`circle ${index === currentIndex ? "dot" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideShow;
