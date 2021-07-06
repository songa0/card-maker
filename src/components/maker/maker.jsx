import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
//데이터 변경이 빈번한 컴포넌트에서는 memo 사용이 의미가 없다. 오히려 메모리 낭비
const Maker = ({ authService, FileInput, dbService }) => {
  const history = useHistory();
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(
    history.location?.state && history.location.state.id
  );

  //maker 가 변경되면 onlogout이 계속 만들어짐. -> useCallback으로 바꿔줌 -> authService가 변경되어도 예전 authService를 사용 -> authService 변경되면 다시 만들도록 처리
  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]); //dependency 파악!

  const deleteCardFunc = (card) => {
    const updatedCard = { ...cards };
    delete updatedCard[card.id];
    setCards(updatedCard);

    dbService.removeData(userId, card);
  };

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
      } else {
        history.push("/");
      }
    });
  }, [authService, history]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = dbService.readData(userId, (data) => {
      setCards(data);
    });
    return () => stopSync(); //unmount 되었을 때 자동으로 호출됨
  }, [userId, dbService]);
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
