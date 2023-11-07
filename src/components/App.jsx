import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../data/user.json';
import stats from '../data/data.json';
import { Friends } from './FriendList/FriendList';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Transactions } from './Transactions/Transactions';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats}></Statistics>
      <Friends friends={friends} />
      <Transactions items={transactions} />
    </div>
  );
};
