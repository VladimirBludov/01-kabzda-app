import MyPosts from './MyPosts';
import NewPost from './NewPost';
import s from './Profile.module.css';

export default function Profile() {
  return (
    <div className={s.profile}>
      <div>
        <img
          className={s.start}
          src="https://i.ucrazy.ru/files/i/2007.6.29/thumbs/celtic_myst.jpg"
          alt="Start"
        />
      </div>
      <div>
        <img
          className={s.papilon}
          src="https://faunistics.com/wp-content/uploads/2020/12/2-1-735x573.jpg"
          alt="Papilon"
        />
        <div className={s.description}></div>
      </div>
      <NewPost />
      <MyPosts />
    </div>
  );
}
