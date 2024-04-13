import { useState } from 'react';
import logo from '../images/logo4.png'
import { Link } from "react-router-dom"


function Nav () {
    const [show, setShow] = useState(false)
    const toggleChecked = () => setShow((value) => !value);
    const clicked = () => {
        setShow(false)
    }

    return(
        <div  className='sticky top-0 z-10  backdrop-filter backdrop-blur-lg bg-opacity-30'>
            
<nav
        className="flex items-center ml-0 flex-wrap py-4 lg:px-12   backdrop-blur-xl">
        <div className="flex justify-between lg:w-auto w-full  pl-6 pr-2  pb-5 lg:pb-0">
            <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                
                <img src={logo} alt=""  className='w-[25vh] h-[10vh]'></img>
            </div>
            <div className="block lg:hidden ">
                <button
                    id="nav"
                    className="flex items-center px-3 py-2  rounded text-black  hover:text-black hover:border-black"onClick={toggleChecked}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
        </div>
    
        <div className="menu w-full lg:block flex-grow  lg:items-center lg:w-auto lg:px-3 px-8">
        {
            show && <div className="text-xl font-bold  lg:flex-grow text-right fixed bg-black text-white p-4">
                {/* <a href="/"
                   className="block mt-4 lg:inline-block lg:mt-0 mr-2">
                    Home
                </a> */}

                <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 mr-2"  onClick={clicked}>Home</Link>
                <Link to="/pricing" className="block mt-4 lg:inline-block lg:mt-0 mr-2" onClick={clicked}>Pricings</Link>
                <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 mr-2" onClick={clicked}>About Us</Link>
                <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 mr-2" onClick={clicked}>Contact Us</Link>
                {/* <a href="/pricing"
                   className=" block mt-4 lg:inline-block lg:mt-0 mr-2">
                    Pricings
                </a> */}
                {/* <a href="/about"
                   className="block mt-4 lg:inline-block lg:mt-0  mr-2">
                    About Us
                </a>
                <a href="/contact"
                   className="block mt-4 lg:inline-block lg:mt-0 mr-2">
                    Contact Us
                </a> */}
            </div>
        }
            <div className='lg:flex sm:hidden'>
            <div className="text-xl font-bold text-black lg:flex-grow text-right">
                {/* <a href="/"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2">
                    Home
                </a>
                
                <a href="/pricing"
                   className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2">
                    Pricings
                </a> */}
                {/* <a href="/about"
                   className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2">
                    About Us
                </a> */}
                <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"><Link to="/" >Home</Link></li> 
                <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"><Link to="/pricing" >Pricings</Link></li> 
                <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"><Link to="/about" >About Us</Link></li> 
               <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-black mr-2"><Link to="/contact" >Contact Us</Link></li> 
              
            </div>
            </div>
            
           
        </div>
    
    </nav>
        </div>
    )
}

export default Nav;