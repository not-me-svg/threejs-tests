import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';

// import { useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three/src/loaders/TextureLoader";
// import texture from "./../assets/map.jpeg";

export const Box = () => {

    // const colorMap = useLoader(TextureLoader, texture);

    return (

        <Canvas className="tjs__canvas">
            <OrbitControls enableZoom={ false } />
            <ambientLight intensity={ 0.5 } />
            <directionalLight position={ [-2, 5, 2] } intensity={ 1 } />

            <Suspense fallback={ null }>
                <mesh rotation={ [90, 0, 20] }>
                    <boxBufferGeometry attach="geometry" args={ [3, 3, 3] } />
                    <meshNormalMaterial attach="material" />
                </mesh>
            </Suspense>
        </Canvas>

    );
};
