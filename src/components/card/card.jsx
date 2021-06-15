import React from "react";
import styles from "./card.module.css";

const Card = ({ userInfo }) => {
  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <td rowSpan="6" className={styles.img__row}>
            <img className={styles.img} src="images/default_logo.png" />
          </td>
        </tr>
        <tr>
          <td>{userInfo.name}</td>
        </tr>
        <tr>
          <td>{userInfo.company}</td>
        </tr>
        <tr>
          <td>{userInfo.job}</td>
        </tr>
        <tr>
          <td>{userInfo.email}</td>
        </tr>
        <tr>
          <td>{userInfo.comment}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Card;
