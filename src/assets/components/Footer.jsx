import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const footer = () => {
  return (
    <div className="bg-black text-2xl flex justify-center content-centercenter space-x-6 p-12  md:my-0">
      <a href="" className="text-gray-500  hover:text-pink-500">
        <FaInstagram />
      </a>
      <a href="" className="text-gray-500  hover:text-white">
        <FaGithub />
      </a>
      <a href="" className="text-gray-500  hover:text-blue-600">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default footer;
