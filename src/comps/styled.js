import styled from 'styled-components';

export const Col = styled.div`
  padding-left: 40px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: ${({ color }) => color ? color : 'cornsilk'};
  margin-bottom: 20px;
  border-bottom: 5px solid black;
  border-top: 5px solid black;
`;

export const Row = styled.div`
  background: ${props => props.color ? props.color : null};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  background: black;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const SectionHeader = styled.h1`
  color: white;
  text-align: center
`

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
