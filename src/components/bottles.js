import React, { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import { OrbitControls , useAnimations ,useGLTF} from "@react-three/drei";

const ModelViewer = () => {
  const Anime = () =>{
    const group = useRef();
    const { scene, animations } = useGLTF("./plane.glb", true);
    const { actions, mixer } = useAnimations(animations, group);
 
    useEffect(() => {
      actions["Take 001"].play();
    }, [mixer]);
  
    return <primitive ref={group} object={scene} dispose={null} />
      }

  return (
    <Anime />
  

    // <group ref={modelRef}>
    //   {renderNodes(gltf.scene.children)}
    // </group>
  );
};

export default ModelViewer;
