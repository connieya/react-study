import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Sub from './components/Sub';

function App() {
  return (
    <div>
      <div>
        <Link to="/">홈</Link>
      </div>
      <div>
        <Link to="/sub">서브</Link>
      </div>
      <div>
        <Link to="/login">로그인</Link>
      </div>
      <Routes>
        <Route path="/" exact={true} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <h1>App.js</h1>
    </div>
  );
}

export default App;
