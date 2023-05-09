import React from "react";
import "./styles/App.css";
import Home from "./components/pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddProduct from "./components/products/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addProduct" component={AddProduct} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
