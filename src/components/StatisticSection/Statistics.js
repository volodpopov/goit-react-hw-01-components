import React from 'react';
import PropTypes from 'prop-types';

import style from './Statistic.module.scss';

const StatsListItem = ({ id, label, percentage }) => {
  return (
    <li key={id} className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}</span>
    </li>
  );
};

const StatsList = ({ items }) => {
  if (items.length === 0) return null;
  return <ul className={style.statlist}>{items.map(StatsListItem)}</ul>;
};

const Statistics = ({ items }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>

      <StatsList items={items} />
    </section>
  );
};

Statistics.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
