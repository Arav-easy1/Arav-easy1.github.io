import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import Study from "./routes/Study";
import Project from "./routes/Project";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/study" component={Study} />
      <Route path="/project" component={Project} />
    </HashRouter>
  );
}

export default App;
