import React from "react";
import styles from "./Hero.module.css";
import TitleEffect from "../TitleEffect/TitleEffect";

const Hero = () => {
  return (
    <section className={`${styles.hero}`}>
      <TitleEffect />
    </section>
  );
};

export default Hero;
