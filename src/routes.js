import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./Components/App";
import Message from "./Components/Message/Message";
import About from "./Components/About/About";
import Form from "./Components/Home/Form";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Form} />
    <Route path="message" component={Message} />
    <Route path="about" component={About} />
  </Route>
);
