# router

- npm i react-router-dom
- npm i qs


## route

`App.js`

```javascript
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About.js";
import Home from "./Home.js";

function App() {
  return (
    <div>
      <h1>App </h1>
      <Routes>
        <Route path='/' element={<Home></Home>} exact={true} />
        <Route path='/about' element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
```