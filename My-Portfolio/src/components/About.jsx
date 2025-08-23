import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { IoCodeWorkingOutline } from "react-icons/io5"

const About = () => {
 
  return (
    <section id='about' className='py-20'>
      <div className='mx-auto px-10 sm:px-14 flex flex-col items-center gap-5'>
        <h2 className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent'>About Me</h2>
        <div className='px-2.5 sm:px-4' >
          <p className='text-gray-300 text-justify mb-4' style={{lineHeight:"1.8"}} >
          Web Developer with internship experience in creating responsive and dynamic websites using React.js, Node.js, Express.js, and MongoDB. Additionally skilled in UI/UX Design building intuitive user interfaces with Figma, Adobe XD, Tailwind CSS, Bootstrap and Material UI while also experienced in Python and database management using MySQL. 
          Strong knowledge of RESTful APIs, full-stack workflows, and cross-platform optimization. Passionate about blending design creativity and technical expertise to deliver scalable, user-focused digital experiences that ensure performance, functionality, and accessibility across devices.
            </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='p-6'>
            <h3 className='text-white font-bold text-xl mb-4 flex items-center gap-2.5'> <FaGraduationCap className='text-teal-500'/> Education</h3>
            <ul className='list-disc text-gray-300 space-y-3.5'>
              <li style={{lineHeight:"1.7"}}><strong> BCA (Computer Application) </strong> Thanthai Hans Roever College, Perambalur Aug 2021- May 2024 &nbsp;<strong>(75%)</strong> </li>
              <li style={{lineHeight:"1.7"}}><strong> HSC </strong> Swami Matric Higher Secondary School, Ariyalur Apr-2021 &nbsp;<strong>(85%)</strong> </li>
              <li style={{lineHeight:"1.7"}}><strong> SSLC </strong> Swami Matric Higher Secondary School, Ariyalur Apr-2019 &nbsp;<strong>(83%)</strong> </li>
            </ul>
          </div>
          <div className='p-6'>
            <h3 className='text-white font-bold text-xl mb-4 flex items-center gap-2.5'> <IoCodeWorkingOutline className='text-teal-500'/> Work Experience</h3>
            <ul className='list-disc text-gray-300 space-y-3.5'>
              <li style={{lineHeight:"1.7"}}><strong> Intern Web Development </strong> Ara Discoveries Pvt Ltd, Thanjavur <br /> Jan 2025- May 2025 </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;