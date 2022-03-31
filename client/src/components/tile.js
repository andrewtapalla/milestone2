import React from "react";

function Tile() {
  return (
    <div id="tile">
      <form>
        <label>
          <input type="text" name="guess" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Tile;
