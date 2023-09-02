import React from "react";
import web from '../images/web.gif'
// import port from '../images/portfolio.gif'
import port1 from '../images/port1.gif'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
// import Cube from "./Cube";
import "../App.css";
// import ImageSlider from "../components/slider.js";
// import * as THREE from 'three';
// import {  VIDEOS} from "../components/data.js";
import ModelViewer from "../components/bottles";
import ImageSliderV2 from "./sliderv2";
// var box = new THREE.Box3().setFromObject(mesh);
import slide_image_1 from '../images/img_1.jpg';
import slide_image_3 from '../images/img_3.jpg';
import slide_image_5 from '../images/img_5.jpg';
import slide_image_8 from '../images/img_8.jpg';
import { Link } from "react-router-dom";

function Home () {

    // const CenterObject = () => {
    //     box.center(mesh.position);
    //     mesh.localToWorld(box);
    //     mesh.position.multiplyScalar(-1);
    // }
      
    return(
        <div >
            <div className='lg:flex sm:flex-wrap'>
            <div className='w-[50%]'>
                <img src={web} alt="" className="lg:flex sm:hidden "/></div>
            {/* <div className='w-[60vh] h-[60vh] justify-center  mx-auto text-xl p-10 rounded-xl italic mt-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer'> */}
            <div className='lg:w-[100vh] lg:h-[80vh] sm:w-50 sm:h-auto justify-center  mx-auto text-xl p-10 rounded-xl italic mt-20 cursor-pointer'>
   
            {/* <h1 className="text-white">3D Object</h1>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
             */}
             <h1 className="text-4xl italic text-center"> Elevate Your Online Presence!</h1>

             <Canvas camera={{position : [4,0,5] ,fov: 10}}>
  
    <ambientLight intensity={0.5} />


<directionalLight intensity={1} position={[5, 5, 5]} />


      <ModelViewer />
    
<OrbitControls enableZoom={true}  />


</Canvas>
                
                
            </div>

            </div>
            <div className='lg:flex sm:flex-wrap mt-[12vh] '>
                <div className='lg:w-[80vh] lg:h-[70vh] sm:w-50 sm:h-80 sm:mb-10 shadow-xl  mx-auto mt-10 p-10 rounded-xl italic sm:overflow-auto lg:overflow-hidden'>
                <h1 className="text-xl ">
Are you a seasoned professional looking to showcase your skills, expertise, and 
accomplishments to the world? Look no further than our cutting-edge profile website
 service tailored exclusively for professionals like you! Your online presence matters
  now more than ever, and with our platform, you can create a stunning and personalized 
  digital identity that highlights your unique talents and achievements. 
  Seamlessly build an impressive portfolio with a sleek and user-friendly design,
   making it easier for potential employers, clients, or collaborators to find and 
   connect with you. Take control of your professional narrative and boost your career
    opportunities by establishing a captivating online presence. Join us today and let 
    your accomplishments shine on the global stage!</h1>
    <div className="w-[30vh] h-[20vh] mx-auto mt-10 text-center">
    <Link to="/contact" className="relative inline-block text-lg group">
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
<span class="relative">Contact Us</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link></div>

                </div>
                <div>
                    <img src={port1} alt="" className="lg:flex sm:hidden"/>
                </div>
            </div>
            <div className='container mt-[15vh] sm:hidden lg:grid '>
                <h1 className='w-[40vh] h-[10vh] mx-auto text-5xl font-bold sm:justify-center italic underline'>Templates</h1>
        <ImageSliderV2 />
      </div>
      <div className="lg:hidden sm:flex-shrink w-50 h-80 overflow-auto text-center">
      <h1 className="bold m-4 ">Templates</h1>
      <div className="relative">
        <img src={slide_image_1} alt=""></img>
        <img src={slide_image_3} alt=""></img>
        <img src={slide_image_5} alt=""></img>
        <img src={slide_image_8} alt=""></img>
        </div>
      </div>

      
            
        </div>
    )
}
export default Home;