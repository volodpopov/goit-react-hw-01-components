import React from 'react';

import user from '../data/user.json';
import Profile from './SocialProfile/Profile.js';
import statisticalData from '../data/statistical-data.json';
import Statistics from './StatisticSection/Statistics.js';
import friends from '../data/friends.json';
import FriendsList from './FriendsList/FriendsList.js';
import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.js';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics items={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
