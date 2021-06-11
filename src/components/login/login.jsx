import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <section className={styles.login__section}>
      <Header onLogOut={props.onLogout} />
      <section>
        <div className={styles.login__text}>Login</div>
        <ul className={styles.btn__list}>
          <li>
            <button className={styles.provider} onClick={props.onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.provider} onClick={props.onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
