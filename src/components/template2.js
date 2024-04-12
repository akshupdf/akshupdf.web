
import { useState } from "react";
import nw from "../images/nw.jpg"
import nw1 from "../images/nw1.jpg"
import nw2 from "../images/nw2.jpg"
import nw3 from "../images/nw3.jpg"
import nw4 from "../images/nw4.jpg"
import { FaInstagram ,FaYoutube ,FaTwitter, FaLinkedin } from "react-icons/fa";

const Template1 = () =>{

    const [select, setSelect] = useState('home')
   
    const handle = (option) =>{
        setSelect(option)
    }

    return ( 
        <div className=" w-[100%] h-screen flex bg-white">
        <div className="w-[20%] m-auto text-center text-xl ">

            <ul >
                <div className="m-2 cursor-pointer" onClick={() => handle('home') }>Home</div>
                {/* <li className="m-2" onClick={() => handle('about') }>About Me</li> */}
                <li className="m-2 cursor-pointer" onClick={() => handle('skills') }>Skills</li>
               
                <li className="m-2 cursor-pointer" onClick={() => handle('content') }>Content</li>
                <li className="m-2 cursor-pointer"  onClick={() => handle('reach') }>Reach out</li>
            </ul>
        </div>

        {
            select === 'home' &&  <div className="w-[80%] bg-[#8075ff] h-screen flex  ">
       <div className="w-[40%] items-center m-auto text-center italic font-semibold">
       <h1 className="text-white italic font-semibold text-6xl m-2 ">Neeraj Walia</h1>
       <p className="text-xl m-2">I build websites am a Weber</p>
                <p className="text-xl m-2"> Coding made Ez.</p>
       </div>
        <div className="w-[60%]">
        <img src={nw} alt="" className="h-screen w-full"></img>
        </div>
       </div>
        }

        {
            select === 'skills' && <div className="w-[80%] h-screen text-white  bg-black grid grid-cols-4 gap-4 overflow-hidden">

            <div className="m-auto text-center h-auto w-60 text-xl rounded-xl shadow-xl cursor-pointer shadow-white hover:scale-150 bg-gray-500 ">
            <h1 className="text-2xl m-2">Frontend</h1>
            <div className="flex flex-wrap ">
         <span className="m-2 border p-2 rounded-lg">HTML</span> 
         <span className="m-2 border p-2 rounded-lg">CSS </span>
         <span className="m-2 border p-2 rounded-lg">Tailwind</span>
         <span className="m-2 border p-2 rounded-lg">Javascript</span>
         <span className="m-2 border p-2 rounded-lg">Typescript</span>
         <span className="m-2 border p-2 rounded-lg">React Js</span>
         <span className="m-2 border p-2 rounded-lg">Next Js 13</span> </div>
            </div>
            <div className="m-auto text-center h-auto w-60 text-xl rounded-xl shadow-xl cursor-pointer shadow-white hover:scale-150 bg-gray-500 ">
            <h1 className="text-2xl m-2">Backend</h1>
            <div className="flex flex-wrap ">
         <span className="m-2 border p-2 rounded-lg">Node Js</span> 
         <span className="m-2 border p-2 rounded-lg">Express Js </span>
         <span className="m-2 border p-2 rounded-lg">BUN Js</span>
         <span className="m-2 border p-2 rounded-lg">Elysia</span>
         <span className="m-2 border p-2 rounded-lg">Next Auth</span>
            </div>
            </div>
            <div className="m-auto text-center h-auto w-60 text-xl rounded-xl shadow-xl cursor-pointer shadow-white hover:scale-150 bg-gray-500 ">
            <h1 className="text-2xl m-2">Database</h1>
            <div className="flex flex-wrap ">
         <span className="m-2 border p-2 rounded-lg">MySql</span> 
         <span className="m-2 border p-2 rounded-lg">MongoDB </span>
         <span className="m-2 border p-2 rounded-lg">PostgreSQL</span>
         <span className="m-2 border p-2 rounded-lg">Redis</span>
         <span className="m-2 border p-2 rounded-lg">Elastic Search</span>
            </div>
            </div>
            <div className="m-auto text-center h-auto w-60 text-xl rounded-xl shadow-xl cursor-pointer shadow-white hover:scale-150 bg-gray-500 ">
            <h1 className="text-2xl m-2">Devops</h1>
            <div className="flex flex-wrap ">
         <span className="m-2 border p-2 rounded-lg">Docker</span> 
         <span className="m-2 border p-2 rounded-lg">Kubernetes </span>
         <span className="m-2 border p-2 rounded-lg">GIT</span>
         <span className="m-2 border p-2 rounded-lg">Jenkins</span>
         <span className="m-2 border p-2 rounded-lg">Ansible</span>
         <span className="m-2 border p-2 rounded-lg">Terraform</span>
         <span className="m-2 border p-2 rounded-lg">AWS</span> </div>
            </div>
           
            </div>
        }

        {
            select === 'content' &&  <div className="mx-auto  overflow-y-scroll bg-cover bg-fixed  bg-no-repeat shadow-lg sm:w-80 lg:w-[100%]" style={{backgroundImage :   `url(https://pbs.twimg.com/media/GI5SBVVaIAAmAEt?format=jpg&name=large)` }}>
            <h1 className="text-center text-4xl text-white m-2">Some Of My Popular Videos</h1>
           <div className='grid sm:grid-cols-3 md:grid-cols-m gap-4 lg:p-16 m-4 '>
          
               <div className='container p-4'>
                   <a href="https://www.youtube.com/watch?v=lFqxenB9CX8" target="_blank" rel="noreferrer" ><img src={nw1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
               </div>
               <div className='container p-4'>
                  <a href="https://www.youtube.com/watch?v=PXcYBhvYc30" target="_blank" rel="noreferrer"><img src={nw2} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
               </div>
               <div className='container p-4'>
                  <a href="https://www.youtube.com/watch?v=SHT0y9Gq_rk" target="_blank" rel="noreferrer"><img src={nw3} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
               </div>
               <div className='container p-4 '>
                <a href="https://www.youtube.com/watch?v=7OOgYXEiLk0" target="_blank" rel="noreferrer">  <img src={nw4} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
               </div>
               <div className='container p-4  text-center border border-white rounded-2xl'>
           
                <a href="https://www.youtube.com/@ezsnippat/videos" target="_blank" rel="noreferrer" className="relative inline-block text-lg group mt-20" >
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-black group-hover:-rotate-180 ease"></span>
<span class="relative">Watch em All</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
               </div>


        
       </div>
       </div>
        }

        {
            select === 'reach' && <div className="w-[80%] h-screen text-white flex  bg-gray-600 ">
            <div className="w-[15%]  m-auto">
        <ul className="text-white flex">
        <li ><a href="https://www.instagram.com/ezsnippet" target="_blank" rel="noreferrer"> <FaInstagram className="w-10 h-10 m-2"/></a></li>
        <li><a href="https://www.linkedin.com/in/ezsnippet?originalSubdomain=in" target="_blank" rel="noreferrer"> <FaLinkedin className="w-10 h-10 m-2"/></a></li>
        <li><a href="https://www.youtube.com/@ezsnippat/" target="_blank" rel="noreferrer"><FaYoutube className="w-10 h-10 m-2"/></a></li>
        <li><a href="https://www.twitter.com/ezsnippet" target="_blank" rel="noreferrer"><FaTwitter className="w-10 h-10 m-2"/></a></li>
       </ul>
       
       </div>
            </div>
        }
      
        </div>

       
        
    )}

export default Template1;