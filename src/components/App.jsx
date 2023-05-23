import user from './Profile/user.json';
import Profile from './Profile/Profile.jsx';

import data from './Stratistics/data.json';
import Statistics from './Stratistics';

import friends from './FriendList/friends.json';
import FriendList from './FriendList';

import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}
