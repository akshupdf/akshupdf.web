import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <sphereGeometry args={[2,32,32]}/>
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <color attach="background" args={["#FFFFFF"]} />
          <Text ref={textRef} fontSize={1} color="#555" font="italic">
            Akshupdf.web
          </Text>
       
        </RenderTexture>
        
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;