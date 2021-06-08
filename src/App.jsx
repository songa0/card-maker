import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import { signInWithGoogle, auth } from "./service/firebase";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const googleLoginButtonClick = () => {
    signInWithGoogle();
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  });

  const logoutButtonClick = () => {
    auth.signOut();
  };

  return (
    <div className={styles.app}>
      <section className={!currentUser ? styles.login__popup : styles.main}>
        <Header
          display={!currentUser ? "popup" : "main"}
          handleLogoutClick={logoutButtonClick}
        />
        {!currentUser ? (
          <Login handleLoginClick={googleLoginButtonClick} />
        ) : (
          ""
        )}
        <Footer />
      </section>
    </div>
  );
};

export default App;
