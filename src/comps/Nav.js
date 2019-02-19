import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../lib/buttons/b";

import { routes } from '../constants';

export default props => {
  return (
    <React.Fragment>
      {routes.map(r => {
        return (
          <Link key={r} to={r}>
            <Button color="black">{r}</Button>
          </Link>
        );
      })}
    </React.Fragment>
  );
};
