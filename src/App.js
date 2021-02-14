import React from "react";
import {Redirect, Route, Switch} from "react-router-dom"

import Nav from "./Nav";
import BPMNViewer from "./BPMNViewer";
import BPMNModeler from "./BPMNModeler";

const App = () => {
  return (
    <div>
      <Nav />
      <div class="container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/viewer/" />
          </Route>
          <Route exact path="/viewer/" component={BPMNViewer} />
          <Route exact path="/editor/" component={BPMNModeler} />
        </Switch>
      </div>
    </div>
  );
}

export default App;