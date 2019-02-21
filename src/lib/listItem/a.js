import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Col, Row } from "../../comps/styled";
import { CopyButton } from "../../comps/CopyButton";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  height: 75px;
  background: #0035d3;
  padding: 15px;
`;

const First = styled.div`
  border: 2px solid yellow;
  height: 100%;
  color: cornsilk;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const FirstOne = styled.div`
  height: 100%;
  color: yellow;
  background: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const FirstTwo = styled.div`
  height: 100%;
  color: yellow;
  background: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Second = styled.div`
  border: 2px solid white;
  height: 100%;
  color: yellow;
  background: #0c0032;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 2;
`;

const SecondOne = styled.div`
  height: 100%;
  color: yellow;
  background: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const SecondTwo = styled.div`
  height: 100%;
  color: yellow;
  background: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ListItem = () => {
  return (
    <Container>
      <First>
        <FirstOne>
          FirstOne
        </FirstOne>
        <FirstTwo>
          FirstTwo
        </FirstTwo>
      </First>
      <Second>
        <SecondOne>SecondOne</SecondOne>
        <SecondTwo>SecondTwo</SecondTwo>
      </Second>
    </Container>
  );
};

export default props => {
  const [copied, setCopied] = useState(false);

  useEffect(
    () => {
      let mounted = true;

      if (copied && mounted) {
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      }

      return () => {
        mounted = false;
      };
    },
    [copied]
  );

  return (
    <Col>
      <h3 className="black-text">Badge A</h3>
      <Row>
        <ListItem />
      </Row>
      <div>
        props: <code>none</code>
      </div>
      <CopyToClipboard
        style={{ marginTop: 15, marginBottom: 15 }}
        onCopy={() => setCopied({ copied: true })}
        text={codeString}
      >
        <CopyButton>Copy</CopyButton>
      </CopyToClipboard>
      {copied ? (
        <span style={{ color: "red" }}> Copied to Clipboard</span>
      ) : null}
    </Col>
  );
};

const codeString = `
const Container = styled.div\`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  height: 75px;
  background: #0035d3;
  padding: 15px;
\`;

const First = styled.div\`
  border: 2px solid yellow;
  height: 100%;
  color: cornsilk;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
\`;

const FirstOne = styled.div\`
  height: 100%;
  color: yellow;
  background: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
\`;

const FirstTwo = styled.div\`
  height: 100%;
  color: yellow;
  background: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
\`;

const Second = styled.div\`
  border: 2px solid white;
  height: 100%;
  color: yellow;
  background: #0c0032;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 2;
\`;

const SecondOne = styled.div\`
  height: 100%;
  color: yellow;
  background: green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
\`;

const SecondTwo = styled.div\`
  height: 100%;
  color: yellow;
  background: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
\`;

const ListItem = () => {
  return (
    <Container>
      <First>
        <FirstOne>
          FirstOne
        </FirstOne>
        <FirstTwo>
          FirstTwo
        </FirstTwo>
      </First>
      <Second>
        <SecondOne>SecondOne</SecondOne>
        <SecondTwo>SecondTwo</SecondTwo>
      </Second>
    </Container>
  );
};
`;
