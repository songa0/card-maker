import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import { signInWithGoogle, auth } from "./service/firebase";
import Login from "./components/login/login";

const App = ({ authService }) => {
  return (
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
};

export default App;
