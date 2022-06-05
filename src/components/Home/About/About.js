import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <article data-scroll-section className={styles.about} id="about">
      <div className={`${styles.about__grid} cn-2`}>
        <h2 className="tn-3">About Me</h2>
        <div className={`${styles.about__content}`}>
          <p className="tn-4">
            Olá, meu nome é Kauã! Trabalho há dois anos desenvolvendo projetos
            digitais utilizando HTML, CSS, JavaScript, entre outras ferramentas
            como: React, Vue, TypeScript. Atualmente estou dedicando meus
            estudos ao DDD, Solid e Design, espero que goste do meu portfólio,
            entre em contato comigo caso queira conversar.
          </p>
          <a href="#contact" data-scroll-to>
            Contact
          </a>
        </div>
      </div>
    </article>
  );
};

export default About;
