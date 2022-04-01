import {LogoRender} from "./logoRen";
import Board from "./board";
import {decadeSwitch} from "./logoRen";
import KeyboardWindow from "./keyboard";

function Game() {
  return (
    <div>
      <br />
      <h4>Guess the logo:</h4>
      <p>(Click and scroll on the logo to take a closer look)</p>
      <div>
        <LogoRender />
      </div>
      <br />
      <button onClick={decadeSwitch} className="decadeBtn">Switch Decade</button>
      <br />
      <Board />
      <div id="answer"></div>
      <div>
        <KeyboardWindow />
      </div>

    </div>
  );
}

export default Game;