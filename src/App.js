import React, { useState } from "react";
import Header from "./Components/Header/Header";
import CustomSlider from "./Components/Slider/Slider";
import ProductSection from "./Components/ProductCelect/ProductSection";
import ShoppingCart from "./Components/Shopping/ShoppingCart";
import BlogSection from "./Components/Blog/BlogSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductCelect/ProductDetails";
import SingleBlogPost from "./Components/Blog/SingleBlogPost";
import ContactForm from "./Components/Contacto/ContactForm";
import RegistrationForm from "./Components/Registro/RegistrationForm";
import AboutUs from "./Components/About/AboutUs";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...products.find((p) => p.id === productId), quantity: 1 },
      ]);
    }
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const products = [
    {
      id: 1,
      image:
        "https://www.lenovo.com/medias/lenovo-yoga-7i-gen-8-14-intel-pdp-hero.png?context=bWFzdGVyfC9lbWVhL2ltYWdlcy98MTgyOTc5fGltYWdlL3BuZ3wvZW1lYS9pbWFnZXMvaGJjL2gyNS8xNzMwMTAyODQzODA0Ni5wbmd8NDcwM2I5ZWY0ZDNmNTlkZGE1MGI0ZWNlNWNkMzlhOTQyNmJhMWU5MzQ4Y2JhY2RlYzllNmU1MWNkM2Y3YWI3Zg",
      title: "Laptop Ultradelgada",
      description:
        "Descubre la nueva laptop ultradelgada con rendimiento excepcional.",
      description2:
        "Descubre la Laptop Ultradelgada, una maravilla de la ingeniería que combina un diseño elegante con un rendimiento extraordinario. Equipada con la última generación de procesadores, esta laptop es perfecta para aquellos que buscan potencia sin comprometer la portabilidad. Su pantalla de alta resolución y batería de larga duración la convierten en la compañera ideal para profesionales y viajeros.",
      price: 999.99,
    },
    {
      id: 2,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_623639-MCO53450212913_012023-O.webp",
      title: "PC de Alto Rendimiento",
      description:
        "Experimenta la potencia de nuestra PC de alto rendimiento diseñada para profesionales.",
      description2:
        "La PC de Alto Rendimiento redefine tus expectativas. Con componentes de última tecnología y un diseño futurista, esta computadora es una potencia en sí misma. Ideal para creadores de contenido, diseñadores y jugadores que exigen lo mejor en rendimiento y velocidad. Experimenta la multitarea sin esfuerzo y el rendimiento sin límites.",
      price: 1499.99,
    },
    {
      id: 3,
      image:
        "https://www.lenovo.com/medias/tab-p12-2.png?context=bWFzdGVyfHJvb3R8MjI3NDkyfGltYWdlL3BuZ3xoOGUvaDNjLzE3NTc4MjI4NzExNDU0LnBuZ3xiMjFjMjNhY2QzYTVkZmI4OTdlOWQ1Y2ZhOThiNmIxZmNlNmQ3ZDYyYjhjN2M3OTg5OGZmODAzZGVjYjZkNGFk",
      title: "Tablet Versátil",
      description:
        "Una tablet versátil para todas tus necesidades de entretenimiento y trabajo.",
      description2:
        "Nuestra Tablet Versátil es mucho más que un dispositivo de entretenimiento. Con un diseño delgado y ligero, esta tablet es perfecta para consumir contenido multimedia, pero también es lo suficientemente potente para tareas productivas. La pantalla táctil de alta resolución ofrece colores vibrantes, y su versatilidad la convierte en una herramienta indispensable para tu estilo de vida.",
      price: 499.99,
    },
    {
      id: 4,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_689667-MLU73415521947_122023-F.webp",
      title: "Monitor Curvo",
      description:
        "Sumérgete en la experiencia visual con nuestro monitor curvo de última generación.",
      description2:
        "Sumérgete en la acción con nuestro Monitor Curvo. Diseñado para envolver tu campo visual, este monitor ofrece imágenes impresionantes y un rendimiento visual excepcional. Ya sea que estés trabajando en proyectos creativos o disfrutando de tus juegos favoritos, la experiencia curva te transportará a otra dimensión.",
      price: 799.99,
    },
    {
      id: 5,
      image:
        "https://dobleclicknet.com/wp-content/uploads/2022/07/teclado-gamer-3.jpg",
      title: "Teclado Mecánico Gamer",
      description:
        "Eleva tu experiencia de juego con nuestro teclado mecánico diseñado para gamers.",
      description2:
        "Domina el juego con nuestro Teclado Mecánico Gamer. Cada pulsación es una experiencia táctil precisa y satisfactoria. Con retroiluminación LED personalizable, teclas programables y switches mecánicos de alta calidad, este teclado está diseñado para llevar tu rendimiento gaming al siguiente nivel. ¡Prepárate para la victoria!",
      price: 129.99,
    },
    {
      id: 6,
      image:
        "https://www.alkosto.com/medias/010343958005-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMzg1NDV8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzBZaTlvTjJVdk1UQTNOREkzT1RrME1EQTVPVEF1YW5CbnxhMmYyM2E5NTBlNjY4ZWQ2ODkzYzAwZjY1ZjU3ZGI0MjBlZWUxNzdhYTY5MDZkN2FjNmRmMTQ1ZTE5NzU4M2M4",
      title: "Impresora Multifuncional",
      description:
        "Una impresora multifuncional para todas tus necesidades de impresión y escaneo.",
      description2:
        "La Impresora Multifuncional es el centro de productividad que necesitas en tu espacio de trabajo. Imprime, escanea y copia con facilidad. Con conectividad avanzada, como impresión móvil y en la nube, y funciones de ahorro de energía, esta impresora se adapta a tus necesidades diarias y es amigable con el medio ambiente.",
      price: 199.99,
    },
  ];

  const blogPosts = [
    {
      title: "Las Últimas Tendencias en Tecnología",
      content: `
        Descubre el fascinante mundo de la tecnología moderna a través de nuestro blog. 
        En los últimos diez años, hemos sido testigos de un extraordinario avance, desde la inteligencia artificial hasta la realidad virtual, abarcando la automatización y la robótica. 
        Exploraremos cómo estas innovaciones están dando forma al mundo que nos rodea y cómo pueden impactar nuestras vidas en el futuro cercano. ¿Estás listo para sumergirte en el futuro tecnológico?
      `,
      date: "15 de Octubre de 2023",
      imageSrc:
        "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/11/tecnologia-nuevas-tendencias-2876787.jpg?tf=3840x",
    },
    {
      title: "Lo Más Vendido en Computadoras en 2023",
      content: `
        Adéntrate en el emocionante mundo de la tecnología del mañana mientras exploramos las joyas tecnológicas más destacadas de 2023. 
        Desde las laptops ultradelgadas hasta los poderosos PC de alto rendimiento, analizaremos los productos más vendidos y las razones detrás de su popularidad. 
        ¿Cuáles son las tendencias actuales en el mercado de computadoras? Acompáñanos en este viaje para descubrirlo.
      `,
      date: "15 de Diciembre de 2023",
      imageSrc:
        "https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/LJYRBB2SPZD3PDDS3KXK4KTIFY.jpg",
    },
    {
      title: "Explorando la Ciberseguridad del Futuro",
      content: `
        Sumérgete en el apasionante mundo de la ciberseguridad y descubre las últimas innovaciones que protegerán tu información en la era digital. 
        Desde algoritmos avanzados hasta sistemas de defensa cibernética, este blog te guiará a través de las tendencias más importantes. 
        ¿Estás preparado para fortalecer tu seguridad en línea y entender los desafíos que enfrentaremos en el futuro digital?
      `,
      date: "20 de Diciembre de 2023",
      imageSrc:
        "https://blog.lacnic.net/wp-content/uploads/2020/07/ciberseguridad-julio-2020-300x146.png",
    },
    {
      title: "El Impacto de la Inteligencia Artificial en la Vida Cotidiana",
      content: `
        Descubre cómo la inteligencia artificial está transformando la forma en que vivimos y trabajamos. 
        Desde asistentes virtuales hasta sistemas de recomendación, exploraremos las aplicaciones cotidianas que hacen que la IA sea tan fascinante. 
        ¿Cómo afectará esto a nuestras vidas en el futuro inmediato? Acompáñanos en este viaje hacia la revolución de la inteligencia artificial.
      `,
      date: "10 de Febrero de 2023",
      imageSrc:
        "https://conecta.tec.mx/sites/default/files/styles/header_full/public/2020-10/aplicaciones-inteligencia-artificial_0.jpg?itok=dnoSy1uR",
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
              element={
                <>
                  <CustomSlider />
                  <ProductSection
                    products={products}
                    onAddToCart={handleAddToCart}
                  />
                </>
              }
            />
            <Route
              path="/details/:productId"
              element={<ProductDetails products={products} />}
            />
            <Route
              path="/cart"
              element={
                <ShoppingCart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  onQuantityChange={handleQuantityChange}
                  onRemoveItem={handleRemoveItem}
                />
              }
            />

            <Route path="/blog" element={<BlogSection />} />
            <Route path="/contacto" element={<ContactForm />} />
            <Route path="/registro" element={<RegistrationForm />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/blog/:postId"
              element={<SingleBlogPost blogPosts={blogPosts} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
