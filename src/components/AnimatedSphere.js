import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';

export const AnimatedSphere = () => {
  return (
        <Canvas className="tjs__canvas">
          <OrbitControls enableZoom={ false } />
          <ambientLight intensity={ 0.5 } />
          <directionalLight position={ [-2, 5, 2] } intensity={ 1 } />

          <Suspense fallback={ null }>
            <Sphere visible args={ [1, 100, 200] } scale={ 2 }>
                <MeshDistortMaterial
                  color="#8352FD"
                  attach="material"
                  distort={ 0.3 }
                  speed={ 1.5 }
                  roughness={ 1 }
                />
            </Sphere>
          </Suspense>
        </Canvas>
  );
};
