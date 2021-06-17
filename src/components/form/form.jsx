import React from "react";
import styles from "./form.module.css";

const Form = ({ userInfo }) => {
  const { name, company, theme, job, email, comment } = userInfo;
  return (
    <>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr>
            <td>{name}</td>
            <td colSpan="2">{company}</td>
            <td>{theme}</td>
          </tr>
          <tr>
            <td colSpan="2">{job}</td>
            <td colSpan="2">{email}</td>
          </tr>
          <tr className={styles.comment}>
            <td colSpan="4">{comment}</td>
          </tr>
          <tr>
            <td colSpan="2" className={styles.img__btn}>
              name
            </td>
            <td colSpan="2" className={styles.del__btn}>
              Delete
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Form;
