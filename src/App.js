import { Header } from './components/Header'
import { Scoreboard } from './components/Scoreboard';
import { Comment } from './components/Comment';
import { Buttons } from './components/Buttons';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
          <Header />
          <Scoreboard />
          <Comment />
          <Buttons />
          <Footer />
    </div>
  );
}

export default App;