import React, { useState, useMemo, useCallback } from "react";
import Conversation from "./containers/Conversation";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import axios from "axios";
import NewsList from "./chap14/NewsList";
import Categories from "./chap14/Categories";
import NewsPage from "./chap14_router/NewsPage";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      {/* 노마드 코드 react - redux */}
      {/* <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/:id' element={<Detail />}></Route>
      </Routes> */}
      {/* chap 14 . 라우터 적용하기 전 */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
      {/*  chap 14 . 라우터 적용하기 */}
      {/* <Routes>
        <Route path='/:category?' element={<NewsPage />}></Route>
      </Routes> */}
    </>
  );
}

export default App;
