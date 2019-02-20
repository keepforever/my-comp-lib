import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Col, Row } from "../../comps/styled";
import { CopyButton } from "../../comps/CopyButton";

const SmallBadge = styled.div`
  font-size: ${({diameter}) => diameter ? diameter * (3/8)  : '20'}px;
  background: linear-gradient(orange, red);
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  margin: 5px 20px;
  padding: 15px;
  display: flex;
  height: ${({diameter}) => diameter ? diameter : '50'}px;
  width: ${({diameter}) => diameter ? diameter : '50'}px;
  color: #fff;
`

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
        <SmallBadge diameter={200}>
          B.A.C.
        </SmallBadge>
      </Row>
      <div>
        props: <code>diameter: num</code>
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
const SmallBadge = styled.div\`
  font-size: \${({diameter}) => diameter ? diameter * (3/8)  : '20'}px;
  background: linear-gradient(orange, red);
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  text-align: center;
  margin: 5px 20px;
  padding: 15px;
  display: flex;
  height: \${({diameter}) => diameter ? diameter : '50'}px;
  width: \${({diameter}) => diameter ? diameter : '50'}px;
  color: #fff;
\`
`;
