import React from "react";
import { motion } from "framer-motion";
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
  const h3Variants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const workVariants = {
    visible: (idx) => ({
      opacity: 1,
      transition: {
        delay: idx * 0.6,
      },
    }),
    hidden: {opacity: 0,},
  }

  const works = [
    {
      title: "Макияж",
      imgUrl: Porfolio1,
    },
    {
      title: "Маникюр",
      imgUrl: Porfolio2,
    },
    {
      title: "Педикюр",
      imgUrl: Porfolio3,
    },
  ];


  return (
    <section className="about">
      <div className="container">
        <div className="about__intro">
          <motion.h1
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
            }}
          >
            Добро пожаловать!
          </motion.h1>
          <p>Салон красоты "Я Уникальная"</p>
        </div>

        <div className="about__skills">
          <motion.h3
            variants={h3Variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              duration: 1,
            }}
          >
            Наши услуги
          </motion.h3>
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
          <h3>Последние работы</h3>
          <ul>
              {works.map((work,idx)=> (
                    <motion.li
                      variants={workVariants}
                      initial={"hidden"}
                      animate={"visible"}
                      key={idx}
                      custom={idx}
                    >
                      <img src={work.imgUrl} alt="" />
                      <h4>{work.title}</h4>
                    </motion.li>
                ))}
           
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
