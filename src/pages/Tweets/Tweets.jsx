import TweetCard from '../../components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import css from './Tweets.module.css';
import { NavLink } from 'react-router-dom';

export default function Tweets() {
  const [users, setUsers] = useState([]);

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
      <button className={css.buttonBack}>
        <NavLink className={css.buttonLink} to="/">
          Back
        </NavLink>
      </button>
      <ul className={css.cards}>
        {users.map((card) => (
          <li key={card.id}>
            <TweetCard card={card} />
          </li>
        ))}
      </ul>
      <button className={css.buttonLoadmore}>Load more</button>
    </div>
  );
}
