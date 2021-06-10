import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import { signInWithGoogle, auth } from "./service/firebase";
import Login from "./components/login/login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const App = ({ authService }) => {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route
            path="/"
            render={() => <Login authService={authService} />}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
