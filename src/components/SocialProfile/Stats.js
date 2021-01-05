import React from 'react';
import PropTypes from 'prop-types';

import style from './Profile.module.scss';

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={style.stats}>
      <li>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{followers}</span>
      </li>
      <li>
        <span className={style.label}>Views</span>
        <span className={style.quantity}>{views}</span>
      </li>
      <li>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

Stats.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};

export default Stats;
