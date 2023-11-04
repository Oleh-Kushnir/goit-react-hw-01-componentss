import styled from 'styled-components';

export const MainCard = styled.div`
  width: 350px;
  height: 500px;

  margin: 100px;

  box-sizing: border-box;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const Description = styled.div`
  width: 100%;
  height: 75%;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

export const Username = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
`;

export const Tag = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #c0c0c0;
`;

export const Location = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #c0c0c0;
`;

export const Stats = styled.ul`
  width: 100%;
  height: 20%;
  list-style-type: none;
  display: flex;
  flex-direction: row;

  margin: 0;
  padding: 0;
`;

export const StatsText = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #c0c0c0;
`;

export const StatsValue = styled.span`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const StatsLi = styled.li`
  width: 33.33%;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
