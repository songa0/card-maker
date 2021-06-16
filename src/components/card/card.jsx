import React from "react";
import styles from "./card.module.css";

const Card = ({ userInfo }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src="images/default_logo.png" />
      <div>
        <span className={styles.name}>{userInfo.name}</span>
        <span>{userInfo.company}</span>
        <hr />
        <span>{userInfo.job}</span>
        <span>{userInfo.email}</span>
        <span>{userInfo.comment}</span>
      </div>
    </div>
  );
};

export default Card;
