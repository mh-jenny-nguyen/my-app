// @ts-nocheck
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import Home from "./routes/Home";
import About from "./routes/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history, store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
