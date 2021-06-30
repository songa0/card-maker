import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App.jsx";
import AuthService from "./service/auth_service";
import Cloudinary from "./service/cloudinary";
import ImageFileInput from "./components/image_file_input/image_file_input";

const authService = new AuthService();
const uploader = new Cloudinary();
const fileInput = (props) => {
  return <ImageFileInput {...props} uploader={uploader} />;
};
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={fileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
