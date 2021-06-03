import React from "react";
import styles from "./login.module.css";

const Login = (props) => (
  <section className={styles.loginSection}>
    <div className={styles.loginText}>Login</div>
    <div className={styles.loginWay}>Google</div>
    <div className={styles.loginWay}>Github</div>
  </section>
);

export default Login;
