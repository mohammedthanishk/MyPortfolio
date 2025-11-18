import React from "react";
import { useState } from "react";
import { FaEnvelope, FaMapMarked } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    mesage:"",
  });
  const [succ,setSucc] = useState('');

  const handleChange= (e) => {
    setFormData((prev) => ({...prev, [e.target.name]:e.target.value}));
  };
  const handleSubmit= async (e) => {
    e.preventDefault();
    setSucc("sended.");
    try{
      const response = await fetch("http://localhost:3000/send-email" , {
        method: "post",
        headers:{"Content-Type": "application/json"},
      body:JSON.stringify(formData),
      });
      const result = await response.json();
      setSucc(result.message);
      setFormData({name: "", email:"", mesage:""});
    }catch (error) {
      setSucc("Failed to send. Please try again.")
      console.error("Error sending email:", error);
    }
  };
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
            
          </div>
        </div>
      </div>
    
  );
};

export default Contact;
