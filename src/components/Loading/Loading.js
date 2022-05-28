import React from "react";
import styles from "./Loading.module.css";

const Loading = ({ loading }) => {
  return (
    <div className={`${styles.loading} ${!loading && styles.disableLoading}`}>
      <div className={styles.loading__content}>
        <p>Kauã</p>
        <p>Hortiz</p>
      </div>
    </div>
  );
};

export default Loading;
