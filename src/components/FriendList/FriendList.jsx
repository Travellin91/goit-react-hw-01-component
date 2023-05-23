import PropTypes from 'prop-types';
import './friends-list.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className="item" key={id}>
          <span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
