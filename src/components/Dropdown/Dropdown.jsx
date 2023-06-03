import css from './Dropdown.module.css';

export default function Dropdown({ types, showType, active }) {
  return (
    <div className={css.dropdown}>
      {types.map((type) => (
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
