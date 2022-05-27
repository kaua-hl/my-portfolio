import React from "react";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className="tn-2">
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Conhecimentos</li>
        <li>Contato</li>
        <li>Download CV</li>
      </ul>
    </nav>
  );
};

export default Menu;
