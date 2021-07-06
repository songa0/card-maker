import React, { memo, useRef, useState } from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = memo(({ uploader, onChange, name }) => {
  //memo 처리해도 rerendering 일어남. index에서 uploader를 따로 정의했기 때문. index에서도 memo 처리
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
});

export default ImageFileInput;
