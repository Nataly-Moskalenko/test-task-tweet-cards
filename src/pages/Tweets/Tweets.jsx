import TweetCard from '../../components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import css from './Tweets.module.css';

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
    <div>
      <h1>Tweets</h1>
      <button>Back</button>
      <ul className={css.cards}>
        {users.map((card) => (
          <li key={card.id}>
            <TweetCard card={card} />
          </li>
        ))}
      </ul>
      <button>Load more</button>
    </div>
  );
}
