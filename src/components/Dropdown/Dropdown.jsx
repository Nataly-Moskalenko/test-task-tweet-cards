import css from './Dropdown.module.css';
import PropTypes from 'prop-types';

export default function Dropdown({ types, showType, active }) {
  return (
    <div className={css.dropdown}>
      {types.map(type => (
        <button
          className={css.buttonDropdown}
          type="button"
          key={type}
          active={active}
          onClick={() => showType(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

Dropdown.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string.isRequired),
  showType: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};
