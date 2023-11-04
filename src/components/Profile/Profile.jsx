import {
  MainCard,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Stats,
  StatsText,
  StatsValue,
  StatsLi,
} from '../Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <MainCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsLi>
          <StatsText>Followers</StatsText>
          <StatsValue>{stats.followers}</StatsValue>
        </StatsLi>
        <StatsLi>
          <StatsText>Views</StatsText>
          <StatsValue>{stats.views}</StatsValue>
        </StatsLi>
        <StatsLi>
          <StatsText>Likes</StatsText>
          <StatsValue>{stats.likes}</StatsValue>
        </StatsLi>
      </Stats>
    </MainCard>
  );
};
