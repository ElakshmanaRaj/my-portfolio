import React from "react";
import { LuLinkedin } from "react-icons/lu";
import { LuGithub } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuPhoneCall } from "react-icons/lu";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto px-10">
        <div className="flex flex-col gap-5 justify-center items-center mx-auto">
          <h4 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contact
          </h4>
          <p
            className="text-justify text-white sm:text-center"
            style={{ lineHeight: "1.8" }}
          >
            Eager to bring my skills and join forces with the company. I'm ready
            to collaborate. I’m here to help transform concepts into impactful
            experiences. From initial brain storming to prototyping, iteration,
            and final execution, I’m committed to crafting designs that not only
            engage and delight users their needs in intuitive, accessible ways.{" "}
          </p>
          <div className="flex flex-wrap gap-5 mt-2 mb-3.5 justify-center items-center">
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
              <a
                target="_blank"
                href="https://github.com/ElakshmanaRaj"
                className="text-white"
              >
                <LuGithub size={24} />
              </a>
            </div>
            <div className="flex items-center justify-center w-10 h-10 border-2 border-violet-50 cursor-pointer rounded-full duration-300 ease-in-out hover:bg-violet-500 hover:text-white hover:border-none">
              <a
                href="mailto:elakshmanabca07@gmail.com"
                target="_blank"
                className="text-white"
              >
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
    </section>
  );
};

export default Contact;
