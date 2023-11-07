import styled from 'styled-components';

export const SectionStyled = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 350px;
  align-content: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e4e4e4;
`;
export const Title = styled.h2`
  font-size: 32px;
  color: black;
  font-weight: 700;
`;
export const List = styled.ul`
  width: 100%;

  padding: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const Item = styled.li`
  width: calc(100% / 5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: red;
  padding: 7px;
  border: 1px solid #e4e4e4;
`;

export const Label = styled.span`
  font-size: 12px;
  color: white;
  margin-bottom: 5px;
`;
export const Percentage = styled.span`
  font-size: 10px;
  color: white;
`;
