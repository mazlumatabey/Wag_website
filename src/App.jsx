import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
      <Router>
        <Navbar/>
        <Switch>
            <Route path="/">
                <HomePage />
            </Route>
        </Switch>
    </Router>
  );
}