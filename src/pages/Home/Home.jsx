import css from './Home.module.css';
import Empty from 'components/Empty/Empty';

export default function Home() {
  return (
    <div>
      <h1 className={css.homeTitle}>Welcome to Tweet Cards Application!</h1>
      <Empty />
    </div>
  );
}
