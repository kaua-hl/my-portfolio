import React from "react";
import styles from "./Title.module.css";

const Title = () => {
  return (
    <div className={`${styles.wrapper} cn-1`}>
      <h1 className="tn-1">
        <span data-scroll data-scroll-speed="3" data-scroll-position="top">
          Front End
        </span>
        <span data-scroll data-scroll-speed="2" data-scroll-position="top">
          Developer
        </span>
      </h1>
    </div>
  );
};

export default Title;
