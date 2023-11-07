import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(friend => {
        return (
          <FriendListItem key={friend.id}>
            <Status isOnline={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt={friend.name} width="48" />
            <Name>{friend.name}</Name>
          </FriendListItem>
        );
      })}
    </FriendList>
  );
};

FriendList.protTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
