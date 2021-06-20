import React, { useRef } from "react";
import Button from "../Button/button";
import ImageFileInput from "../image_file_input/image_file_input";
import styles from "./card_add_form.module.css";

const CardAddForm = () => {
  const name = useRef();
  const job = useRef();
  const company = useRef();
  const comment = useRef();
  const email = useRef();
  const theme = useRef();

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        ref={name}
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="text"
        ref={company}
        placeholder="Company"
      />
      <select className={styles.select} ref={theme}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        ref={job}
        placeholder="Title"
      />
      <input
        className={styles.input}
        type="text"
        ref={email}
        placeholder="Email"
      />
      <textarea
        className={styles.textarea}
        ref={comment}
        placeholder="Message"
      ></textarea>
      <div className={styles.buttonDiv}>
        <ImageFileInput />
        <Button name="Add"></Button>
      </div>
    </form>
  );
};

export default CardAddForm;
