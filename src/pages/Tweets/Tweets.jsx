import TweetCard from '../../components/TweetCard/TweetCard';
import { useEffect, useState } from 'react';
import { apiServiceFetch } from '../../services/apiService';
import css from './Tweets.module.css';
import { NavLink } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import Dropdown from '../../components/Dropdown/Dropdown';
import Empty from 'components/Empty/Empty';

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(3);
  const [error, setError] = useState(null);
  const [visibilityUsers, setVisibilityUsers] = useState([]);

  const types = ['All', 'Follow', 'Following'];
  const [active, setActive] = useState(types[0]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await apiServiceFetch();
        setUsers(data);
        setVisibilityUsers(data);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }

    fetchUsers();
  }, []);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 3);
  };

  const showAll = () => {
    setVisibilityUsers(users);
  };

  const showFollow = () => {
    const following = JSON.parse(localStorage.getItem('following')) || [];
    const idFollowing = id => following.includes(id);
    setVisibilityUsers(users.filter(item => !idFollowing(item.id)));
  };

  const showFollowing = () => {
    const following = JSON.parse(localStorage.getItem('following')) || [];
    const idFollowing = id => following.includes(id);
    setVisibilityUsers(users.filter(item => idFollowing(item.id)));
  };

  const showType = type => {
    switch (type) {
      case 'All':
        showAll();
        setActive(type);
        break;
      case 'Follow':
        showFollow();
        setActive(type);
        break;
      case 'Following':
        showFollowing();
        setActive(type);
        break;
      default:
        showAll();
        setActive(types[0]);
        break;
    }
  };

  return (
    <div className={css.tweetsWrapper}>
      {!error && (
        <div className={css.tweetsMenu}>
          <button className={css.buttonBack} type="button">
            <NavLink
              className={navData => (navData.isActive ? css.active : css.link)}
              to="/"
            >
              <HiArrowLeft size="24" />
              <span className={css.buttonSpan}>Back</span>
            </NavLink>
          </button>
          <Dropdown types={types} showType={showType} active={active} />
        </div>
      )}

      <ul className={css.cards}>
        {visibilityUsers?.slice(0, visible).map(card => (
          <li key={card.id}>
            <TweetCard card={card} showAll={showAll} />
          </li>
        ))}
      </ul>

      {visible < visibilityUsers.length && visibilityUsers.length > 0 && (
        <button
          className={css.buttonLoadmore}
          type="button"
          onClick={showMoreItems}
        >
          Load more
        </button>
      )}

      {!error && visibilityUsers.length === 0 && (
        <div>
          <h1 className={css.text}>There are no following cards.</h1>
          <Empty />
        </div>
      )}

      {error && (
        <div className={css.error}>
          <p>Ooops, something went wrong: {error.message}.</p>
          <p>Please try again.</p>
          <Empty/>
        </div>
      )}
    </div>
  );
}
