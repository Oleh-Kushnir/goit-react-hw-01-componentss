import PropTypes from 'prop-types';

import {
  ListItem,
  Status,
  Avatar,
  Name,
} from '../FriendListItem/FriendListItem.module';

export const FriendListItem = ({ avatar, name, isonline }) => {
  return (
    <ListItem>
      <Status isonline={isonline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
};

FriendListItem.protTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
