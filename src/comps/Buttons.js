import React from "react";
import A from "../lib/buttons/a";
import B from "../lib/buttons/b";

export default props => {
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h1>Buttons</h1>
      </div>
      <br />
      <A />
      <B />
    </div>
  );
};
