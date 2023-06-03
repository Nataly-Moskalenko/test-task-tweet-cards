import logo from 'images/logo.svg';
import picture from 'images/picture.svg';
import css from './DefaultImage.module.css';

export default function DefaultImage() {
  return (
    <div className={css.empty}>
      <img src={logo} alt="logo GoIT" />
      <img src={picture} alt="backgroung_image" width={600} height={320} />
    </div>
  );
}
