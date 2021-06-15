import React from "react";
import styles from "./form.module.css";

const Form = ({ userInfo }) => {
  console.log(userInfo);
  return (
    <>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr>
            <td>{userInfo.name}</td>
            <td colspan="2">{userInfo.company}</td>
            <td>{userInfo.color}</td>
          </tr>
          <tr>
            <td colspan="2">{userInfo.job}</td>
            <td colspan="2">{userInfo.email}</td>
          </tr>
          <tr>
            <td colspan="4">{userInfo.comment}</td>
          </tr>
          <tr>
            <td colspan="2">
              <button>name</button>
            </td>
            <td colspan="2">
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Form;
