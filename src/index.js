import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import Root from "./Root";
import App from "./App";
import Chat from "./components/Chat/Chat";
import Contact from "./components/Contact/Contact";
import * as serviceWorker from "./serviceWorker";

/*
    React/Redux Boilerplate Application
    - create actions and reducers
    - write and apply custom middleware
    - connect to React application
*/

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Chat} />
        <Route path="/contact" component={Contact} />
      </App>
    </BrowserRouter>
  </Root>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
