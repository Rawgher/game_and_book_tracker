import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Games from "./pages/Games";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/games" component={Games} />
        <Route exact path="/books" component={Books} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
