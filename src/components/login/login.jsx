import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import LoginMethod from "../login__method/login__method";
import styles from "./login.module.css";

const Login = (props) => {
  return (
    <div className={styles.login__popup}>
      <Header />
      <LoginMethod handleClick={props.handleClick} />
      <Footer />
    </div>
  );
};

export default Login;
