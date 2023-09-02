  import React from "react";


  let data = [{
    name : 'Basic',
    price : "500  " ,
    includes:["A single page that includes basic information about the user, such as their name, contact details, and a brief bio.",
    ,"A portfolio section to showcase the user's work or projects.",
    "Technical support"],
    intro : "The basic package is designed for users who need a simple online presence. Here are some features you might consider:"

  },{
    name : 'Advance',
    price : "1500  " ,
    includes: ["Multiple pages for sections like About, Services, Portfolio, Contact, etc.",
    "Enhanced design and styling options to create a unique look.","A gallery or portfolio section to showcase the user's work or projects.","Technical support"]

  },{
    name : 'Super Advance',
    price : "2500  " ,
    includes:[ "Multiple pages for sections like About, Services, Portfolio, Contact, etc. ", "Enhanced design and styling options to create a unique look.","Ensuring that the website looks good and functions properly on various screen sizes, including mobile devices.",
    "Contact form or email link to allow users to reach out to the website owner easily.","Technical support"]

  }]

   
  function Pricings() {
    return (
        <div className="lg:flex mx-auto sm:grid ">{
        data.map( data => {
            return ( 
              <div className="w-[50vh] h-[65vh]   mx-auto text-center border-2 border-black text-white italic rounded-xl shadow-2xl p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 cursor-pointer hover:scale-125 transition duration-500 sm:flex-shrink sm:overflow-auto lg:overflow-hidden">
                <div className="shadow-2xl bg-white text-black rounded-xl">
                <div className="mt-6 flex justify-center gap-1 lg:text-5xl sm:text-2xl font-normal ">
                <span className="mt-2 lg:text-3xl sm:text-xl">₹</span>{data.price}
                </div>
                <div className="sm:text-xl lg:text-2xl">
                {data.name}
                </div>
                </div> 
                <div>
                <ul className="text-left my-4">
                {data.includes.map((item, index) => (
    <li key={index} className="flex items-center gap-2 cursor-pointer p-2">
      <span className="rounded-full border border-gray-300 p-2">
        ✓
      </span>
      {item}
    </li>
  ))}
                </ul>
                </div>
                    
                </div>
            )
        })
        }
        </div>
   
     
    )
  }

  export default Pricings ;