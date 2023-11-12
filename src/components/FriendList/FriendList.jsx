import PropTypes from 'prop-types';

import {
  FriendList,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendList.module';

export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id}>
            <Status isonline={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt={friend.name} width="48" />
            <Name>{friend.name}</Name>
          </FriendListItem>
        );
      })}
    </FriendList>
  );
};

Friends.protTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
