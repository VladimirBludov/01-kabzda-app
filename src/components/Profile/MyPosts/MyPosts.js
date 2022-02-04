import s from './MyPosts.module.css';
import NewPost from './NewPost';
import Post from './Post';

const POSTS = [
  { id: 'id-11', message: 'Post 1', likeCount: 10 },
  { id: 'id-22', message: 'Post 2', likeCount: 15 },
  { id: 'id-33', message: 'Post 3', likeCount: 21 },
  { id: 'id-44', message: 'Post 4', likeCount: 44 },
  { id: 'id-55', message: 'Post 5', likeCount: 5 },
];

const posts = POSTS.map(({ id, message, likeCount }) => (
  <Post key={id} message={message} likeCount={likeCount} />
));

export default function MyPosts() {
  return (
    <div>
      <NewPost />
      <ul className={s.myPosts}>{posts}</ul>
    </div>
  );
}
