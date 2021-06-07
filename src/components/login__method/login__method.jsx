import React from "react";
import styles from "./login__method.module.css";

const Login = (props) => {
  return (
    <section className={styles.loginSection}>
      <div className={styles.loginText}>Login</div>
      <button className={styles.loginWay} onClick={props.handleClick}>
        Google
      </button>
      <button className={styles.loginWay}>Github</button>
    </section>
  );
};

export default Login;
