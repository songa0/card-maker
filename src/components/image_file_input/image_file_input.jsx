import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = () => {
  const buttonRef = useRef();
  let inputFile = "";
  const onFileInputClick = (event) => {
    //event.stopImmediatePropagation();
    inputFile.click();
    //event.stopPropagation();
  };
  const imageChange = (event) => {
    console.log(event.target.files);
    //event.preventDefault();
    //console.log(event.target.files);
  };

  const inputClick = (event) => {
    event.currentTarget.value = null;
  };
  return (
    <>
      <button
        className={styles.button}
        ref={buttonRef}
        onClick={onFileInputClick}
      ></button>
      <input
        type="file"
        accept="image/*"
        className={styles.file}
        ref={(input) => (inputFile = input)}
        onClick={inputClick}
        onChange={imageChange}
      />
    </>
  );
};

export default ImageFileInput;
