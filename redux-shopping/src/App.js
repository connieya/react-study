import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div>
      <h1>dd</h1>
      <Header />
      <Routes>
        <Route path='/' exact element={<ProductListing />}></Route>
        <Route path='/product/:productId' element={<ProductDetails />}></Route>
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
