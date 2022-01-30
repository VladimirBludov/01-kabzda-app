import s from './Header.module.css';

export default function Header() {
  return (
    <header className={s.header}>
      <img
        className={s.logo}
        width={100}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtnqJC_pbyrULA6yp3ifRGkCRijOXoXDf-qA&usqp=CAU"
        alt="Logo"
      />
    </header>
  );
}
