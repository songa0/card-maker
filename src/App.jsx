import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import { signInWithGoogle, auth } from "./firebase";
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

  return (
    <div className={styles.app}>
      <Login
        className={styles.login__popup}
        handleClick={googleLoginButtonClick}
      />
    </div>
  );
};

export default App;
