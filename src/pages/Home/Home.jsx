import css from './Home.module.css';
import DefaultImage from 'components/DefaultImage/DefaultImage';

export default function Home() {
  return (
    <div>
      <h1 className={css.homeTitle}>Welcome to Tweet Cards Application!</h1>
      <DefaultImage />
    </div>
  );
}
