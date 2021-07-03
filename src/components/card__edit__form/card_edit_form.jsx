import React, { useRef } from "react";
import Button from "../Button/button";
import styles from "./card_edit_form.module.css";

const CardEditForm = ({
  userInfo,
  deleteCardFunc,
  updateCardFunc,
  FileInput,
}) => {
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

    updateCardFunc({ ...userInfo, [name]: value });
  };

  const onFileChange = (file) => {
    updateCardFunc({
      ...userInfo,
      fileURL: file.secure_url,
      fileName: file.original_filename,
    });
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
        onChange={onChange}
      />
      <select
        className={styles.select}
        value={theme}
        name="theme"
        onChange={onChange}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        value={job}
        name="job"
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        value={email}
        name="email"
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        ref={commentRef}
        onChange={onChange}
        name="comment"
      >
        {comment}
      </textarea>
      <div className={styles.buttonDiv}>
        <FileInput onChange={onFileChange} />
        <Button name="Delete" onSubmit={onSubmit}></Button>
      </div>
    </form>
  );
};

export default CardEditForm;
