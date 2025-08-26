import React from "react";
import merntaskimg from "../assets/Task-Dashboard.webp";
import reactecommerce from "../assets/react-shopsy.webp";
import moviespotimg from "../assets/moviespot-react-project.webp";
import explorerimg from "../assets/img-explorer.webp";
import irctcimg from "../assets/irctc cover.webp";
import flipkartimg from "../assets/flipkart thumbnail.webp";
import { HiOutlineExternalLink } from "react-icons/hi";

const Projects = () => {
  const projects = [
    { name: "tasks admin & user dashboard", src: merntaskimg, link:"https://mern-task-management-i7cj.onrender.com/", skills: "react JS, node JS"},
    { name: "shopsy e-commerce web app", src: reactecommerce, link:"https://reactshopsy.netlify.app/", skills:"react JS, dummyJSON API" },
    { name: "moviespot web app", src: moviespotimg, link:"https://movie-rejs-app.netlify.app/", skills:"TMDB API, react JS" },
    { name: "image explorer", src: explorerimg, link:"https://search-image-js.netlify.app/", skills:"Unsplash API, javascript" },
    { name: "irctc app re-design", src: irctcimg, link:"https://www.figma.com/proto/neqvrswoPP2cWXLQeDlNyP/IRCTC-App-Re-Designs?node-id=4-16&starting-point-node-id=472%3A77&t=pZkeiaXi7LuwjZd3-1", skills:"UI/UX, prototypes" },
    { name: "flipkart UI design", src: flipkartimg, link:"https://www.figma.com/proto/qECrzP9EhXsYtPJx3hm9xd/Flipkart-Mobile-Design?node-id=75-699&starting-point-node-id=75%3A460&t=vD3NXf1rfkv9ozMY-1", skills:"App UI, wireframes" },
  ];
  return (
    <section id="projects" className="py-20">
      <div className="mt-5 mx-auto">
        <div className="flex flex-col gap-10 justify-center items-center mx-auto px-10 sm:px-14">
          <h4 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Projects</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col gap-1.5 items-center border border-blue-100/50 rounded p-4">
                <img src={project.src} alt="merntask-img" className="mb-2 rounded cursor-pointer transition ease-in-out duration-300 hover:scale-[1.06]" />
                <h4 style={{lineHeight:"1.6"}} className="text-white capitalize text-center text-[14px] mb-2.5 font-medium">{project.name}</h4>
                <div className="bg-slate-600/50 font-semibold text-white px-2.5 py-0.5 text-[12px] text-center capitalize rounded">{project.skills}</div>
                <div className="flex flex-wrap gap-5 mt-5 justify-center items-center">
                  <div className="flex items-center justify-center w-8 h-8 border-2 border-violet-50 cursor-pointer rounded-full duration-300 ease-in-out hover:bg-violet-500 hover:text-white hover:border-none">
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-white"
                    >
                      <HiOutlineExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
