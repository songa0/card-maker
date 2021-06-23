import React, { useRef } from "react";
import Button from "../Button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({ userInfo, deleteCardFunc, udpateCardFunc }) => {
  const { name, company, theme, job, email, comment } = userInfo;

  const commentRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    deleteCardFunc(userInfo);
  };

  const onChange = (event) => {
    event.preventDefault();
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;

    udpateCardFunc({ ...userInfo, [name]: value });
  };
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={onChange}
        name="name"
      />
      <input
        className={styles.input}
        type="text"
        value={company}
        name="company"
      />
      <select className={styles.select} value={theme} name="theme">
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input className={styles.input} type="text" value={job} name="job" />
      <input className={styles.input} type="text" value={email} name="email" />
      <textarea
        className={styles.textarea}
        ref={commentRef}
        onChange={onChange}
        name="comment"
      >
        {comment}
      </textarea>
      <div className={styles.buttonDiv}>
        <ImageFileInput />
        <Button name="Delete" onSubmit={onSubmit}></Button>
      </div>
    </form>
  );
};

export default CardEditForm;
