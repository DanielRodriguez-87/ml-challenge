import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CircularProgress from "@material-ui/core/CircularProgress";

const Blank = lazy(() => import("./pages/Blank"));
const Search = lazy(() => import("./pages/Search"));
const Product = lazy(() => import("./pages/Product"));

function App() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route path="/" exact component={Blank} />
          <Route path="/items" exact component={Search} />
          <Route path="/items/:id" exact component={Product} />
          <Route path="*" component={Blank} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
