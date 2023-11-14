import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';

import { FriendList } from './FriendList.module';

export const Friends = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isonline={friend.isOnline}
        />
      ))}
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
