import { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";

function App() {
  // console.log(authService);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />;
      <footer>&copy; Cony Twitter {new Date().getFullYear()} </footer>
    </>
  );
}

export default App;
