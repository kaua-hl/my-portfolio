import React from "react";
import styles from "./Projects.module.css";
import ImageProject1 from "../../../assets/img/1.jpg";
import ImageProject2 from "../../../assets/img/2.jpg";
import ImageProject3 from "../../../assets/img/3.jpg";

const Projects = () => {
  return (
    <section className={`${styles.projects} cn-1`}>
      <h2 className="tn-2">Projects</h2>
      <div className={styles.projects__list}>
        <div>
          <img src={ImageProject1} />
        </div>
        <div>
          <img src={ImageProject2} />
        </div>
        <div>
          <img src={ImageProject3} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
