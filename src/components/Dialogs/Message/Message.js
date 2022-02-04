import s from './Message.module.css';

export default function Message({ message }) {
  return <li className={s.messageItem}>{message}</li>;
}
