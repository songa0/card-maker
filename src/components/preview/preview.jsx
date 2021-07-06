import React from "react";
import Card from "../card/card";
import styles from "./preview.module.css";
//데이터 변경이 빈번한 컴포넌트에서는 memo 사용이 의미가 없다. 오히려 메모리 낭비
const Preview = ({ userInfo }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.form}>
        {Object.keys(userInfo).map((key) => (
          <li key={key}>
            <Card userInfo={userInfo[key]} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Preview;
