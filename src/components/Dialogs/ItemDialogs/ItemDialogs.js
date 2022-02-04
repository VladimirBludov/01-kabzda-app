import { NavLink } from 'react-router-dom';
import s from './ItemDialogs.module.css';

export default function ItemDialogs({ id, name }) {
  return (
    <li className={s.dialogsItem}>
      <NavLink to={`/dialogs/${id}`} activeClassName={s.active}>
        {name}
      </NavLink>
    </li>
  );
}
