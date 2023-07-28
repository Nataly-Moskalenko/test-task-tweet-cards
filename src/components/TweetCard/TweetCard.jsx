import { useState } from 'react';
import css from './TweetCard.module.css';
import logo from 'images/logo.svg';
import picture from 'images/picture.svg';
import { apiServiceUpdate } from 'services/apiService';
import PropTypes from 'prop-types';

export default function TweetCard({ card, showType }) {
  const following = JSON.parse(localStorage.getItem('following')) || [];

  const [buttonText, setButtonText] = useState(
    following.includes(card.id) ? 'Following' : 'Follow'
  );

  const [followers, setFollowers] = useState(card.followers);

  async function updateUsers(id, followers) {
    try {
      const data = await apiServiceUpdate(id, followers);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const handleFollow = () => {
    const allFollowing = JSON.parse(localStorage.getItem('following')) || [];
    if (buttonText === 'Follow') {
      updateUsers(card.id, { followers: followers + 1 });
      setFollowers(followers + 1);
      setButtonText('Following');
      allFollowing.push(card.id);
      window.localStorage.setItem('following', JSON.stringify(allFollowing));
    }
    if (buttonText === 'Following') {
      updateUsers(card.id, { followers: followers - 1 });
      setFollowers(followers - 1);
      setButtonText('Follow');
      const removedFollowing = allFollowing.filter(id => id !== card.id);
      window.localStorage.setItem(
        'following',
        JSON.stringify(removedFollowing)
      );
    }
    showType();
  };

  return (
    <div className={css.card}>
      <img
        src={card.avatar}
        alt={card.user}
        width="80"
        height="80"
        className={css.cardAvatar}
      />
      <div className={css.cardLine}></div>
      <img src={logo} alt="logo GoIT" className={css.cardLogo} />
      <img src={picture} alt="background_image" className={css.cardPicture} />
      <p className={css.cardTweets}>
        {Number(card.tweets).toLocaleString('en')} Tweets
      </p>
      <p className={css.cardFollowers}>
        {Number(followers).toLocaleString('en')} Followers
      </p>
      <button
        type="button"
        onClick={handleFollow}
        className={
          buttonText === 'Follow'
            ? css.cardButtonFollow
            : css.cardButtonFollowing
        }
      >
        {buttonText}
      </button>
    </div>
  );
}

TweetCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    tweets: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
  }),
};
