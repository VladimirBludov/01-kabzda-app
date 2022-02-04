import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.refsList}>
        <li className={s.item}>
          <NavLink to="/profile" className={s.link} activeClassName={s.active}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/news" className={s.link} activeClassName={s.active}>
            News
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/music" className={s.link} activeClassName={s.active}>
            Music
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/settings" className={s.link} activeClassName={s.active}>
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
