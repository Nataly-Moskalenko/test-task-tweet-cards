import TweetCard from '../../components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import apiService from '../../services/apiService';
import css from './Tweets.module.css';
import { NavLink } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(3);
  const [error, setError] = useState(null);  
  const [visibilityUsers, setVisibilityUsers] = useState([]);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const showAll = () => {
    setVisibilityUsers(users);
  };

  const showFollow = () => {
    const following = JSON.parse(localStorage.getItem('following')) || [];
    const idFollowing = (id) => following.includes(id);
    setVisibilityUsers(users.filter((item) => !idFollowing(item.id)));    
  };

  const showFollowing = () => {
    const following = JSON.parse(localStorage.getItem('following')) || [];
    const idFollowing = (id) => following.includes(id);
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
      {!error && (
        <div className={css.tweetsMenu}>
          <button className={css.buttonBack} type="button">
            <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/">
              <HiArrowLeft size="24" />
              <span className={css.buttonSpan}>Back</span>
            </NavLink>
          </button>
          <ul className={css.dropdown}>
            <button className={css.buttonDropdown} type="button" autoFocus onClick={showAll}>
              All
            </button>
            <button className={css.buttonDropdown} type="button" onClick={showFollow}>
              Follow
            </button>
            <button className={css.buttonDropdown} type="button" onClick={showFollowing}>
              Following
            </button>
          </ul>
        </div>
      )}

      <ul className={css.cards}>
        {visibilityUsers?.slice(0, visible).map((card) => (
          <li key={card.id}>
            <TweetCard card={card} />
          </li>
        ))}
      </ul>
      {visible < visibilityUsers.length && visibilityUsers.length > 0 && (
        <button className={css.buttonLoadmore} type="button" onClick={showMoreItems}>
          Load more
        </button>
      )}
      {error && (
        <div className={css.error}>
          <p>Ooops, something went wrong: {error.message}.</p>
          <p>Please try again.</p>
        </div>
      )}      
    </div>
  );
}
