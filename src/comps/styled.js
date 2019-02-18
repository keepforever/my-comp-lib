import styled from 'styled-components';

export const Col = styled.div`
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
