import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/game";
import Home from "./components/home";
import Library from "./components/library";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </BrowserRouter>
      <p>{data}</p>
    </div>
  );
}

export default App;
