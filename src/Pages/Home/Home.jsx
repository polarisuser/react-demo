import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { init } from "ityped";

import Photo from "../../images/png1.webp";

import "./home.scss";

function Home() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      strings: ["Уникальный салон красоты для женщин..."],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <section className="home">
      <div className="container home__container">
        <div className="home__left">
          <h1 className="home__title"> "Я Уникальная"</h1>
          <p className="home__subtitle">
            <span ref={animatedTextRef}></span>
          </p>
          <p>
            Лицо человека – это его стрижка, поэтому необходимо уделить особое
            внимание волосам т.к. успех стрижки зависит также от здоровья
            волос.Наши услуги:
          </p>
          <ul>
            <li>Женская стрижка и покраска</li>
            <li>Визажист</li>
            <li>Ламинирование</li>
            <li>Маникюр</li>
            <li>Педикюр</li>
            <li>Шугаринг</li>
          </ul>
          <ul className="home__links">
            <li>
              <a
                href="https://fb.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="home__icon" />
              </a>
            </li>
            <li>
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="home__icon" />
              </a>
            </li>
          </ul>
          <Link to="/contact" className="home__cta">
            Жми Сюда
          </Link>
        </div>
        <div className="home__right">
          <img src={Photo} alt="Hero Coder" />
        </div>
      </div>
    </section>
  );
}

export default Home;
