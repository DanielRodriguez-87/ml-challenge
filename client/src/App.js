import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Blank from "./pages/Blank";
import Search from "./pages/Search";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Blank} />
        <Route path="/items" exact component={Search} />
        <Route path="/items/:id" exact component={Product} />
      </Switch>
    </Router>
  );
}

export default App;
