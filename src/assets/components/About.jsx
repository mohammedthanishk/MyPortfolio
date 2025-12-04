import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-20 px-20 justify-normal font-serif" id="aboutme">
      <div className="container mx-auto px-b md:px-16 lg:px-24">
        <h2 className="text-center text-4xl font-bold">About Me</h2> <br />
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <p className="text-lg mb-8">
          Aspiring software tester with strong theoretical knowledge of automation testing using Selenium and Java,
          along with practical experience in manual testing. Well-acquainted with SDLC and STLC processes, including test planning, execution, defect tracking, and reporting.
          Detail-oriented and analytical, with a keen eye for identifying issues and improving software quality.
          Enthusiastic about learning new testing tools and methodologies, expanding automation skills, and contributing effectively to collaborative projects.
          Committed to growing as a tester and delivering reliable, high-quality software in real-world environments.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <label htmlFor="htmlandcss" className="w-4/12 md:w-2/12">
              HTML & CSS
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-l from-blue-500 to-purple-500 h-2.5 rounded-full transform tarnsition-tranform duration-300 hover:scale-105 w-3/6"></div>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="Reactjs" className="w-4/12 md:w-2/12">
              Java
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-l from-blue-500 to-purple-500 h-2.5 rounded-full transform tarnsition-tranform duration-300 hover:scale-105 w-9/12"></div>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="Selenium" className=" w-4/12 md:w-2/12">
              Selenium
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-l from-blue-500 to-purple-500 h-2.5 rounded-full transform tarnsition-tranform duration-300 hover:scale-105 w-4/6"></div>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="TestNG" className=" w-4/12 md:w-2/12">
            TestNG
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-l from-blue-500 to-purple-500 h-2.5 rounded-full transform tarnsition-tranform duration-300 hover:scale-105 w-7/12"></div>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="TestNG" className=" w-4/12 md:w-2/12">
            Cucumber
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-l from-blue-500 to-purple-500 h-2.5 rounded-full transform tarnsition-tranform duration-300 hover:scale-105 w-6/12"></div>
            </div>
          </div>
          
          <div className="flex items-center">
            <label htmlFor="SQL" className="w-4/12 md:w-2/12">
            SQL
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-l from-blue-500 to-purple-500 h-2.5 rounded-full transform tarnsition-tranform duration-300 hover:scale-105 w-6/12"></div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex  justify-between text-start  md:text-center ">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4">experience</h1>
            <h4 className="text-lg underline font-bold mb-4"> 
              Internship Synopsis – Software Tester
            </h4>
            <p className="text-left text-lg">
              Company: Webronic Industries Private Limited. <br />
              Duration: January 4 – March 1, 2025. <br /> During my internship as a
              Manual Tester at Webronic Industries Private Limited, I gained
              hands-on experience in software testing methodologies and quality
              assurance processes. <br /> <span className="underline">My primary responsibilities included:</span>
              </p>
              <ul className="list-disc pl-5 text-start text-lg mt-2">
                <li>
                  Performing functional, regression, and usability testing on
                  web applications.
                </li>
                <li>
                  Creating, executing, and documenting detailed test cases and
                  reports.
                </li>
                <li>
                  Identifying and reporting bugs and defects using bug-tracking
                  tools.
                </li>
                <li>
                  Collaborating with developers to ensure high-quality software
                  delivery.
                </li>
                <li>
                  Learning and applying industry best practices for software
                  testing and QA.
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
