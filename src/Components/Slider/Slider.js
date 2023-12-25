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
        <button className="details-button" onClick={onDetailsClick}>{buttonText}</button>
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
            onDetailsClick={() => handleDetailsClick("¡Bienvenido a nuestra Guía de Regalos Navideños, donde la magia de la temporada se encuentra con las mejores ofertas! Sumérgete en un mundo festivo lleno de alegría y descubre regalos perfectos para tus seres queridos. Aquí encontrarás una cuidada selección de productos que harán que esta Navidad sea inolvidable. Desde elegantes adornos hasta tecnología de última generación, nuestra guía tiene todo lo que necesitas para sorprender y deleitar a tus seres queridos.")}
            
          />
          <Slide
            image={producto2}
            buttonText="Conoce mas"
            onDetailsClick={() => handleDetailsClick("¡Descubre un mundo de posibilidades visuales con nuestras increíbles ofertas en monitores! La imagen presenta una gama impresionante de pantallas, desde modelos compactos hasta pantallas expansivas, diseñadas para satisfacer todas tus necesidades.En el centro de la composición, un monitor curvo de última generación te sumerge en una experiencia visual inmersiva. A su alrededor, monitores de distintos tamaños ofrecen opciones para cada rincón de tu vida digital. Desde monitores ultrafinos que ahorran espacio hasta pantallas panorámicas perfectas para juegos y trabajo multitarea.")}
          />
          <Slide
            image={producto3}
            buttonText="Conoce mas"
            onDetailsClick={() => handleDetailsClick("¡Descubre el futuro de la tecnología con nuestra increíble oferta en Tablets Táctiles! Sumérgete en una experiencia digital sin límites con nuestra tablet de última generación. Su pantalla táctil de alta resolución ofrece colores vibrantes y detalles nítidos.")}
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