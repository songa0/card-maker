import React from "react";
import styles from "./button.module.css";

const Button = ({ name, callback }) => {
  return (
    <button className={styles.button} onClick={callback}>
      {name}
    </button>
  );
};

export default Button;
