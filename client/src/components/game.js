import LogoRender from "./logoRen";
import Board from "./board";

function Game() {
  return (
    <div className="App">
      <div>
        <LogoRender />
      </div>
      <h1>Guess that logo</h1>
        <Board />
      <div id="answer">
      </div>
      <div>
        <h2>keyboard section</h2>
      </div>
    </div>
  );
}

export default Game;
