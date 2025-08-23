import React from "react";
import MyPic from "../assets/my pic.webp";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";

const Hero = () => {
  return (
    <section id="home" className="py-20">
      <div className="mx-auto px-10 sm:px-14">
      <div className="mt-5">
        <div className="flex justify-center items-center flex-col sm:justify-center sm:items-center ">
          {/* Image */}
          <figure>
          <img src={MyPic} className="w-64 h-64 mb-2.5" alt="profile-pic" />
          </figure>

          {/* Content */}
          <div className="text-center">
            <h1 className="mb-4 font-bold text-2xl md:text-4xl bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">Hi, I'm Elakshmana Raj</h1>
            <h2 className="mb-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text text-transparent">Web Developer</h2>
            <p className="text-justify text-white sm:text-center mb-4 mx-auto" style={{lineHeight:"1.8"}}>
              Web Developer familiar with React.js, Node.js, Express.js, and MongoDB. Skilled in designing responsive UI with Tailwind CSS and building scalable back-end systems. 
              Passionate about creating user-centered digital experiences that merge functionality with modern design, ensuring seamless performance across devices and platforms.</p>
          </div>
          {/* Social Links */}
          <div className="flex flex-wrap gap-5 mt-2 mb-8 justify-center items-center">
            <div className="flex items-center justify-center w-10 h-10 border-2 border-violet-50 cursor-pointer rounded-full duration-300 ease-in-out hover:bg-violet-500 hover:text-white hover:border-none">
              <a
                href="https://www.linkedin.com/in/elakshmanaraj-frontenddeveloper-reactjs-html/"
                target="_blank"
                className="text-white"
              >
                <LuLinkedin size={24} />
              </a>
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-2 border-violet-50 cursor-pointer rounded-full duration-300 ease-in-out hover:bg-violet-500 hover:text-white hover:border-none">
              <a target="_blank" href="https://github.com/ElakshmanaRaj" className="text-white">
                <LuGithub size={24} />
              </a>
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-2 border-violet-50 cursor-pointer rounded-full duration-300 ease-in-out hover:bg-violet-500 hover:text-white hover:border-none">
              <a href="mailto:elakshmanabca07@gmail.com" target="_blank" className="text-white">
                <LuMail size={24} />
              </a>
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-2 border-violet-50 cursor-pointer rounded-full duration-300 ease-in-out hover:bg-violet-500 hover:text-white hover:border-none">
              <a href="tel:(+91)8056784044" className="text-white">
                <LuPhoneCall size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="min-[1000px]:hidden flex justify-center items-center">
        <a
          className="bg-violet-700 text-white rounded-2xl px-4 py-2 ease-in-out duration-300 hover:bg-violet-500"
          href=""
          download
        >
          Download CV
        </a>
      </div>
    </div>
    </section>
  );
};

export default Hero;
