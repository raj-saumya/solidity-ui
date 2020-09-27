import React from "react";
import "./App.css";
import Store from "./utils/Store";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Questionaire from "./pages/Questionaire";
import JoinRoom from "./pages/JoinRoom";

function App() {
  return (
    <Store>
      <div className="main">
        <div className="main__header">
          <Header />
        </div>
        <div className="main__body">
          <Switch>
            <Route path="/home" render={props => <Home {...props} />} />
            <Route path="/login" render={props => <Login {...props} />} />
            <Route path="/joinQuiz" render={props => <JoinRoom {...props} />} />
            <Route
              path="/questionaire"
              render={props => <Questionaire {...props} />}
            />
            <Route exact path="/" render={props => <Landing {...props} />} />
          </Switch>
        </div>
      </div>
    </Store>
  );
}

export default App;
