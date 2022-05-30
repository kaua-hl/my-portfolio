import React from "react";
import "./assets/css/index.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import useLocomotive from "./hooks/useLocomotive";

function App() {
  useLocomotive();

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
