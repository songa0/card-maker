import React, { memo } from "react";
import styles from "./card.module.css";

const Card = memo(({ userInfo }) => {
  const { name, company, theme, job, email, comment, fileURL } = userInfo;
  return (
    <div className={`${styles.card} ${getThemeStyle(theme)}`}>
      <img
        className={styles.img}
        src={fileURL || `images/default_logo.png`}
        alt="profile"
      />
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
});

export default Card;
