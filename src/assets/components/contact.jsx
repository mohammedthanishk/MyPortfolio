import React from "react";
import { FaEnvelope, FaMapMarked } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20  font-serif" id="contact">
      <div className="container mx-auto px-b md:px-16 lg:px-24">
        <h2 className="text-center text-4xl font-bold">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1 ">
            <h3>talk to me</h3>
            <div className="mb-4 mt-5">
              <FaEnvelope className="inline-block text-green-400 mr-3"></FaEnvelope>
              <a
                href="mailto:mohammedthanishk@gmail.com"
                className="hover:underline"
              >
                mohammedthanisk@gmail.com
              </a>
            </div>
            <div className="mb-4 ">
              <FaPhone className="inline-block text-green-400 mr-3"></FaPhone>
              <span>+918015166500</span>
            </div>
            <div className="mb-4">
              <FaMapMarked className="inline-block text-green-400 mr-3"></FaMapMarked>
              <span>medavakkam</span>
            </div>
            </div>
            <div className="flex-1 w-full">
              <form action="" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-3">
                    Your name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-gray-800 border
                             border-x-gray-600 focus:outline-none focus:border-gray-300"
                    placeholder="enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block mb-3">
                    Your email
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-gray-800 border
                             border-x-gray-600 focus:outline-none focus:border-gray-300"
                    placeholder="enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-3">
                    Your message
                  </label>
                  <textarea
                    type="text"
                    className="w-full p-2 rounded bg-gray-800 border
                             border-x-gray-600 focus:outline-none focus:border-gray-300"
                    placeholder="enter your message"
                    rows="5"
                  />
                </div>
                <button className="bg-orange-500 hidden md:inline transform tarnsition-tranform duration-300 hover:scale-105 px-4 py-2 rounded-full cursor-pointer">
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Contact;
