// must be first for a fallback if logo img doesnt work must wrap Suspense around the LogoRen call to prevent it from breaking
import React, { Suspense } from "react";

import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { test } from './randomizer'
import { useRef } from ''

//React Element

function Box() {
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime();
  });
  const myMesh = React.useRef();
  const texture = useLoader(TextureLoader, test);

  const ref = useRef()
  useFrame(() => {
    ref.current.material.zoom = 1// 1 and higher
    ref.current.material.grayscale = 0 // between 0 and 1
  })

  return (
    <mesh ref={myMesh} rotation={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[5, 4, 0.1]} />
      <meshStandardMaterial attach="material" map={texture}/>
      <Image ref={ref} url="test" />
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
