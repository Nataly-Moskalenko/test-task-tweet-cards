import TweetCard from '../../components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import css from './Tweets.module.css';
import { NavLink, Navigate } from 'react-router-dom';

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(3);
  const [error, setError] = useState(null);
  const following = JSON.parse(localStorage.getItem('following')) || [];
  const [visibilityUsers, setVisibilityUsers] = useState([]);

  const idFollowing = (id) => following.includes(id);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const showAll = () => {
    setVisibilityUsers(users);
  };

  const showFollow = () => {
    setVisibilityUsers(users.filter((item) => !idFollowing(item.id)));
  };

  const showFollowing = () => {
    setVisibilityUsers(users.filter((item) => idFollowing(item.id)));
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await apiService();
        setUsers(data);
        setVisibilityUsers(data);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className={css.tweetsWrapper}>
      <div className={css.tweetsMenu}>
        <button className={css.buttonBack} type="button">
          <NavLink className={css.buttonLink} to="/">
            Back
          </NavLink>
        </button>
        <ul className={css.dropdawn}>
          <button className={css.buttonDropdawn} type="button" onClick={showAll}>
            All
          </button>
          <button className={css.buttonDropdawn} type="button" onClick={showFollow}>
            Follow
          </button>
          <button className={css.buttonDropdawn} type="button" onClick={showFollowing}>
            Following
          </button>
        </ul>
      </div>

      <ul className={css.cards}>
        {visibilityUsers?.slice(0, visible).map((card) => (
          <li key={card.id}>
            <TweetCard
              card={card}
              // onClick={onClick}
            />
          </li>
        ))}
      </ul>
      {visible < users.length && visibilityUsers.length > 0 && (
        <button className={css.buttonLoadmore} type="button" onClick={showMoreItems}>
          Load more
        </button>
      )}
      {error && <Navigate to="/" />}
    </div>
  );
}
