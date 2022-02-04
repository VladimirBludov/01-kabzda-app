import MyPosts from './MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo';

export default function Profile() {
  return (
    <div className={s.wrapper}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}
