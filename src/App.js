import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./componets/Form";
import List from "./componets/List";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <List />
          <Form />
        </div>
      </Provider>
    );
  }
}

export default App;
