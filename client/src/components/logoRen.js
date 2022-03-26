import React from "react";

export default function LogoRen() {
    return(
    <mesh> 
        <planeBufferGeometry attach="geometry" />
        <meshMatcapMaterial attach='material' color='limegreen' />
    </mesh>
    )
}