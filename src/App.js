import React from 'react';
import Header from './Components/Header/Header'; 
import CustomSlider from './Components/Slider/Slider';
import ProductSection from './Components/ProductCelect/ProductSection';
import ProductDetails from './Components/ProductCelect/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {

  const products = [
    {
      id: 1,
      image: 'https://www.lenovo.com/medias/lenovo-yoga-7i-gen-8-14-intel-pdp-hero.png?context=bWFzdGVyfC9lbWVhL2ltYWdlcy98MTgyOTc5fGltYWdlL3BuZ3wvZW1lYS9pbWFnZXMvaGJjL2gyNS8xNzMwMTAyODQzODA0Ni5wbmd8NDcwM2I5ZWY0ZDNmNTlkZGE1MGI0ZWNlNWNkMzlhOTQyNmJhMWU5MzQ4Y2JhY2RlYzllNmU1MWNkM2Y3YWI3Zg',
      title: 'Laptop Ultradelgada',
      description: 'Descubre la nueva laptop ultradelgada con rendimiento excepcional.',
      description2:'Descubre la Laptop Ultradelgada, una maravilla de la ingeniería que combina un diseño elegante con un rendimiento extraordinario. Equipada con la última generación de procesadores, esta laptop es perfecta para aquellos que buscan potencia sin comprometer la portabilidad. Su pantalla de alta resolución y batería de larga duración la convierten en la compañera ideal para profesionales y viajeros.',
      price: 999.99,
    },
    {
      id: 2,
      image: 'https://http2.mlstatic.com/D_NQ_NP_623639-MCO53450212913_012023-O.webp',
      title: 'PC de Alto Rendimiento',
      description: 'Experimenta la potencia de nuestra PC de alto rendimiento diseñada para profesionales.',
      description2:'La PC de Alto Rendimiento redefine tus expectativas. Con componentes de última tecnología y un diseño futurista, esta computadora es una potencia en sí misma. Ideal para creadores de contenido, diseñadores y jugadores que exigen lo mejor en rendimiento y velocidad. Experimenta la multitarea sin esfuerzo y el rendimiento sin límites.',
      price: 1499.99,
    },
    {
      id: 3,
      image: 'https://www.lenovo.com/medias/tab-p12-2.png?context=bWFzdGVyfHJvb3R8MjI3NDkyfGltYWdlL3BuZ3xoOGUvaDNjLzE3NTc4MjI4NzExNDU0LnBuZ3xiMjFjMjNhY2QzYTVkZmI4OTdlOWQ1Y2ZhOThiNmIxZmNlNmQ3ZDYyYjhjN2M3OTg5OGZmODAzZGVjYjZkNGFk',
      title: 'Tablet Versátil',
      description: 'Una tablet versátil para todas tus necesidades de entretenimiento y trabajo.',
      description2:'Nuestra Tablet Versátil es mucho más que un dispositivo de entretenimiento. Con un diseño delgado y ligero, esta tablet es perfecta para consumir contenido multimedia, pero también es lo suficientemente potente para tareas productivas. La pantalla táctil de alta resolución ofrece colores vibrantes, y su versatilidad la convierte en una herramienta indispensable para tu estilo de vida.',
      price: 499.99,
    },
    {
      id: 4,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_689667-MLU73415521947_122023-F.webp',
      title: 'Monitor Curvo',
      description: 'Sumérgete en la experiencia visual con nuestro monitor curvo de última generación.',
      description2:'Sumérgete en la acción con nuestro Monitor Curvo. Diseñado para envolver tu campo visual, este monitor ofrece imágenes impresionantes y un rendimiento visual excepcional. Ya sea que estés trabajando en proyectos creativos o disfrutando de tus juegos favoritos, la experiencia curva te transportará a otra dimensión.',
      price: 799.99,
    },
    {
      id: 5,
      image: 'https://dobleclicknet.com/wp-content/uploads/2022/07/teclado-gamer-3.jpg',
      title: 'Teclado Mecánico Gamer',
      description: 'Eleva tu experiencia de juego con nuestro teclado mecánico diseñado para gamers.',
      description2:'Domina el juego con nuestro Teclado Mecánico Gamer. Cada pulsación es una experiencia táctil precisa y satisfactoria. Con retroiluminación LED personalizable, teclas programables y switches mecánicos de alta calidad, este teclado está diseñado para llevar tu rendimiento gaming al siguiente nivel. ¡Prepárate para la victoria!',
      price: 129.99,
    },
    {
      id: 6,
      image: 'https://www.alkosto.com/medias/010343958005-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzg1NDV8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzBZaTlvTjJVdk1UQTNOREkzT1RrME1EQTVPVEF1YW5CbnxhMmYyM2E5NTBlNjY4ZWQ2ODkzYzAwZjY1ZjU3ZGI0MjBlZWUxNzdhYTY5MDZkN2FjNmRmMTQ1ZTE5NzU4M2M4',
      title: 'Impresora Multifuncional',
      description: 'Una impresora multifuncional para todas tus necesidades de impresión y escaneo.',
      description2:'La Impresora Multifuncional es el centro de productividad que necesitas en tu espacio de trabajo. Imprime, escanea y copia con facilidad. Con conectividad avanzada, como impresión móvil y en la nube, y funciones de ahorro de energía, esta impresora se adapta a tus necesidades diarias y es amigable con el medio ambiente.',
      price: 199.99,
    },
  ];

 

  return (
    <div>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<>
                <CustomSlider />
                <ProductSection products={products} />
              </>}
            />
            <Route
              path="/details/:productId"
              element={<ProductDetails products={products} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;