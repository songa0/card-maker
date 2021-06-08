import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header
      className={
        props.display === "popup" ? styles.header : styles.main__header
      }
    >
      <img src="images/logo.png" />
      {props.display == "popup" ? (
        ""
      ) : (
        <button className={styles.logout} onClick={props.handleLogoutClick}>
          Logout
        </button>
      )}
      <div>Business Card Maker</div>
    </header>
  );
};

export default Header;
