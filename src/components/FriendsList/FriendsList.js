import React from 'react';

import FriendsListItem from './FriendsListItem';
import style from './FriendsListItem.module.scss';

const FriendsList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={style.friendlist}>{friends.map(FriendsListItem)}</ul>;
};

export default FriendsList;
