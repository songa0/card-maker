import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import React from "react";
import { signInWithGoogle } from "./firebase";

const App = (props) => {
  function googleLoginButtonClick() {
    signInWithGoogle();
  }
  return (
    <>
      <Header />
      <Login handleClick={googleLoginButtonClick} />
      <Footer />
    </>
  );
};

export default App;
