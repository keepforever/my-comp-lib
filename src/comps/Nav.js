import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../lib/button/b";

import { routes } from '../constants';

export default props => {
  return (
    <React.Fragment>
      {routes.map(r => {
        return (
          <Link key={r} to={r}>
            <Button color="white">{r}</Button>
          </Link>
        );
      })}
    </React.Fragment>
  );
};
