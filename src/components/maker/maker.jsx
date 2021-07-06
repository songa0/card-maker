import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService, FileInput, dbService }) => {
  const history = useHistory();
  const [cards, setCards] = useState("");
  const [userId, setUserId] = useState(history.state && history.state.id);
  //const [imgUrl, setImgUrl] = useState(null);

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

    dbService.writeData(userId, card);
  };

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);

        //console.log(user.uid);
        const rtn = dbService.readUserData(userId, cards);
        console.log(rtn);
        //read data, setCard
      } else {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.maker}>
      <div className={styles.header}>
        <Header onLogout={onLogout} />
      </div>
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
      <div className={styles.footer}>
        <Footer />
      </div>
    </section>
  );
};

export default Maker;
