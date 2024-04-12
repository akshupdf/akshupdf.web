import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import st from "../images/st.png"
import st1 from "../images/st1.jpg" 
import st2 from "../images/st2.jpg" 
import st3 from "../images/st3.jpg" 
import st4 from "../images/st4.jpeg"
import st5 from "../images/st5.jpg" 
import st6 from "../images/st6.jpg" 
import st7 from "../images/st7.jpg" 

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
 
export function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)} className="flex justify-center text-xl text-white hover:text-gray-600">About me</AccordionHeader>
        <AccordionBody className="text-xl text-white flex justify-center p-4 italic">
        Hayeee ✨
 Its me Sameeksha Takke a.k.a Atrangi Womaniya <br></br>

 A Social Media Influencer, A Model, Cricketer, Baseball and Softball Player are the words that describe, Sameeksha Sunil Takke, a blogger who writes about fashion, lifestyle and also gives reviews of the products. Coming from a Fashion background I knew I was going to land here some day.

Fashion is an art. I get inspired by colors, textures & compilation. It’s just like building your very own empire. You create something magnificent by using different elements and pour everything you have in your heart.

        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(2)} className="flex justify-center text-xl text-white hover:text-gray-600">
          Some of my popular videos
        </AccordionHeader>
        <AccordionBody>
        <div className="mx-auto  overflow-y-scroll bg-cover bg-fixed  bg-no-repeat shadow-lg sm:w-80 lg:w-[100%]" style={{backgroundImage :   `url(https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1685791148160.jpg-org)` }}>
           
            <div className='grid sm:grid-cols-3 md:grid-cols-m gap-4 lg:p-16 m-4 '>
                <div className='container p-4'>
                    <a href="https://www.youtube.com/watch?v=aVCy5A7jzqY" target="_blank" rel="noreferrer" ><img src={st1} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://www.youtube.com/watch?v=w6bkjxrGae0" target="_blank" rel="noreferrer"><img src={st3} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4'>
                   <a href="https://www.youtube.com/watch?v=Dw-_9eAaIYA" target="_blank" rel="noreferrer"><img src={st} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4 '>
                 <a href="https://www.youtube.com/watch?v=W5p_VQlb4e4" target="_blank" rel="noreferrer">  <img src={st2} alt='/' className='hover:scale-125 ease-in-out duration-300' /></a>
                </div>
                <div className='container p-4  text-center border border-white rounded-2xl'>
            
                 <a href="https://www.youtube.com/@SameekshaTakke13/videos" target="_blank" rel="noreferrer" className="relative inline-block text-lg group mt-20" >
<span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
<span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-200 group-hover:-rotate-180 ease"></span>
<span class="relative">Watch em All</span>
</span>
<span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</a>
                </div>


         
        </div>
        </div>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(3)} className="flex justify-center text-xl text-white hover:text-gray-600">
          Me n Myself
        </AccordionHeader>
        <AccordionBody>
        <div className="flex justify-center">
        <img src={st4} alt="" className="w-60 h-auto m-4 hover:scale-150"></img>
        <img src={st5} alt="" className="w-60 h-auto m-4 hover:scale-150"></img>
        <img src={st6} alt="" className="w-60 h-auto m-4 hover:scale-150"></img>
        <img src={st7} alt="" className="w-60 h-auto m-4 hover:scale-150"></img>
        </div>
        </AccordionBody>
      </Accordion>
    </>
  );
}