import css from './TweetCard.module.css';

export default function TweetCard({ card }) {
  return (
    <div className={css.card}>
      <img src={card.avatar} alt={card.user} width="80" height="80"></img>
      <p>{card.tweets}Tweets</p>
      <p>{card.followers}Followers</p>
      <button>Follow</button>
    </div>
  );
}
