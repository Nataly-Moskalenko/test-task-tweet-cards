import { useState } from 'react';
import css from './TweetCard.module.css';
import logo from '../../images/logo.svg';
import picture from '../../images/picture.svg';

export default function TweetCard({ card }) {
  const [followers, setFollowers] = useState(card.followers);
  const [buttonText, setButtonText] = useState('Follow');

  const handleFollow = () => {
    const allFollowing = JSON.parse(localStorage.getItem('following')) || [];
    if (buttonText === 'Follow') {
      setFollowers(followers + 1);
      setButtonText('Following');      
      // const allFollowing = JSON.parse(localStorage.getItem('following')) || [];
      allFollowing.push(card.id);
      window.localStorage.setItem('following', JSON.stringify(allFollowing));
    }
    if (buttonText === 'Following') {
      setFollowers(followers - 1);
      setButtonText('Follow');
      // const allFollowing = JSON.parse(localStorage.getItem('following')) || [];
      // const newFollowing = allFollowing.filter(item => item.id !== card.id);
      const newFollowing = allFollowing.filter(id => id !== card.id);       
      window.localStorage.setItem('following', JSON.stringify(newFollowing));
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
      <p className={css.cardTweets}>{Number(card.tweets).toLocaleString('en')} Tweets</p>
      <p className={css.cardFollowers}>{Number(followers).toLocaleString('en')} Followers</p>
      <button
        type="button"
        onClick={handleFollow}
        className={buttonText === 'Follow' ? css.cardButtonFollow : css.cardButtonFollowing}
      >
        {buttonText}
      </button>
    </div>
  );
}
