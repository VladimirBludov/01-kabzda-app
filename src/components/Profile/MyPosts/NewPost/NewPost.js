import s from './NewPost.module.css';

export default function NewPost() {
  return (
    <div className={s.newPost}>
      <textarea className={s.message}></textarea>
      <button className={s.button}>Add post</button>
    </div>
  );
}
