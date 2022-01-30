import Header from '../Header';
import Navbar from '../Navbar';
import Profile from '../Profile';
import s from './App.module.css';

function App() {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
