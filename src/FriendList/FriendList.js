import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function StatusColor(isOnline) {
  return isOnline ? 'green' : 'red';
}
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span
        className={styles.status}
        style={{ backgroundColor: StatusColor(isOnline) }}
      >
        {isOnline}
      </span>
      <img src={avatar} alt={name} className={styles.avatar} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
}

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.item}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};

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
