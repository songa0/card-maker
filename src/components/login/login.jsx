import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";
import { signInWithGoogle, auth } from "../../service/firebase";

const Login = ({ authService }) => {
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(({ user }) => {
        goToMaker(user.uid);
      });
  };

  const onLogout = () => {
    authService //
      .logout()
      .then();
  };

  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "./maker",
      state: { id: userId },
    });
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
