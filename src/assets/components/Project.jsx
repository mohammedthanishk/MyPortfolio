import React from "react";
import calci from "/public/images/calci.png"
const project = [
  {
    id: 1,
    image: calci,
    title: "Simple calculator",
    technologies:"HTML, CSS, JavaScript" ,
    description:
      "A Simple Calculator that allows users to perform basic arithmetic operations built using HTML, CSS, and JavaScript",
  },
];
const Project = () => {
  return (
    <div className="bg-black text-white py-20 font-serif" id="projects">
      <div className="container mx-auot px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12"> My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg
               transform-transition-transform duration-300 hover:scale-105"
            > <img src={project.image} alt={project.name} className="rounded-lg mb-4  w-full h-48 object-cover"/>
              <h3 className="mt-2 text-2xl font-bold text-transparent 
              bg-clip-text bg-gradient-to-r from  bg-green-600 to blue-400">
                {project.title}
              </h3>
              <p className="mt-2  text-gray-200">{project.description}</p>
              <a
                href="#"
                className=" inline-block bg-gradient-to-r from green- to bg-purple-500 tect-white mt-2 px-5 py-4 rounded-full"
              >
                see more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
