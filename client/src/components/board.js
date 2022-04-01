import React, { useState, useEffect } from "react";

export let sourcey;
export let compAnswer;

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
    return (sourcey = logo.url), (compAnswer = logo.company), logo.hint;
  });

  return (
    <div id="board">
      <ul>{wordGuess}</ul>
    </div>
  );
}

export default Board;
