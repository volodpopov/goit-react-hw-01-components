import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats.js';
import style from './Profile.module.scss';
import defaultImage from '../default.jpg';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>
      <Stats {...stats} />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Profile.defaultProps = {
  name: 'нет имени',
  avatar: defaultImage,
  tag: 'нет',
  location: 'вне сети',
};

export default Profile;
