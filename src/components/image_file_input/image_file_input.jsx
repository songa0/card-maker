import React, { useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ uploader, onChange, name }) => {
  const buttonRef = useRef();
  const inputFile = useRef();
  const [uploading, setUploading] = useState(false);

  const onFileInputClick = (event) => {
    event.preventDefault();
    inputFile.current.click();
  };
  const onFileInputChange = async (event) => {
    setUploading(true);
    const uploaded = await uploader.upload(event.target.files[0]);
    setUploading(false);
    onChange(uploaded);
    buttonRef.current.innerText = uploaded["original_filename"];
  };

  // const changeFileInfo = (fileInfo) => {
  //   buttonRef.current.innerText = fileInfo["original_filename"];
  //   updateImgUrl(userKey, fileInfo["secure_url"]);
  // };
  return (
    <div className={styles.imgDiv}>
      <input
        type="file"
        accept="image/*"
        className={styles.file}
        ref={inputFile}
        onChange={onFileInputChange}
      />
      {!uploading && (
        <button
          className={styles.button}
          ref={buttonRef}
          onClick={onFileInputClick}
        >
          {name || "No file"}
        </button>
      )}
      {uploading && <div className={styles.loading}> </div>}
    </div>
  );
};

export default ImageFileInput;
