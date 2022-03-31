import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/game";
import Home from "./components/home";
import Library from "./components/library";
//Bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Container className="background">
        <Nav
          className="justify-content-center"
          defaultActiveKey="/home"
          as="ul"
        >
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/game">Game</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/library">Library</Nav.Link>
          </Nav.Item>
        </Nav>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </BrowserRouter>
        <p>{data}</p>
      </Container>
    </div>
  );
}

export default App;
