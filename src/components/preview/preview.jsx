import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";

const Preview = ({ userInfo }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.form}>
        {userInfo.map((user) => (
          <li>
            <Card userInfo={user} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Preview;
