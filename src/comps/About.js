import React from "react";
import { SectionHeader, CopyButton } from "./styled";
import styled from "styled-components";

const aboutText =
  "This website is a hack-n-slash implementation of a style guide. \n \n But instead of being a coherent collection of components that are color coordinated, it's just a random collection of stuff I collect along the way and want to get to fast.";

const Container = styled.div`
  font-size: 30px;
  justify-content: flex-start;
  color: cornsilk;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default props => {
  return (
    <div>
      <SectionHeader>About</SectionHeader>
      <Container>
        {aboutText}
        <br/>
        <br/>
        Click the copy button to copy enough code to get you started. You'll probably need to <code>import styled from 'styled-components'</code> as I have intended
        to implement all the components in this collection with 'pure css'.
        <br/>
        <br/>
        <CopyButton>Copy</CopyButton>
        <br/>

      </Container>
    </div>
  );
};
