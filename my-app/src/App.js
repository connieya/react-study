import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Bottom from './components/Bottom';
import Home from './components/Home';
import Login from './components/Login';
import Sub from './components/Sub';
import Top from './components/Top';

function App() {
  const [number, setNumber] = useState(1);

  const addNumber = () => {
    setNumber(number + 1);
  };

  const subNumber = () => {
    setNumber(number - 1);
  };
  return (
    <div className="container">
      <div>
        <Link to="/">홈</Link>
      </div>

      <div>
        <Link to="/sub">서브</Link>
      </div>
      <div>
        <Link to="/login">로그인</Link>
      </div>
      <h1>App.js</h1>
      <Routes>
        <Route path="/" exact={true} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Top number={number} />
      <Bottom addNumber={addNumber} subNumber={subNumber} />
    </div>
  );
}

export default App;
