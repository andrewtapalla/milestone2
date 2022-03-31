import { LogoRender } from "./logoRen";
import Tile from "./tile";
import { decadeSwitch, Randomizer } from "./randomizer";

function Game() {
  return (
    <div>
      <br />
      <div>
        <LogoRender />
      </div>
      <br />
      <button onClick={decadeSwitch}>Decade Switch</button>
      <h1>Guess that logo!</h1>
      <Tile />
      <div id="answer"></div>
      <div>
        <h2>keyboard section</h2>
      </div>
    </div>
  );
}

export default Game;
