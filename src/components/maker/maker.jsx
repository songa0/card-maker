import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput }) => {
  const history = useHistory();
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Ellie",
      company: "Samsung",
      theme: "dark",
      job: "software engineer",
      email: "dream.coder.ellie@gmail.com",
      comment: "don't forget to code your dream",
      fileURL: "",
      fileName: "",
    },
    2: {
      id: "2",
      name: "Bob",
      company: "Samsung",
      theme: "light",
      job: "software engineer",
      email: "dream.coder.ellie@gmail.com",
      comment: "don't forget to code your dream",
      fileURL: "",
      fileName: "",
    },
    3: {
      id: "3",
      name: "Chris",
      company: "Samsung",
      theme: "colorful",
      job: "software engineer",
      email: "dream.coder.ellie@gmail.com",
      comment: "don't forget to code your dream",
      fileURL: "",
      fileName: "",
    },
  });

  //const [imgUrl, setImgUrl] = useState(null);

  const addCardFunc = (card) => {
    const updatedCard = { ...cards, [card.id]: card };
    setCards(updatedCard);
  };
  const onLogout = () => {
    authService //
      .logout();
  };

  const deleteCardFunc = (card) => {
    const updatedCard = { ...cards };
    delete updatedCard[card.id];
    setCards(updatedCard);
  };

  // const updateImgUrl = (key, imgUrl) => {
  //   const updatedCard = { ...cards[key] };
  //   updatedCard.imgUrl = imgUrl;
  //   addAndUdpateCardFunc(updatedCard);
  // };
  const addAndUdpateCardFunc = (card) => {
    //그냥 cards로 쓰면 오래된 걸수도 있음. 현재 상태의 cards를 받아와서 수정
    setCards((cards) => {
      const updatedCard = { ...cards };
      updatedCard[card.id] = card;
      return updatedCard;
    });
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
          addCardFunc={addAndUdpateCardFunc}
          deleteCardFunc={deleteCardFunc}
          updateCardFunc={addAndUdpateCardFunc}
          FileInput={FileInput}
          // updateImgUrl={updateImgUrl}
        />
        <Preview userInfo={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
