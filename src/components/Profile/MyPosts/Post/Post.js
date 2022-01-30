import s from './Post.module.css';

export default function Post({ quantity }) {
  return (
    <li className={s.post}>
      <div className={s.postContainer}>
        <img
          className={s.postAvatar}
          src="https://s0.tchkcdn.com/i/1/1/80937_1802c6cf_1260804286_avatar_1940.jpg"
          alt="Avatar"
        />
        <span>Post {quantity}</span>
      </div>
      <div>
        <button>Like</button>
      </div>
    </li>
  );
}
