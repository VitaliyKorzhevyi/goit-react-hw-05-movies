import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderImages from 'images/slider';

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: 'flex',
//         alignItems: 'center',
//         background: '#5050508a',
//         height: '100px',
//         borderRadius: "6px",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: 'block', background: 'green' }}
//       onClick={onClick}
//     />
//   );
// }

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
    autoplaySpeed: 7000, // Время автоматического переключения в миллисекундах (здесь 3 секунды)
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
    <Slider ref={sliderRef} {...settings}>
      {sliderImages.map((image, index) => (
        <div key={index}>
          <img className='images-slider' src={image} alt={`Изображение ${index + 1}`} />
        </div>
      ))}
    </Slider>
          <div style={{ textAlign: 'center' }}>
          <button className="button-previous" onClick={previous}>
          <i className='bx bx-chevron-left bx-sm'></i>
          </button>
          <button className="button-next" onClick={next}>
          <i className='bx bx-chevron-right bx-sm'></i>
          </button>
        </div>
    </div>

  );
};

export default Carousel;
