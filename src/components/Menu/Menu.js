import React from "react";
import styles from "./Menu.module.css";
import file from "../../assets/img/2.jpg";

const Menu = ({ isMenuOpen, closeMenu }) => {
  return (
    <nav className={`${styles.menu} ${!isMenuOpen && styles.disabled} cn-1`}>
      <ul className="tn-2">
        <li onClick={closeMenu}>
          <a href="#about" data-scroll-to>
            Sobre
          </a>
        </li>
        <li onClick={closeMenu}>
          <a href="#projects" data-scroll-to>
            Projetos
          </a>
        </li>
        <li onClick={closeMenu}>
          <a href="#knowledge" data-scroll-to>
            Conhecimentos
          </a>
        </li>
        <li onClick={closeMenu}>
          <a href="#contact" data-scroll-to>
            Contato
          </a>
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
