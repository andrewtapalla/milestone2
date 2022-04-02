import {LogoRender} from "./logoRen";
import Board from "./board";
import { KeyboardWindow } from "./keyboard";

function Game() {
  return (
    <div>
      <br />
      <h3>Guess the logo:</h3>
      <p>(Click and scroll on the logo to take a closer look)</p>
      <div>
        <LogoRender />
      </div>
      <br />
      <h5>Here's a hint:</h5>
      <Board />
      <div id="answer"></div>
      <div>
        <KeyboardWindow />
      </div>

    </div>
  );
}

export default Game;