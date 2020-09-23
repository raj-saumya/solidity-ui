import React from "react";
import "./App.css";
import Store from "./utils/Store";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Store>
      <div className="main">
        <Switch>
          {/* <Route path="/chat" component={Chat} /> */}
          <Route exact path="/" render={props => <Login {...props} />} />
        </Switch>
      </div>
    </Store>
  );
}

export default App;
