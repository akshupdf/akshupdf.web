import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Vector3 } from 'three';

const WebSymbol = () => {
  const circleRef = useRef();
  const linesRef = useRef();

  useFrame(() => {
    // Rotate the lines in the web symbol
    if (linesRef.current) {
      linesRef.current.rotation.z += 0.005;
    }
  });

  // Circle geometry
  const circleGeometry = (
    <circleBufferGeometry attach="geometry" args={[1.5, 32]} ref={circleRef} />
  );

  // Lines geometry
  const linesGeometry = (
    <group ref={linesRef}>
      {[...Array(12)].map((_, index) => (
        <line key={index} position={new Vector3(0, 1.5, 0)}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attachObject={['attributes', 'position']}
              count={2}
              array={[
                0, 0, 0,
                Math.cos((Math.PI / 6) * index) * 1.5,
                Math.sin((Math.PI / 6) * index) * 1.5,
                0,
              ]}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="#000" linewidth={2} />
        </line>
      ))}
    </group>
  );

  return (
    <>
      <mesh>
        {circleGeometry}
        <meshStandardMaterial attach="material" color="#FFC107" />
      </mesh>
      {linesGeometry}
    </>
  );
};

const CubeWithWebSymbol = () => {
  return (
    <Canvas>
    <ambientLight intensity={0.5} />
    <spotLight intensity={0.8} position={[10, 10, 10]} angle={Math.PI / 8} />

    {/* Cube */}
    <mesh position={[0, 0, 5]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#007BFF" />
    </mesh>

    {/* Web Symbol */}
    <WebSymbol />

    {/* Sphere */}
    <mesh position={[3, 0, 5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#FF5733" />
    </mesh>

    <PerspectiveCamera makeDefault position={[0, 0, 8]} />
    <Text fontSize={1} color="#555">
      Akshupdf.web
    </Text>
    <OrbitControls />
  </Canvas>
  );
};

export default CubeWithWebSymbol;
