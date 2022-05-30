import React from "react";
import styles from "./Menu.module.css";
import file from "../../assets/img/2.jpg";

const Menu = ({ isMenuOpen }) => {
  return (
    <nav className={`${styles.menu} ${!isMenuOpen && styles.disabled} cn-1`}>
      <ul className="tn-2">
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#knowledge">Conhecimentos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
        <li>
          <a href={file} download>
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
