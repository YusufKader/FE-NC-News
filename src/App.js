import './App.css';
import Header from './Components/Header';
import { Route, Routes } from "react-router-dom"
import Articles from './Components/Articles';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="articles" element={<Articles />}></Route>
      </Routes>
    </div>
  );
}

export default App;
