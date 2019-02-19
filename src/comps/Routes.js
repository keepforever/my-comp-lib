import React from "react";
import {Switch, Route, Redirect } from 'react-router-dom';
// Routes
import Buttons from './Buttons'
import Forms from './Forms'
import ListItems from './ListItems'

export default props => {
  return (
    <Switch>
      <Route exact path="/list-items" component={ListItems} />
      <Route exact path="/forms" component={Forms} />
      <Route exact path="/" component={Buttons} />
      <Redirect to="/" />
    </Switch>
  );
};
