import React, { memo } from "react";
import styles from "./button.module.css";

const Button = memo(({ name, onSubmit }) => {
  return (
    <button className={styles.button} onClick={onSubmit}>
      {name}
    </button>
  );
});

export default Button;
