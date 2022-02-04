import s from './ProfileInfo.module.css';

export default function ProfileInfo(second) {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <img
          className={s.headerImage}
          src="https://i.ucrazy.ru/files/i/2007.6.29/thumbs/celtic_myst.jpg"
          alt="Start"
        />
      </div>
      <div className={s.main}>
        <div className={s.user}>
          <img
            className={s.avatar}
            src="https://faunistics.com/wp-content/uploads/2020/12/2-1-735x573.jpg"
            alt="Papilon"
          />
          <div className={s.description}>Description</div>
        </div>
      </div>
    </div>
  );
}
