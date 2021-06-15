import React from "react";
import Form from "../form/form";
import styles from "./editor.module.css";

const Editor = ({ userInfo }) => {
  console.log("editor", userInfo);
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.form}>
        {userInfo.map((user) => (
          <li>
            <Form userInfo={user} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Editor;
