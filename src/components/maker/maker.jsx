import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService //
      .logout();
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div>CARD LIST</div>
      <Footer />
    </section>
  );
};

export default Maker;
