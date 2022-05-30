import React, { useState } from "react";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import Menu from "../Menu/Menu";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`${styles.bgHeader} ${!menuOpen && styles.disabled}`}>
      <div className={`${styles.header} cn-1`}>
        <ButtonMenu openMenu={handleChange} isMenuOpen={menuOpen} />
        <Menu isMenuOpen={menuOpen} />
      </div>
    </header>
  );
};

export default Header;
