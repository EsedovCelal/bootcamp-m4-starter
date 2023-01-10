import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import { Provider } from "react-redux";
import store from "./store";

import "./reset.css";
import "./common.css";

function App() {
  return (
    <Provider className="app" store={store}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/list/:id" exact component={ListPage} />
      </Switch>
    </Provider>
  );
}

export default App;
