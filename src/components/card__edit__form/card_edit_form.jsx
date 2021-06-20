import React from "react";
import Button from "../Button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ userInfo }) => {
  const { name, company, theme, job, email, comment } = userInfo;
  return (
    <form className={styles.form}>
      <input className={styles.input} type="text" value={name} />
      <input className={styles.input} type="text" value={company} />
      <select className={styles.select} value={theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" value={job} />
      <input className={styles.input} type="text" value={email} />
      <textarea className={styles.textarea}>{comment}</textarea>
      <div className={styles.buttonDiv}>
        <ImageFileInput />
        <Button name="Delete"></Button>
      </div>
    </form>
  );
};

export default CardEditForm;
