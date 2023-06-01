import { useState } from 'react';
import css from './TweetCard.module.css';
import logo from '../../images/logo.svg';
import picture from '../../images/picture.svg';

export default function TweetCard({ card }) {
  const [followers, setFollowers] = useState(card.followers);
  const [buttonText, setButtonText] = useState('Follow');

  const handleFollow = () => {
    if (buttonText === 'Follow') {
      setFollowers(followers + 1);
      setButtonText('Following');
    }
    if (buttonText === 'Following') {
      setFollowers(followers - 1);
      setButtonText('Follow');
    }
  };

  return (
    <div className={css.card}>
      <img
        src={card.avatar}
        alt={card.user}
        width="80"
        height="80"
        className={css.cardAvatar}
      ></img>
      <div className={css.cardLine}></div>
      <img src={logo} alt="logo GoIT" className={css.cardLogo} />
      <img src={picture} alt="backgroung_image" className={css.cardPicture} />
      <p className={css.cardTweets}>{card.tweets} Tweets</p>
      <p className={css.cardFollowers}>{followers} Followers</p>
      <button
        onClick={handleFollow}
        className={buttonText === 'Follow' ? css.cardButtonFollow : css.cardButtonFollowing}
      >
        {buttonText}
      </button>
    </div>
  );
}
