import { useState } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; 
import producto1 from '../../assets/Producto1.jpg'
import producto2 from '../../assets/Producto2.jpg'
import producto3 from '../../assets/Producto3.jpg'

const Slide = ({ image, title, description, buttonText,onDetailsClick }) => (
    <div className="slider-item">
      <img src={image} alt={title} />
      <div className="caption">
        <h3>{title}</h3>
        <p>{description}</p>
        <button onClick={onDetailsClick}>{buttonText}</button>
      </div>
    </div>
  );
  
  const CustomSlider = () => {
    const [currentProductDescription, setCurrentProductDescription] = useState('');
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    const handleDetailsClick = (description) => {
      setCurrentProductDescription(description);
    };
  
    return (
      <div>
        <Slider {...settings}>
          <Slide
            image={producto1}
            buttonText="Ver detalles"
            onDetailsClick={() => handleDetailsClick("Laptop Ultradelgada: Descubre la nueva laptop ultradelgada con rendimiento excepcional.")}
          />
          <Slide
            image={producto2}
            buttonText="Ver detalles"
            onDetailsClick={() => handleDetailsClick("PC de Alto Rendimiento: Experimenta la potencia de nuestra PC de alto rendimiento diseñada para profesionales.")}
          />
          <Slide
            image={producto3}
            buttonText="Ver detalles"
            onDetailsClick={() => handleDetailsClick("Tablet Versátil: Descubre la versatilidad de nuestra tablet con funciones avanzadas para el trabajo y el entretenimiento.")}
          />
        </Slider>
  
        <div className="product-description">
          {currentProductDescription && (
            <p>{currentProductDescription}</p>
          )}
        </div>
      </div>
    );
  };
  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow next" onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  };
  
  export default CustomSlider;