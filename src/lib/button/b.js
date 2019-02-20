import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Col, Row } from "../../comps/styled";
import { CopyButton } from '../../comps/CopyButton'

// component CSS
export const Button = styled.div`
  display: inline-block;
  padding: 0.5em 3em;
  border: ${({ color }) => color ? `0.16em solid ${color}` : ` 0.16em solid #ffffff`};
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${({ color }) => color ? color : '#ffffff'};
  text-align: center;
  transition: all 0.15s;

  &:hover {
    color: blue;
    border-color: blue;
  }

  &:active {
    color: red;
    border-color: red;
  }
`;

export default props => {
  const [copied, setCopied] = useState(false);

  useEffect(
    () => {
      if (copied) {
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      }
    },
    [copied]
  );

  return (
    <Col color="green">
      <h3>Button B</h3>
      <Row>
        <Button onClick={() => console.log('hi')}>This Button</Button>
      </Row>
      <CopyToClipboard
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
export const Button = styled.div\`
  display: inline-block;
  padding: 0.5em 3em;
  border: \${({ color }) => color ? \`0.16em solid \${color}\` : \`0.16em solid #ffffff\`};
  border: 0.16em solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  box-sizing: border-box;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  transition: all 0.15s;

  &:hover {
    color: blue;
    border-color: blue;
  }

  &:active {
    color: red;
    border-color: red;
  }
\`;

<Button onClick={() => console.log('hi')}>This Button</Button>
`;
