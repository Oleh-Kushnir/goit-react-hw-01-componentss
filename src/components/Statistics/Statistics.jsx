import PropTypes from 'prop-types';

import {
  SectionStyled,
  Title,
  List,
  Item,
  Label,
  Percentage,
} from '../Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStyled>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(el => {
          return (
            <Item key={el.id}>
              <Label>{el.label}</Label>
              <Percentage>{el.percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </SectionStyled>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
