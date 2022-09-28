import './App.css';
import Header from './Components/Header';
import { Link, Route, Routes } from "react-router-dom"
import Articles from './Components/Articles';
import { Home } from './Components/Home';
import Topics from './Components/Topics';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Articles</Link></li>
          <li><Link to ="/topics">Topics</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<Articles />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/topics/:topic" element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
