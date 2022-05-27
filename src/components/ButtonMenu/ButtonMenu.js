import React from "react";
import styles from "./ButtonMenu.module.css";

const ButtonMenu = ({ openMenu, isMenuOpen }) => {
  return (
    <button
      className={`${styles.buttonMenu} ${isMenuOpen && styles.open}`}
      onClick={openMenu}
    >
      <span></span>
      <span></span>
    </button>
  );
};

export default ButtonMenu;
