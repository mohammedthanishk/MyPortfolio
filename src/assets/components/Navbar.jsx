import React from "react";

function Navbar(){
    return(
        <div className="bg-black text-white px-8 md:px-16 lg:px-24">
            <div className="container py-2 flex md:justify-center md:justify-between items-center">
            <div className="text-2x1 font bold hidden md:inline" >
                Mohammed Thanish
            </div>
            <div className='spcae-x-6'>
                <a href="Home" className='hover:text-gray-400'>Home</a>
                <a href="aboutme" className='hover:text-gray-400'>about me</a>
                <a href="projects" className='hover:text-gray-400'>projects</a>
                <a href="contact" className='hover:text-gray-400'>contact</a>
                </div>
                <button className='bg-blue-500 hidden md:inline transform tarnsition-tranform duration-300:scale:105 px-4 py-2 rounded-full cursor:pointer'>connect me</button>
            </div>
        </div>
    )
}
export default Navbar