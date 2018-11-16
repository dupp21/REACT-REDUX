import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./componets/Form";
import List from "./componets/List";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider>
        <div>
          <List />
          <Form />
        </div>
      </Provider>
    );
  }
}

export default App;
