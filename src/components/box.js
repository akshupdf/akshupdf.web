import {Canvas} from "@react-three/fiber"
import React, { useRef } from 'react'
import { createRoot } from 'react-dom/client'
import {OrbitControls} from "@react-three/drei"

function Boxa(props) {

    // const [hovered, hover] = useState(false)
    // const [clicked, click] = useState(false)
    const ref = useRef()

    
    return (

        <mesh
      {...props}
      ref={ref}
      scale={'4'}
      
      >
      <boxGeometry args={[1, 1]} />
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial color={'white'} />
    </mesh>
  )
}

createRoot(document.getElementById('root')).render(
  <Canvas>
    <OrbitControls />
    <ambientLight />
    {/* <pointLight position={[10, 10, 10]} /> */}
    <Boxa />
    
  </Canvas>
)


export default Boxa;