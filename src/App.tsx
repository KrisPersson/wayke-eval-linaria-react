import { useState } from "react";

import Header from "./components/Header/index";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Elbil from "./views/Elbil/Elbil";
import Home from "./views/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/elbil" element={<Elbil />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
