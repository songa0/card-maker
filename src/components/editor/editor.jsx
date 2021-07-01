import React from "react";
import CardAddForm from "../card__add__form/card_add_form";
import CardEditForm from "../card__edit__form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({
  userInfo,
  addCardFunc,
  deleteCardFunc,
  updateCardFunc,
  FileInput,
}) => {
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
        <CardAddForm addCardFunc={addCardFunc} FileInput={FileInput} />
      </ul>
    </section>
  );
};

export default Editor;
