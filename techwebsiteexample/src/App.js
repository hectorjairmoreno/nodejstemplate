import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/container/home";
import Success from "./components/container/success";
import Error from "./components/container/error";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/error" render={() => <Error />} />
        <Route exact path="/success" render={() => <Success />} />
      </Switch>
    );
  }
}

export default withRouter(App);
