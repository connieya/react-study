import React, { useState, useMemo } from "react";
import Conversation from "./containers/Conversation";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import axios from "axios";
import NewsList from "./chap14/NewsList";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/:id' element={<Detail />}></Route>
      </Routes> */}
      <NewsList />
    </>
  );
}

export default App;
