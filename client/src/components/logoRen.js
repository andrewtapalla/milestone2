// must be first for a fallback if logo img doesnt work must wrap Suspense around the LogoRen call to prevent it from breaking
import React, { Suspense } from "react";

import test from "../images/test.jpeg";

import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime();
  });
  const myMesh = React.useRef();
  const texture = useLoader(TextureLoader, test);

  return (
    <mesh ref={myMesh} rotation={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 0.1]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function LogoRender() {
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
