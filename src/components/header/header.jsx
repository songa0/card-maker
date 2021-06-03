import React from "react";
import styles from "./header.module.css";

const Header = (props) => (
  <header className={styles.header}>
    <img src="images/logo.png" />
    <div>Business Card Maker</div>
  </header>
);

export default Header;
