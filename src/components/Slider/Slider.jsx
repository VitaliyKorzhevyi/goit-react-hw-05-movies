import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderImages from 'images/slider';

import s from '../../pages/Home/Home.module.css';

const Carousel = () => {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {sliderImages.map((image, index) => (
          <div key={index}>
            <img
              className={s.imgSlider}
              src={image}
              alt={`Изображение ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      <div style={{ textAlign: 'center' }}>
        <button className={s.btnPrevious} onClick={previous}>
          <i className="bx bx-chevron-left bx-sm"></i>
        </button>
        <button className={s.btnNext} onClick={next}>
          <i className="bx bx-chevron-right bx-sm"></i>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
