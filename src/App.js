import React, { useState } from "react";
import "./assets/css/index.css";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Home from "./pages/Home/Home";

function App() {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Home />
        </>
      )}
    </>
  );
}

export default App;
