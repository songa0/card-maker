import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";

const Maker = (props) => {
  return (
    <section className={styles.maker__section}>
      <Header />
      <div>CARD LIST</div>
      <Footer />
    </section>
  );
};

export default Maker;
