import user from './Profile/user.json';
import Profile from './Profile/Profile.jsx';

import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics.jsx';

import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList.jsx';

////import transactions from './TransactionHistory/transactions.json';
//import TransactionHistory from './TransactionHistory';

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
      <FriendList friends={friends} />;
    </div>
  );
}
