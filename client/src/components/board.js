import React, { useState, useEffect } from "react";
import Game from "./game";

function Board() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/library")
      .then(res => res.json())
      .then(data => {
        console.log(data.company);
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
      <ul>{wordGuess}</ul>
    </div>
  );
}

export default Board;
