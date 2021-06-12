import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import { signInWithGoogle, auth } from "./service/firebase";
import Login from "./components/login/login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Card from "./components/card/card";

const App = ({ authService }) => {
  const [user, setUser] = useState(null);

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then(({ user }) => {
        setUser(user.email);
      });
  };

  const onLogout = () => {
    authService //
      .logout()
      .then(() => {
        setUser(null);
      });
  };
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route
            path="/"
            render={() => (
              <Login
                onLogin={onLogin}
                onLogout={onLogout}
                loginStatus={user ? "true" : "false"}
              />
            )}
          ></Route>
          <Route path="/card">
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
