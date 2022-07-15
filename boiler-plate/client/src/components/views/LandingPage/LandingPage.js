import React, { useEffect } from "react";
import axiox from "axios";

const LandingPage = () => {
  useEffect(() => {
    axiox.get("/api/hello").then((response) => console.log(response.data));
  }, []);
  return (
    <div>
      <h1>LandingPage</h1>
    </div>
  );
};

export default LandingPage;
