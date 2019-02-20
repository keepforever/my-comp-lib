import styled from 'styled-components';

export const CopyButton = styled.div`
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
