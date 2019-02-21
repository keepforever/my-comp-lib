import React from "react";
import A from "../lib/button/a";
import B from "../lib/button/b";
import { SectionHeader } from './styled'

export default props => {
  return (
    <div>
      <SectionHeader>
        Buttons
      </SectionHeader>
      <br />
      <A />
      <B />
    </div>
  );
};
