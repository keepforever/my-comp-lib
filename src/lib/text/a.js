import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Col, Row } from "../../comps/styled";
import { CopyButton } from "../../comps/CopyButton";
import styled, { keyframes } from "styled-components";

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCarrot = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

const TypeWriterH1 = styled.h1`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.15em; /* Adjust as needed */
  animation: ${typing} 3.5s steps(40, end),
    ${blinkCarrot} 0.75s step-end infinite;
`;

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
      <h3 className="black-text">Text A</h3>
      <Row>
        <div style={{ display: "inline-block" }}>
          <TypeWriterH1 diameter={100}>This should be good</TypeWriterH1>
        </div>
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

import styled, { keyframes} from "styled-components";

const typing = keyframes\`
  from { width: 0 }
  to { width: 100% }
\`

const blinkCarrot = keyframes\`
  from, to { border-color: transparent }
  50% { border-color: orange; }
\`

const TypeWriterH1 = styled.h1\`
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation:
    \${typing} 3.5s steps(40, end),
    \${blinkCarrot} .75s step-end infinite;
\`

`;
