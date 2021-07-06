import React, { memo, useRef, useState } from "react";
import Button from "../Button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = memo(({ addCardFunc, FileInput, updateCardFunc }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const jobRef = useRef();
  const companyRef = useRef();
  const commentRef = useRef();
  const emailRef = useRef();
  const themeRef = useRef();
  const [fileName, setFileName] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      job: jobRef.current.value || "",
      company: companyRef.current.value || "",
      comment: commentRef.current.value || "",
      email: emailRef.current.value || "",
      theme: themeRef.current.value || "",
      fileName: fileName,
      fileUrl: "",
    };
    updateCardFunc(card);

    formRef.current.reset();
    setFileName(null);
  };

  const onFileChange = (file) => {
    setFileName(file["original_filename"]);
  };
  return (
    <form className={styles.form} ref={formRef}>
      <input
        className={styles.input}
        type="text"
        ref={nameRef}
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="text"
        ref={companyRef}
        placeholder="Company"
      />
      <select className={styles.select} ref={themeRef}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        ref={jobRef}
        placeholder="Title"
      />
      <input
        className={styles.input}
        type="text"
        ref={emailRef}
        placeholder="Email"
      />
      <textarea
        className={styles.textarea}
        ref={commentRef}
        placeholder="Message"
      ></textarea>
      <div className={styles.buttonDiv}>
        <FileInput onChange={onFileChange} name={fileName} />
        <Button name="Add" onSubmit={onSubmit}></Button>
      </div>
    </form>
  );
});

export default CardAddForm;
