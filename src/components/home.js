import React from "react";
// import web from "../images/web.gif";
// import port from '../images/portfolio.gif'
import port1 from "../images/port1.gif";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import Cube from "./Cube";
import "../App.css";
// import ImageSlider from "../components/slider.js";
// import * as THREE from 'three';
// import {  VIDEOS} from "../components/data.js";
import ModelViewer from "../components/bottles";
import ImageSliderV2 from "./sliderv2";
// var box = new THREE.Box3().setFromObject(mesh);
import slide_image_1 from "../images/img_1.jpg";
import slide_image_3 from "../images/img_3.jpg";
import slide_image_5 from "../images/img_5.jpg";
import slide_image_8 from "../images/img_8.jpg";
import { Link } from "react-router-dom";

function Home() {
  // const CenterObject = () => {
  //     box.center(mesh.position);
  //     mesh.localToWorld(box);
  //     mesh.position.multiplyScalar(-1);
  // }

  return (
    <div style={{backgroundImage : `url(https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/599a03f7-f330-4177-8353-290de0394dde.png)`}} className="bg-fixed">
      <div className="lg:flex sm:flex-wrap">
        <div className="w-[40%] m-auto">
      
          <h1 className="text-4xl italic text-right mb-10  font-bold">
    
            Elevate Your Online Presence!  </h1>

            <p className=" text-right text-2xl mx-auto mb-10 italic  indent-8" >Welcome to <span className=" font-bold">Akshupdf.web</span>, where students and professionals can effortlessly
             showcase projects and experiences on one captivating page. Join us today and stand out 
             with your personalized bio website!</p>
         
        </div>
        {/* <div className='w-[60vh] h-[60vh] justify-center  mx-auto text-xl p-10 rounded-xl italic mt-10 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer'> */}
        <div className="lg:w-[100vh] lg:h-[80vh] sm:w-50 sm:h-auto justify-center  mx-auto text-xl p-10 rounded-xl italic cursor-pointer">
          <Canvas camera={{ position: [6, 4, 5], fov: 10 }}>
            <ambientLight intensity={0.5} />

            <directionalLight intensity={1} position={[5, 5, 5]} />

            <ModelViewer />

            <OrbitControls enableZoom={true} />
          </Canvas>
        </div>
      </div>
      <div className="lg:flex sm:flex-wrap mt-[12vh] m-auto items-center ">
      <div>
          <img src={port1} alt="" className="lg:flex sm:hidden" />
        </div>
        <div className="lg:w-[80vh]  sm:w-50 h-80 sm:mb-10 shadow-xl backdrop-blur-2xl text-center m-auto mt-10 p-10 rounded-xl italic sm:overflow-auto lg:overflow-hidden">
          <h1 className="text-xl  brightness-100">
            Showcase your skills and expertise with our tailored professional
            profile website service. Create a stunning online presence to
            highlight your achievements and connect with potential employers and
            clients. Take control of your career narrative today!
          </h1>
          <div className="w-[30vh]  mx-auto mt-10 text-center">
            <Link to="/contact" className="relative inline-block text-lg group">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span class="relative">Contact Us</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
        </div>
       
      </div>
      <div className="container mt-[15vh] sm:hidden lg:grid m-auto items-center">
        <h1 className="w-[40vh] h-[10vh] m-auto text-center text-5xl font-bold sm:justify-center italic underline">
          Templates
        </h1>
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
  );
}
export default Home;
