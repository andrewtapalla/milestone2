// must be first for a fallback if logo img doesnt work must wrap Suspense around the LogoRen call to prevent it from breaking
import React, { Suspense } from "react";

import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

//Decade Switcher Logic
let params = [
  "https://logogame.s3.us-west-1.amazonaws.com/80sTacoBell.png",
  "https://logogame.s3.us-west-1.amazonaws.com/80sPringles.png",
  "https://logogame.s3.us-west-1.amazonaws.com/80sGatorade.png",
  "https://logogame.s3.us-west-1.amazonaws.com/80sNBC.png",
  "https://logogame.s3.us-west-1.amazonaws.com/80sDiscovery.png",
];
let counter = 0;
let test = params[Math.floor(Math.random() * params.length)];

//Decade Switch button
export function decadeSwitch() {
  //---this block of code was to update test var to new value---
  // test = params[Math.floor(Math.random() * params.length)];
  // counter += 1;
  // console.log(test);
  window.location.reload(false);
}

//React Element

function Box() {
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime();
  });
  const myMesh = React.useRef();
  const texture = useLoader(
    TextureLoader,
    params[Math.floor(Math.random() * params.length)]
  );

  return (
    <mesh ref={myMesh} rotation={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 0.1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export function LogoRender() {
  return (
    <Canvas className="canvas">
      <OrbitControls enableZoom={true} />
      <ambientLight intensity={1} />
      <directionalLight position={[1, 1, 0]} intensity={1} />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  );
}
