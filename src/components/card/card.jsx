import React from "react";
import styles from "./card.module.css";

const Card = ({ userInfo }) => {
  const { name, company, theme, job, email, comment, imgUrl } = userInfo;
  return (
    <div className={`${styles.card} ${getThemeStyle(theme)}`}>
      <img className={styles.img} src={imgUrl || `images/default_logo.png`} />
      <div>
        <span className={styles.name}>{name}</span>
        <span>{company}</span>
        <hr />
        <span>{job}</span>
        <span>{email}</span>
        <span>{comment}</span>
      </div>
    </div>
  );

  function getThemeStyle(theme) {
    switch (theme) {
      case "dark":
        return styles.dark;
      case "light":
        return styles.light;
      case "colorful":
        return styles.colorful;
      default:
        throw new Error(`Unknown theme : ${theme}`);
    }
  }
};

export default Card;
