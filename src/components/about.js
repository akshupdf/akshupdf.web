

function About () {
    return (
        <div className="lg:flex sm:grid">
         <img src="https://i.pinimg.com/originals/2a/53/65/2a53651a35816f499270d8275fd5318f.gif" alt="" ></img>
         <div className="mx-auto">

        <h1 className="text-4xl text-center mt-10">About us</h1>
        <div className='lg:w-[80vh] lg:h-[60vh] sm:w-50 sm:h-80  shadow-2xl mx-auto text-xl p-8 rounded-xl italic mt-10 sm:flex-shrink sm:overflow-auto'>
            
            <h1>Welcome to <span className='text-2xl'>Akshupdf.web</span> We are a team of experienced and talented web developers 
                        who specialize in creating custom websites that are tailored to meet the unique needs of our clients. 
                        Our passion for web development drives us to stay up-to-date with the latest trends and 
                        technologies in the industry, ensuring that we deliver cutting-edge solutions that exceed our clients' 
                        expectations.</h1>{""}<h1> Whether you need a simple informational website or a complex e-commerce platform,
                         we have the expertise to bring your vision to life. We are committed to providing exceptional customer
                          service and working closely with our clients to ensure that their website reflects their brand and
                           achieves their business objectives.
                         Thank you for considering our services and we look forward to the opportunity to work with you!</h1>
                
                
            </div>
            </div>
            </div>
    )
}

export default About;
