import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploader }) => {
  const buttonRef = useRef();
  const inputFile = useRef();

  const onFileInputClick = (event) => {
    event.preventDefault();
    inputFile.current.click();
  };
  const onFileInputChange = (event) => {
    console.log(event.target.files[0]);
    uploader.upload(event.target.files[0]).then(console.log);
  };

  return (
    <>
      <button
        className={styles.button}
        ref={buttonRef}
        onClick={onFileInputClick}
      >
        No file
      </button>
      <input
        type="file"
        accept="image/*"
        className={styles.file}
        ref={inputFile}
        onChange={onFileInputChange}
      />
    </>
  );
};

export default ImageFileInput;
