import React from "react";
import styles from "./Projects.module.css";
import ImageProject1 from "../../../assets/img/1.jpg";
import ImageProject2 from "../../../assets/img/2.jpg";
import ImageProject3 from "../../../assets/img/3.jpg";

const Projects = () => {
  return (
    <section data-scroll-section className={styles.bgProjects} id="projects">
      <div className={`${styles.projects} cn-1`}>
        <h2 data-scroll data-scroll-offset="400" className="tn-2">
          Projects
        </h2>
        <div className={styles.projects__list}>
          <div
            data-scroll
            data-scroll-delay="0.4"
            data-scroll-speed="4"
            className={styles.project__card}
          >
            <img src={ImageProject1} />
            <div className={styles.project_content}>
              <h3 className="tn-3">Lorem ipsum</h3>
              <p className="tn-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-delay="0.4"
            data-scroll-speed="6"
            className={styles.project__card}
          >
            <img src={ImageProject2} />
            <div className={styles.project_content}>
              <h3 className="tn-3">Lorem ipsum</h3>
              <p className="tn-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p>
            </div>
          </div>
          <div
            data-scroll
            data-scroll-delay="0.4"
            data-scroll-speed="6"
            className={styles.project__card}
          >
            <img src={ImageProject3} />
            <div className={styles.project_content}>
              <h3 className="tn-3">Lorem ipsum</h3>
              <p className="tn-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
