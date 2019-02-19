import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Col, Row } from '../../comps/styled';

const Button = styled.button`
  background: teal;
  border-radius: 8px;
  color: white;
  font-size: 20px;
  height: ${props => (props.small ? 40 : 60)}px;
  width: ${props => (props.small ? 60 : 120)}px;
`;

export default props => {
  const [copied, setCopied ] = useState(false);

  useEffect(() => {
    let mounted = true;

    if(copied && mounted) {
      setTimeout(() => {
        setCopied(false)
      }, 3000)
    }

    return () => {
      console.log('unmount = ', '\n' )
      mounted = false
    }
  }, [copied])

  return (
    <Col >
    <h3>Button A</h3>
      <Row>
        <Button small>small</Button>
        <Button>regular</Button>
      </Row>
      <CopyToClipboard
        style={{marginTop: 15, marginBottom: 15}}
        onCopy={() => setCopied({copied: true})}
        text={codeString}
      >
        <CopyButton>Copy</CopyButton>
      </CopyToClipboard>
      {copied ? <span style={{color: 'red'}}> Copied to Clipboard</span> : null}
    </Col>
  );
};

const codeString = `
import React from 'react';
import styled from 'styled-components';

const Button = styled.button\`
  background: teal;
  border-radius: 8px;
  font-size: 20px;
  color: white;
  height: \${props => (props.small ? 40 : 60)}px;
  width: \${props => (props.small ? 60 : 120)}px;
\`;

export default ( props ) => {

  return (
    <div>
      <Button small>small</Button>
      <Button>regular</Button>
    </div>
  )
};
`;


const CopyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
  font-size: 20px;
  border-radius: 8px;
  color: white;
  height: 40px;
  width: 120px;

  &:hover {
    background: green;
    cursor: pointer;
  }
`;
