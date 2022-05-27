import React, { useEffect, useRef } from "react";
import styles from "./TitleEffect.module.css";

const TitleEffect = () => {
  return (
    <div className={styles.textContainer}>
      <div className={styles.textEffect}>
        <h1 className={`${styles.textEffect__text} tn-1`}>
          Front end Developer -
        </h1>
        <div className={`${styles.textEffect__text} tn-1`}>
          Front end Developer -
        </div>
      </div>
      <div className={styles.textEffect}>
        <div className={`${styles.textEffect__text} tn-1`}>
          Front end Developer -
        </div>
        <div className={`${styles.textEffect__text} tn-1`}>
          Front end Developer -
        </div>
        <div className={`${styles.textEffect__text} tn-1`}>
          Front end Developer -
        </div>
      </div>
    </div>
  );
};

export default TitleEffect;
