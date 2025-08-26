import React from 'react'
import {FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaNodeJs, FaPython, FaFigma} from "react-icons/fa"
import {SiJavascript, SiDjango, SiMongodb, SiMysql, SiTailwindcss, SiBootstrap, SiAdobexd, SiPostman, SiRedux} from "react-icons/si"

const Skills = () => {
  const cards =[
    {name: "html", icon: <FaHtml5 className='text-orange-500'/>},
    {name: "css", icon: <FaCss3Alt className='text-blue-500'/>},
    {name: "javascript", icon: <SiJavascript className='text-yellow-400'/>},
    {name: "react js", icon: <FaReact className='text-cyan-400'/>},
    {name: "node js", icon: <FaNodeJs className='text-green-500'/>},
    {name: "python", icon: <FaPython className='text-yellow-400'/>},
    // {name: "django", icon: <SiDjango className='text-teal-500'/>},
    {name: "mongo db", icon: <SiMongodb className='text-green-600'/>},
    {name: "mysql", icon: <SiMysql className='text-white'/>},
    {name: "redux", icon: <SiRedux className='text-violet-700'/>},
    {name: "tailwind", icon: <SiTailwindcss className='text-blue-400'/>},
    {name: "bootstrap", icon: <SiBootstrap className='text-violet-700'/>},
  ]
  const tools = [
    {name: "git", icon: <FaGitAlt className='text-red-600'/>},
    {name: "github", icon: <FaGithub className='text-white'/>},
    {name: "postman", icon: <SiPostman className='text-red-500'/>},
    {name: "figma", icon: <FaFigma className='text-teal-500'/>},
    {name: "adobe xd", icon: <SiAdobexd className='text-fuchsia-500'/>},
    
  ]
  return (
    <section id='skills' className='py-20'>
      <div className='mt-5 mx-auto'>
      <div className='flex flex-col gap-5 items-center mx-auto px-10 sm:px-14'>
      <h4 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Skills</h4>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-10 mt-6'>
        {cards.map((card, index)=> (
          <div key={index} className='bg-gray-900 p-6 rounded-md shadow-md cursor-pointer flex flex-col items-center gap-2'>
            <div className='text-3xl mb-3 hover:scale-[1.05] transition ease-in-out duration-200'>{card.icon}</div>
            <p className='text-white text-[15px] uppercase font-medium text-center'>{card.name}</p>
          </div>
        ))}        
      </div>
      <div className='flex flex-col gap-5 items-center mt-14'>
      <h4 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>Tools</h4>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 mt-6'>
        {tools.map((tool, index)=> (
          <div key={index} className='bg-gray-900 p-6 rounded-md shadow-md cursor-pointer flex flex-col items-center gap-2'>
            <div className='text-3xl mb-3 hover:scale-[1.05] transition ease-in-out duration-200'>{tool.icon}</div>
            <p className='text-white text-[15px] uppercase text-center font-medium' >{tool.name}</p>
          </div>
        ))}        
      </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Skills