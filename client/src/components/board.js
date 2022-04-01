import React, { useState, useEffect } from "react";

export let sourcey;

function Board() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/library/game")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log("warn error");
      });
  }, []);

  let wordGuess = data.map((logo, index) => {
    return (sourcey = logo.url);
  });

  return (
    <div id="board">
      <h2>Board from board.js</h2>
      <ul>{wordGuess}</ul>
    </div>
  );
}

export default Board;
