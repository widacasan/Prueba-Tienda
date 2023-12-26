import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">Sobre Nosotros</h2>
      <div className="company-info">
        <div className="company-description">
          <p>
            ¡Bienvenido a Tienda de Computadores, tu destino número uno para
            productos tecnológicos de vanguardia!
          </p>
          <p>
            En Tienda de Computadores, nos apasiona proporcionar soluciones
            tecnológicas innovadoras que transformen la manera en que vives,
            trabajas y te diviertes. Desde laptops ultradelgadas hasta potentes
            PC de alto rendimiento, ofrecemos una amplia gama de productos para
            satisfacer todas tus necesidades.
          </p>
        </div>
        <div className="company-image">
          <img
            src="https://www.bizneo.com/blog/wp-content/uploads/2019/10/caracteristicas-del-trabajo-en-equipo.webp"
            alt="Logo de Tienda de computadoras"
            className="company-logo"
          />
        </div>
      </div>

      <div className="team-section">
        <h3 className="team-heading">Nuestro Equipo</h3>
        <div className="team-member">
          <div className="team-member-image">
            <img
              src="https://images.ecestaticos.com/p8rCF-8Q6FN_J2Sn684E2LZleto=/0x0:2272x1575/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fefb%2Fc44%2F3b6%2Fefbc443b6d811bdc4a6913bf7c5da556.jpg"
              alt="Miembro del Equipo 1"
              className="member-avatar"
            />
          </div>
          <div className="team-member-info">
            <h4>John Doe</h4>
            <p>CEO y Fundador</p>
            <p>
              John es un apasionado de la tecnología y ha liderado Tienda de
              Computadores desde sus humildes comienzos. Su visión es llevar la
              última tecnología a hogares y empresas de todo el mundo.
            </p>
          </div>
        </div>

        <div className="team-member">
          <div className="team-member-image">
            <img
              src="https://colombia.unir.net/wp-content/uploads/sites/4/2021/11/mature-businesswoman-sitting-on-her-desk-picture-id1219899274-1.jpg"
              alt="Miembro del Equipo 2"
              className="member-avatar"
            />
          </div>
          <div className="team-member-info">
            <h4>Jane Smith</h4>
            <p>Directora de Tecnología</p>
            <p>
              Jane lidera nuestro equipo de desarrollo de productos y garantiza
              que cada dispositivo que vendemos cumpla con los estándares más
              altos de calidad y rendimiento.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h3>Redes Sociales</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Legal</h3>
          <ul>
            <li>
              <a href="/politica-de-privacidad">Política de Privacidad</a>
            </li>
            <li>
              <a href="/terminos-de-servicio">Términos de Servicio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
