import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const history = useHistory();
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      job: "software engineer",
      email: "dream.coder.ellie@gmail.com",
      comment: "don't forget to code your dream",
    },
    {
      id: "2",
      name: "Bob",
      company: "Samsung",
      theme: "light",
      job: "software engineer",
      email: "dream.coder.ellie@gmail.com",
      comment: "don't forget to code your dream",
    },
    {
      id: "3",
      name: "Chris",
      company: "Samsung",
      theme: "colorful",
      job: "software engineer",
      email: "dream.coder.ellie@gmail.com",
      comment: "don't forget to code your dream",
    },
  ]);

  const addCardFunc = (card) => {
    const updatedCard = [...cards, card];
    setCards(updatedCard);
  };
  const onLogout = () => {
    authService //
      .logout();
  };

  const deleteCardFunc = (card) => {
    console.log(card);
    const updatedCard = cards.filter((item) => item.id !== card.id);
    setCards(updatedCard);
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
      <div className={styles.card}>
        <Editor
          userInfo={cards}
          addCardFunc={addCardFunc}
          deleteCardFunc={deleteCardFunc}
        />
        <Preview userInfo={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
