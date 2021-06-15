import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
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

  const card = [
    {
      name: "Ellie",
      company: "Samsung",
      color: "dark",
      job: "software engineer",
      email: "dream.coder.ellie@gmail.com",
      comment: "don't forget to code your dream",
    },
    {
      name: "Bob",
      company: "Samsung",
      color: "dark",
      job: "software engineer",
      email: "dream.coder.ellie@gmail.com",
      comment: "don't forget to code your dream",
    },
    {
      name: "Chris",
      company: "Samsung",
      color: "dark",
      job: "software engineer",
      email: "dream.coder.ellie@gmail.com",
      comment: "don't forget to code your dream",
    },
  ];
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.card}>
        <Editor userInfo={card} />
        <Preview userInfo={card} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
