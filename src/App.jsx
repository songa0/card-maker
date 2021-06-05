import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import React from "react";

const App = (props) => {
  function callGoogleLogin() {}
  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
};

export default App;
