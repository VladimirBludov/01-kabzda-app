// import classNames from 'classnames/bind';
import s from './Dialogs.module.css';
import ItemDialogs from './ItemDialogs';
import Message from './Message';

// const cx = classNames.bind(s);
const USERS = [
  { id: 1, name: 'Vova' },
  { id: 2, name: 'Sasha' },
  { id: 3, name: 'Yulj' },
  { id: 4, name: 'Timur' },
  { id: 5, name: 'Sveta' },
  { id: 6, name: 'Alina' },
  { id: 7, name: 'Kamilla' },
  { id: 8, name: 'Vasj' },
];

const MESSAGES = [
  { id: 'id-1', message: 'Message 1' },
  { id: 'id-2', message: 'Message 2' },
  { id: 'id-3', message: 'Message 3' },
  { id: 'id-4', message: 'Message 4' },
  { id: 'id-5', message: 'Message 5' },
];

const usersElements = USERS.map(({ id, name }) => (
  <ItemDialogs key={id} id={id} name={name} />
));

const messagesElements = MESSAGES.map(({ id, message }) => (
  <Message key={id} message={message} />
));

export default function Dialogs() {
  return (
    <div className={s.wrapper}>
      <div className={s.dialogsContainer}>
        <h3 className={s.title}>Dialogs</h3>
        <ul className={s.dialogsList}>{usersElements}</ul>
      </div>
      <div className={s.messagesContainer}>
        <h3 className={s.title}>Messages</h3>
        <ul className={s.messagesList}>{messagesElements}</ul>
      </div>
    </div>
  );
}
