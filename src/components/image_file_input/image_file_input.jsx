import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploader, onChange }) => {
  const buttonRef = useRef();
  const inputFile = useRef();

  const onFileInputClick = (event) => {
    event.preventDefault();
    inputFile.current.click();
  };
  const onFileInputChange = async (event) => {
    const uploaded = await uploader.upload(event.target.files[0]);
    onChange(uploaded);
    buttonRef.current.innerText = uploaded["original_filename"];
  };

  // const changeFileInfo = (fileInfo) => {
  //   buttonRef.current.innerText = fileInfo["original_filename"];
  //   updateImgUrl(userKey, fileInfo["secure_url"]);
  // };
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
