import logo from '../../images/logo.svg';
import picture from '../../images/picture.svg';
import css from './Home.module.css';

export default function Home() {
  return (
    <div>
      <h1 className={css.homeTitle}>Welcome to Tweet Cards Application!</h1>
      <div className={css.home}>
      <img src={logo} alt="logo GoIT" />
      <img src={picture} alt="backgroung_image" width={600} height={320} />
      </div>      
    </div>
  );
}
