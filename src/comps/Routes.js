import React from "react";
import {Switch, Route, Redirect } from 'react-router-dom';
// Routes
import Buttons from './Buttons'
import Forms from './Forms'
import ListItems from './ListItems'
import Badge from './Badge'


export default props => {
  return (
    <Switch>
      <Route exact path="/list-items" component={ListItems} />
      <Route exact path="/forms" component={Forms} />
      <Route exact path="/badge" component={Badge} />
      <Route exact path="/" component={Buttons} />
      <Redirect to="/" />
    </Switch>
  );
};
