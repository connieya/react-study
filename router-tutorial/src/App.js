import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About.js";
import HistroySample from "./HistroySample.js";
import Home from "./Home.js";
import Profile from "./Profile.js";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>홈</Link>
        </li>
        <li>
          <Link to='/about'>소개</Link>
        </li>
        <li>
          <Link to='/profile/velopert'>velopert 프로필</Link>
        </li>
        <li>
          <Link to='/profile/gildong'>gildong 프로필</Link>
        </li>
        <li>
          <Link to='/history'>History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} exact={true} />
        <Route path={"/about"} element={<About />} />
        <Route path='/profile/:username' element={<Profile />} />
        <Route exact path='/history' element={<HistroySample />} />
      </Routes>
    </div>
  );
}

export default App;
