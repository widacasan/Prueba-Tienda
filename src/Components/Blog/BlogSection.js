
import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';
import './BlogSection.css';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Las últimas tendencias en tecnología',
      content:
        'Descubre el fascinante mundo de la tecnología moderna a través de nuestro blog. En los últimos diez años, hemos sido testigos de un extraordinario avance, desde la inteligencia artificial hasta la realidad virtual, abarcando la automatización y la robótica. ',
      date: '15 de Octubre de 2023',
      imageSrc: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/11/tecnologia-nuevas-tendencias-2876787.jpg?tf=3840x',
    },
    {
        title: 'Lo mas vendido en computadores',
        content:
          'Adéntrate en el emocionante mundo de la tecnología del mañana mientras exploramos las joyas tecnológicas más destacadas de 2023. ',
        date: '15 de Diciembre de 2023',
        imageSrc: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/LJYRBB2SPZD3PDDS3KXK4KTIFY.jpg',
      },
      {
        title: 'Explorando la Ciberseguridad del Futuro',
        content: 'Sumérgete en el apasionante mundo de la ciberseguridad y descubre las últimas innovaciones que protegerán tu información en la era digital. Desde algoritmos avanzados hasta sistemas de defensa cibernética, este blog te guiará a través de las tendencias más importantes. ¿Estás preparado para fortalecer tu seguridad en línea?',
        date: '20 de Diciembre de 2023',
        imageSrc: 'https://blog.lacnic.net/wp-content/uploads/2020/07/ciberseguridad-julio-2020-300x146.png',
        },
        {
        title: 'El Impacto de la Inteligencia Artificial en la Vida Cotidiana',
        content: 'Descubre cómo la inteligencia artificial está transformando la forma en que vivimos y trabajamos. Desde asistentes virtuales hasta sistemas de recomendación, exploraremos las aplicaciones cotidianas que hacen que la IA sea tan fascinante. ¿Cómo afectará esto a nuestras vidas en el futuro inmediato? Acompáñanos en este viaje hacia la revolución de la inteligencia artificial.',
        date: '10 de Febrero de 2023',
        imageSrc: 'https://conecta.tec.mx/sites/default/files/styles/header_full/public/2020-10/aplicaciones-inteligencia-artificial_0.jpg?itok=dnoSy1uR',
        },
  ];

  return (
    <div className="blog-section">
      <h2>Blog</h2>
      {blogPosts.map((post, index) => (
        <Link key={index} to={`/blog/${index}`}>
          <BlogPost {...post} />
        </Link>
      ))}
    </div>
  );
};

export default BlogSection;
