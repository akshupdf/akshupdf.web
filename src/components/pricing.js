  import React from "react";


  let data = [{
    name : 'Basic',
    price : "500  " ,
    includes:["A single page that includes basic information about the user, such as their name, contact details, and a brief bio."
    ,"A portfolio section to showcase the user's work or projects.",
    "Technical support"],
    intro : "The basic package is designed for users who need a simple online presence. Here are some features you might consider:"

  },{
    name : 'Advance',
    price : "1500  " ,
    includes: ["Multiple pages for sections like About, Services, Portfolio, Contact, etc.",
    "Enhanced design and styling options to create a unique look.","A gallery or portfolio section to showcase the user's work or projects.","Technical support"]

  },{
    name : 'Pro',
    price : "2500  " ,
    includes:[ "Multiple pages for sections like About, Services, Portfolio, Contact, etc. ", "Enhanced design and styling options to create a unique look.","Ensuring that the website looks good and functions properly on various screen sizes.",
    "Contact form to allow users to reach out to the website owner easily.","Technical support"]

  }]

   
  function Pricings() {
    return (
        <div className="lg:flex justify-center mx-auto h-screen bg-fixed sm:overflow-auto lg:p-12 bg-no-repeat bg-cover" style={{backgroundImage:`url(https://img.freepik.com/premium-photo/purple-yellow-background-with-purple-background-purple-background-with-light-effect_319965-548.jpg)`}}>
        {
        data.map( ( data )=> {
            return ( 

              <div className="m-8">
              <div className="shadow-2xl bg-purple-300  rounded-xl  h-34  w-40 mx-auto text-center text-white">
                <div className="mt-10 pt-6 flex justify-center lg:text-5xl sm:text-2xl font-normal ">
                <span className=" lg:text-3xl sm:text-xl">₹</span>{data.price}
                </div>
                <div className="sm:text-xl lg:text-2xl text-wrap">
                {data.name}
                </div>
                </div> 
              <div className="w-[50vh] h-auto   mx-auto text-center border-2 backdrop-blur-xl  text-white italic rounded-xl shadow-2xl p-4 ">
              
     
                
                <div>
                <ul className="text-left my-4 text-xl">
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
                </div>
            )
        })
        }
        </div>
   
     
    )
  }

  export default Pricings ;