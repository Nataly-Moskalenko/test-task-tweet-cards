import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ImSpinner } from 'react-icons/im';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/">
          Home
        </NavLink>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/tweets">
          Tweets
        </NavLink>
      </nav>
      <main>
        <Suspense
          fallback={
            <div className={css.loader}>
              <span className={css.loaderSpan}>Loading...</span>
              <ImSpinner className={css.loaderIcon} />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
