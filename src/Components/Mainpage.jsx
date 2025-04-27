import React from 'react'
import "./Mainpage.css"
function Mainpage() {
  return (
    <div className='main-div flex justify-center items-center  w-screen h-screen ' style={{ backgroundColor: "rgb(59, 57, 57)"}}>
        
  
        <div className="text-center z-10 max-w-2xl px-6">
          <p className="mb-4 text-xl">HELLO I'M</p>
          <h1 className="text-7xl font-bold mb-8">
            <span className="animate-pulse text-amber-400">WEB DEVELOPER</span>
           
          </h1>
          <p className="mb-12 text-gray-400">
          Hey, I’m Akash Pandey! I'm a fresher web developer who loves turning ideas into real, working websites. I’ve built a few cool projects using HTML, CSS, JavaScript, React, and Tailwind CSS. I’m currently looking for my first professional role and would love to connect with teams that are all about building great user experiences!
          </p>
          <a href="/AkashPandey_frontenddeveloper_resume.pdf" download="AkashPandey_frontenddeveloper_resume.pdf">
          <button className="px-8 py-3 border-2 border-yellow-500 text-white rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300" >
            Download CV
          </button>
          </a>
        </div>
    </div>
  
  )
}

export default Mainpage
