import React from 'react';
import PropTypes from 'prop-types';

import style from './FriendsListItem.module.scss';
import defaultImage from '../default.jpg';

const FriendsListItem = ({ avatar, name, isOnline, id }) => {
  const statusClass = isOnline ? style.online : style.offline;

  return (
    <li key={id} className={style.item}>
      <span className={statusClass}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

FriendsListItem.defaultProps = {
  name: 'нет имени',
  avatar: defaultImage,
  isOnline: null,
  id: 'отсутсвует',
};

export default FriendsListItem;
