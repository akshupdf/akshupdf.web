
import React, { Suspense , useState} from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../App.css";
import ModelViewer from "../components/bottles";
import ModelViewerV2 from "./test";


function Menu2 () {


    const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };


    return (
        <div>
    <div className="flex justify-center">
    <div className='w-[80vh] h-[60vh]  shadow-2xl  p-10 rounded-xl italic'>
    <Canvas camera={{  fov: 40 }}>
    <Suspense fallback={null}>
    <ambientLight intensity={0.5} />


<directionalLight intensity={0.5} position={[2.5, 8, 5]} />

<ModelViewer />
<OrbitControls enableZoom={true}  />
    </Suspense>

</Canvas>


    </div> 
    <div  className='w-[80vh] h-[60vh]  shadow-2xl  p-10 rounded-xl italic ml-[10vh]'>
        <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
        </ul>
        <p>Test test   Test testTest testTest testTest testTest testTest testTest testTest testTest testTest testTest testTest testTest testTest testTest testTest test </p>
        <button onClick={handleToggleDetails}>More details</button>

        {showDetails && (
        <div className="mt-4">
          <p>Additional details go here.</p>
        </div>
      )}
    </div>
    </div>
    <div className='w-[80vh] h-[60vh]  shadow-2xl  p-10 rounded-xl italic'>
    <Canvas camera={{  fov: 40 }}>
    <Suspense fallback={null}>
    <ambientLight intensity={0.5} />


<directionalLight intensity={0.5} position={[2.5, 8, 5]} />

<ModelViewerV2 />
<OrbitControls enableZoom={true}  />
    </Suspense>

</Canvas>
    </div>

    
    </div> )
}

export default Menu2;