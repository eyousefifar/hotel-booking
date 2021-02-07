import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import SingleHotel from "./pages/SingleHotel";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hotels/" component={Hotels} />
        <Route
          exact
          path="/hotels/:slug/:startDate/:endDate"
          component={SingleHotel}
        />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
