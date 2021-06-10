import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then();
  };

  const onLogout = () => {
    authService.logOut();
  };
  return (
    <section className={styles.login__section}>
      <Header onLogOut={onLogout} />
      <section>
        <div className={styles.login__text}>Login</div>
        <ul className={styles.btn__list}>
          <li>
            <button className={styles.provider} onClick={onLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.provider} onClick={onLogin}>
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
