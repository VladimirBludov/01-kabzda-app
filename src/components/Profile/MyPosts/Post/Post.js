import s from './Post.module.css';

export default function Post({ message, likeCount }) {
  return (
    <li className={s.post}>
      <div className={s.postContainer}>
        <img
          className={s.postAvatar}
          src="https://s0.tchkcdn.com/i/1/1/80937_1802c6cf_1260804286_avatar_1940.jpg"
          alt="Avatar"
        />
        <span className={s.postMessage}>{message}</span>
      </div>
      <div>
        <span className={s.like}>Like</span>
        <span>{likeCount}</span>
      </div>
    </li>
  );
}
