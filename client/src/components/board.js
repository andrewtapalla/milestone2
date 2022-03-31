import React, { useState, useEffect } from "react";
import Game from "./game";

function Board() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/library")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
      .catch(err => {
        console.log("warn error");
      });
  }, []);

  let wordGuess = data.map((logo, index) => {
    return (
      <div key={logo.company}>
        <li>{logo.company}</li>
        <li>{logo.hint}</li>
        <br />
      </div>
    );
  });

  return (
    <div id="board">
      <h2>Board from board.js</h2>
      <ul>{wordGuess}</ul>
    </div>
  );
}

export default Board;