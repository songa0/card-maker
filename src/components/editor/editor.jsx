import React from "react";
import CardAddForm from "../card__add__form/card_add_form";
import CardEditForm from "../card__edit__form/card_edit_form";
import styles from "./editor.module.css";
//데이터 변경이 빈번한 컴포넌트에서는 memo 사용이 의미가 없다. 오히려 메모리 낭비
const Editor = ({ userInfo, deleteCardFunc, updateCardFunc, FileInput }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.form}>
        {Object.keys(userInfo).map((key) => (
          <li key={key}>
            <CardEditForm
              userInfo={userInfo[key]}
              deleteCardFunc={deleteCardFunc}
              updateCardFunc={updateCardFunc}
              FileInput={FileInput}
            />
          </li>
        ))}
        <CardAddForm updateCardFunc={updateCardFunc} FileInput={FileInput} />
      </ul>
    </section>
  );
};

export default Editor;
