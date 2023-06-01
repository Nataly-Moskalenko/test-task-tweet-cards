import TweetCard from '../../components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import css from './Tweets.module.css';
import { NavLink } from 'react-router-dom';

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await apiService();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className={css.tweetsWrapper}>
      <button className={css.buttonBack} type="button">
        <NavLink className={css.buttonLink} to="/">
          Back
        </NavLink>
      </button>
      <ul className={css.cards}>
        {users?.slice(0, visible).map((card) => (
          <li key={card.id}>
            <TweetCard card={card} />
          </li>
        ))}
      </ul>
      {visible < users.length && (
        <button className={css.buttonLoadmore} type="button" onClick={showMoreItems}>
          Load more
        </button>
      )}
    </div>
  );
}
