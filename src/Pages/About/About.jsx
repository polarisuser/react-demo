import React from "react";
import { IconName } from "react-icons/io5";
import {
  IoCutSharp,
  IoDiamondOutline,
  IoHandRightOutline,
  IoStarOutline,
  IoFootstepsOutline,
  IoFlowerOutline,
} from "react-icons/io5";
import Porfolio1 from "../../images/png1.jpg";
import Porfolio2 from "../../images/nehty.jpg";
import Porfolio3 from "../../images/педикюр.jpg";


import "./about.scss";


function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <h1>Добро пожаловать!</h1>
          <p>Салон красоты "Я Уникальная"</p>
        </div>

        <div className="about__skills">
          <h3>Наши услуги</h3>
          <ul>
            <li>
              <IoCutSharp />
              Женская стрижка
            </li>
            <li>
              <IoDiamondOutline />
              Визажист
            </li>
            <li>
              <IoStarOutline />
              Ламинирование
            </li>
            <li>
              <IoHandRightOutline />
              Маникюр
            </li>
            <li>
              <IoFootstepsOutline />
              Педикюр
            </li>
            <li>
              <IoFlowerOutline />
              Шугаринг
            </li>
          </ul>
        </div>

        <div className="about__portfolio">
          <h3>Наши работы</h3>
          <ul>
            <li>
              <img src={Porfolio1} alt="" />
              <h4>Макияж</h4>
            </li>
            <li>
              <img src={Porfolio2} alt="" />
              <h4>Маникюр</h4>
            </li>
            <li>
              <img src={Porfolio3} alt="" />
              <h4>Педикюр</h4>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
