import { BrowserRouter, Route } from 'react-router-dom';
import Dialogs from '../Dialogs';
import Header from '../Header';
import Navbar from '../Navbar';
import Profile from '../Profile';
import s from './App.module.css';
import Settings from '../Settings';
import News from '../News';
import Music from '../Music';

function App() {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header />
        <Navbar />
        <div className={s.content}>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
