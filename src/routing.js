import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StatisticsPage from "./pages/StatisticsPage";

const Navigator = () => {
  return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/statistics" component={StatisticsPage} />
        </Switch>
  );
};

export default Navigator;
