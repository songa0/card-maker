import React, { useRef } from "react";
import Button from "../Button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_add_form.module.css";

const CardAddForm = ({ addCardFunc }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const jobRef = useRef();
  const companyRef = useRef();
  const commentRef = useRef();
  const emailRef = useRef();
  const themeRef = useRef();

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
      fileName: "",
      fileUrl: "",
    };
    formRef.current.reset();
    addCardFunc(card);
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
        <ImageFileInput />
        <Button name="Add" onSubmit={onSubmit}></Button>
      </div>
    </form>
  );
};

export default CardAddForm;
