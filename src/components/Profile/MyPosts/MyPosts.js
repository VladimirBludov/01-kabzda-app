import s from './MyPosts.module.css';
import Post from './Post';

export default function MyPosts() {
  return (
    <ul className={s.myPosts}>
      <Post quantity={1} />
      <Post quantity={2} />
      <Post quantity={3} />
      <Post quantity={4} />
      <Post quantity={5} />
    </ul>
  );
}
