

function About () {
    return (
        <div className="lg:flex sm:grid">
         <img src="https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif" alt="" ></img>
         <div className="mx-auto">

        <h1 className="text-4xl text-center mt-10">About Us</h1>
        <div className='lg:w-[50vh] lg:h-[45vh] sm:w-50 sm:h-80  shadow-2xl cursor-pointer overflow-hidden hover:shadow-blue-400 indent-8 m-auto  text-xl p-8 rounded-xl italic mt-10 sm:flex-shrink sm:overflow-auto'>
            
            <p >Welcome to <span className='text-2xl'>Akshupdf.web</span>  We're a team of skilled web developers crafting custom
             websites tailored to your needs. From simple info sites to complex e-commerce platforms, we bring your vision to life.
              With cutting-edge solutions and exceptional service, let's make your website stand out together!</p>
                
                
            </div>
            </div>
            </div>
    )
}

export default About;
