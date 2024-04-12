import st from "../images/st.png"
import { FaInstagram,FaFacebook ,FaYoutube ,FaTwitter } from "react-icons/fa";
import { AccordionCustomAnimation } from "./accordion";

const Template = () =>{
return (
    <div className="h-auto w-[100%]">


    <div className="w-[80%] h-auto m-10 shadow-2xl rounded-2xl mx-auto bg-black ">
    <div className="text-white h-[30rem] w-full pt-10  mx-auto rounded-2xl  bg-cover bg-no-repeat" style={{backgroundImage : `url(${st})`}}>
    
    <h1 className="text-6xl p-2"> Sameeksha Takke</h1>
    <p className="text-2xl p-2 mb-40"> Internet personality</p>
    <div className="bg-white  rounded-full h-60 w-60 mx-auto overflow-hidden">
    <img src="https://pbs.twimg.com/media/F8cqdz0WwAAUvNJ?format=jpg&name=large" alt="" ></img>
          
        </div>
        </div>
        <div className="w-[15%] mt-32 mx-auto">
        <ul className="text-white flex">
        <li ><a href="https://www.instagram.com/sameekshatakke13" target="_blank" rel="noreferrer"> <FaInstagram className="w-10 h-10 m-2"/></a></li>
        <li><a href="https://www.facebook.com/sameekshatakke13" target="_blank" rel="noreferrer"> <FaFacebook className="w-10 h-10 m-2"/></a></li>
        <li><a href="https://www.youtube.com/@SameekshaTakke13/" target="_blank" rel="noreferrer"><FaYoutube className="w-10 h-10 m-2"/></a></li>
        <li><a href="https://www.twitter.com/sameekshatakke" target="_blank" rel="noreferrer"><FaTwitter className="w-10 h-10 m-2"/></a></li>
       </ul>
       
       </div>
        
       <AccordionCustomAnimation />
    </div>


    </div>
)
}

export default Template;