import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <article data-scroll-section className={styles.bgSkills} id="knowledge">
      <div className={`${styles.skills} cn-2`}>
        <h2 className="tn-3">Expertise</h2>
        <ul className={styles.skills__list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>SCSS</li>
          <li>STYLED COMPONENTS</li>
          <li>JAVASCRIPT</li>
          <li>TYPESCRIPT</li>
          <li>REACT JS</li>
          <li>VUE JS</li>
        </ul>
      </div>
    </article>
  );
};

export default Skills;
