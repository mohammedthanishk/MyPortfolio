import React from "react";

function Navbar() {
  return (
    <div className="bg-black text-white px-16 md:px-16 lg:px-24 pb-7">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2x1 font bold hidden md:inline">
          <h1 className="tranform transition-transform duration-500 hover:scale-110 px-5 py-3 cursor-pointer text-2xl" >Mohammed Thanish</h1>
        </div>
        <div className="space-x-10">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="#aboutme" className="hover:text-gray-400">
            about me
          </a>
          <a href="#projects" className="hover:text-gray-400">
            projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            contact
          </a>
        </div>
        
      </div>
    </div>
  );
}
export default Navbar;
