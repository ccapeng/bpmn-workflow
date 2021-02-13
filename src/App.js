import React from "react";
import {Route, Switch} from "react-router-dom"

import Nav from "./Nav";
import BPMNViewer from "./BPMNViewer";
import BPMNModeler from "./BPMNModeler";

const App = () => {
  return (
    <div>
      <Nav />
      <div class="container">
        <Switch>
          <Route exact path="/" component={BPMNViewer} />
          <Route exact path="/viewer/" component={BPMNViewer} />
          <Route exact path="/editor/" component={BPMNModeler} />
        </Switch>
      </div>
    </div>
  );
}

export default App;