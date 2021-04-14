import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

const FriendListItem = ({ friend }) => (
  <li className={styles.item}>
    <span
      className={styles.status}
      style={{ backgroundColor: StatusColor(friend.isOnline) }}
    >
      {friend.isOnline}
    </span>
    <img
      src={friend.avatar}
      alt={friend.name}
      className={styles.avatar}
      width="48"
    />
    <p className={styles.name}>{friend.name}</p>
  </li>
);

function StatusColor(isOnline) {
  return isOnline ? 'green' : 'red';
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
