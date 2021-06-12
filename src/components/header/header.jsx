import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img src="images/logo.png" />
      {props.loginStatus === "true" ? (
        <button className={styles.logout} onClick={props.onLogOut}>
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
