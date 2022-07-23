import { useState } from "react";
import AppRouter from "./Router";
import { authService } from "../fbase";
import Parent from "./Parent";

function App() {
  console.log(authService);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />;
      <footer>&copy; Cony Twitter {new Date().getFullYear()} </footer>
      <Parent />
    </>
  );
}

export default App;
