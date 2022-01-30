import s from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={s.nav}>
      <ul className={s.refsList}>
        <li className={s.item}>
          <a className={`${s.link} ${s.active}`} href="#s">
            Profile
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#s">
            Messages
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#s">
            News
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#s">
            Music
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="#s">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
