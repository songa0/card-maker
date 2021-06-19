import React, { useRef } from "react";
import styles from "./card_add_form.module.css";

const CardAddForm = () => {
  const name = useRef();
  const job = useRef();
  const company = useRef();
  const comment = useRef();
  const email = useRef();
  const theme = useRef();

  return (
    <>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr>
            <td>
              <input type="text" ref={name} />
            </td>
            <td colSpan="2">
              <input type="text" ref={company} />
            </td>
            <td>
              <input type="text" ref={theme} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input type="text" ref={job} />
            </td>
            <td colSpan="2">
              <input type="text" ref={email} />
            </td>
          </tr>
          <tr className={styles.comment}>
            <td colSpan="4">
              <textarea ref={comment}></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="2" className={styles.img__btn}>
              name
            </td>
            <td colSpan="2" className={styles.add__btn}>
              Add
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CardAddForm;
