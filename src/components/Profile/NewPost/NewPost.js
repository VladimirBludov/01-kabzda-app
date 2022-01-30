import s from './NewPost.module.css';

export default function NewPost() {
  return (
    <div className={s.newPost}>
      <textarea></textarea>
      <button>Add post</button>
    </div>
  );
}
