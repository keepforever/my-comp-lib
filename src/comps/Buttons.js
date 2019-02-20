import React from "react";
import A from "../lib/button/a";
import B from "../lib/button/b";

export default props => {
  return (
    <div className="white-text">
      <div style={{textAlign: 'center'}}>
        <h1>Buttons</h1>
      </div>
      <br />
      <A />
      <B />
    </div>
  );
};
