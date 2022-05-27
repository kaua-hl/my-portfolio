import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__content}>
        <p>Kauã</p>
        <p>Hortiz</p>
      </div>
    </div>
  );
};

export default Loading;
