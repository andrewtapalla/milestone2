import { Canvas } from '@react-three/fiber'
import { BoxBufferGeometry } from 'three';
import LogoRen from './logoRen'

function Game() {
  return (
    <div className="App">
      <Canvas>
        <LogoRen />
      </Canvas>
      <h1>hello world</h1>
      <h2>this is game</h2>
    </div>
  );
}

export default Game;
