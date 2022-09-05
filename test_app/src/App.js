import React, { useState, useMemo, useCallback } from "react";
import Conversation from "./containers/Conversation";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import axios from "axios";
import NewsList from "./chap14/NewsList";
import Categories from "./chap14/Categories";

function App() {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      {/* <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/:id' element={<Detail />}></Route>
      </Routes> */}
      {console.log("카테고리 = ", category)}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
