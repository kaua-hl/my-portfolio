import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={`${styles.about__grid} cn-2`}>
        <h2 className="tn-2">About Me</h2>
        <div className={`${styles.about__content}`}>
          <p className="tn-3">
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like).
          </p>
          <a href="#">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default About;