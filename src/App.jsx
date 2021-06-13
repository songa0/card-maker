import styles from "./App.module.css";
import React from "react";
import Login from "./components/login/login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Maker from "./components/maker/maker";

const App = ({ authService }) => {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
