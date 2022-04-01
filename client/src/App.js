import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/game";
import Home from "./components/home";
import Library from "./components/library";
//Bootsrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function App() {
  const [data, setData] = useState(null);

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
            <Nav.Link href="/museum">Museum</Nav.Link>
          </Nav.Item>
        </Nav>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/museum" element={<Library />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
