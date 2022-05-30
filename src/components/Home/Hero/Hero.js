import React from "react";
import styles from "./Hero.module.css";
import Title from "../Title/Title";

const Hero = () => {
  return (
    <section data-scroll-section className={`${styles.hero}`}>
      <Title />
    </section>
  );
};

export default Hero;
