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
    event.preventDefault();
    console.log(event.target.files);
  };
  return (
    <>
      <input
        type="file"
        accept="image/*"
        className={styles.file}
        ref={(input) => (inputFile = input)}
        onChange={imageChange}
      />
    </>
  );
};

export default ImageFileInput;
