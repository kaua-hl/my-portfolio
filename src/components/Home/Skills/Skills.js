import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <section className={styles.bgSkills}>
      <div className={`${styles.skills} cn-2`}>
        <h2 className="tn-2">Expertise</h2>
        <ul className={styles.skills__list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>STYLED COMPONENTS</li>
          <li>BOOTSTRAP</li>
          <li>JAVASCRIPT</li>
          <li>TYPESCRIPT</li>
          <li>REACT JS</li>
          <li>VUE JS</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
