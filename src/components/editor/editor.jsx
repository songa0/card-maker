import React from "react";
import CardAddForm from "../card__add__form/card_add_form";
import CardEditForm from "../card__edit__form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ userInfo, addCardFunc }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.form}>
        {userInfo.map((user) => (
          <li key={user.id}>
            <CardEditForm userInfo={user} />
          </li>
        ))}
        <CardAddForm addCardFunc={addCardFunc} />
      </ul>
    </section>
  );
};

export default Editor;
