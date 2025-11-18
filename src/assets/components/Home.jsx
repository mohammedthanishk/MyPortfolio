import React from "react";
import ME from "/public/images/ME.png";
const Home = () => {
  return (
    <div className="bg-black text-white text-center h-fit " id="Home">
      <img
        src={ME}
        alt=""
        className="mx-auto w-48 h-48 rounded-full object-cover transform tarnsition-tranform duration-300 hover:scale-110 "
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-500 ">
          Mohammed Thanish
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-400 px-4 md:px-32">
        "An Amateur developer eager to learn and grow."
      </p>
      <div className=" mt-8 space-x-6">
        <button className="bg-green-500  md:inline transform tarnsition-tranform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer items-center mb">
          <a href="https://drive.google.com/file/d/14wqOAjGHS9BfArZnblgF7tAChFKd_nPm/view?usp=sharing">
            My Resume
          </a>
        </button>
        <button
          id=""
          className="bg-clip-border bg-gradient-to-l from-blue-500 to-purple-500  md:inline transform tarnsition-tranform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer"
        >
          <a href="#contact" className="hover:text-gray-400">
            
            contact me
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
