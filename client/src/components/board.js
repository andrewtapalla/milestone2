import React, { useState, useEffect } from "react";

function Board() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/library")
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
      .catch(err => {
        console.log("warn error");
      });
  }, []);

  let wordGuess = data.map((logo, index) => {
    return logo.company, logo.hint;
  });

  return (
    <div id="board">
      <h2>Board from board.js</h2>
      <ul>{wordGuess}</ul>
    </div>
  );
}

export default Board;
