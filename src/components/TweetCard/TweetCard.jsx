import { useState } from 'react';
import css from './TweetCard.module.css';

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
      <img src={card.avatar} alt={card.user} width="80" height="80"></img>
      <p>{card.tweets}Tweets</p>
      <p>{followers}Followers</p>
      <button onClick={handleFollow}>{buttonText}</button>
    </div>
  );
}
