import React from "react";

const About = () => {
  return (
    <div className="bg-black text-white py-20 px-20 justify-normal" >
      <div>
        <h2 className="text-center text-3xl font-bold">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <p>
            I'm a web development student passionate about creating modern,
            responsive websites. I started my journey in front-end development,
            working with React and Vite, and I’m now exploring backend
            technologies to become a full-stack developer. I love learning new
            technologies, solving challenges, and building user-friendly digital
            experiences. As I grow in my career, I'm excited to develop my
            skills and contribute to real-world projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
