import React, { Suspense, useState } from "react";

const Splitme = React.lazy(() => import("./SplitMe"));

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible((prevVisible) => !prevVisible);
  };
  return (
    <div>
      <p onClick={onClick}>Hello React !</p>
      <Suspense fallback={<div>Loading ...</div>}>
        {visible && <Splitme />}
      </Suspense>
    </div>
  );
};

export default App;
