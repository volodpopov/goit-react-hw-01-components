import React from 'react';
import PropTypes from 'prop-types';

import style from './TransactionHistory.module.scss';

const TransactionTr = ({ id, type, amount, currency }, i) => {
  const trClass = i % 2 === 0 ? style.grey : style.white;
  return (
    <tr key={id} className={trClass}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
const TransactionBody = ({ items }) => {
  if (items.length === 0) return null;
  return <tbody>{items.map(TransactionTr)}</tbody>;
};

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionBody items={transactions} />
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
