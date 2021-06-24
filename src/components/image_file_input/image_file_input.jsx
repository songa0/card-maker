import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = () => {
  const buttonRef = useRef();
  let inputFile = "";
  const onFileInputClick = () => {
    inputFile.click();
  };
  return (
    <button
      className={styles.button}
      ref={buttonRef}
      onClick={onFileInputClick}
    >
      <input
        type="file"
        accept="image/*"
        className={styles.file}
        ref={(input) => (inputFile = input)}
      />
    </button>
  );
};

export default ImageFileInput;
