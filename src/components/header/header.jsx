import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      <img src="images/logo.png" alt="logo" />
      {onLogout ? (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      ) : (
        ""
      )}
      <div>Business Card Maker</div>
    </header>
  );
};

export default Header;
