import React from 'react'
import "./Mainpage.css"
import "./Hero.css"

function Mainpage() {
  return (
    <div className='main-div flex justify-center items-center  w-full h-screen ' style={{ backgroundColor: "rgb(59, 57, 57)"}}>
        
  
        
           <div className="absolute w-[150px] h-[150px] bg-yellow-500 rotate-45 top-1/3 left-[18%] transform -translate-y-1/2 z-0"></div> 
           <div className="absolute w-[150px] h-[150px] bg-yellow-500 rotate-45 top-1/3 right-[18%] transform -translate-y-1/2 z-0"></div>
      <div className="absolute w-[120px] h-[120px] bg-yellow-500 bottom-10 left-[10%] z-10"></div>
      <div className="absolute w-[120px] h-[120px] bg-yellow-500 bottom-10 right-[10%] z-10"></div>
          <div className="absolute text-black text-[5vw] font-extrabold uppercase z-10 leading-none text-center sm:text-left">
        <h1 className="tracking-tight">I’M A FRONT-END </h1>
        <h1 className="mt-4 tracking-tight">
          DE<span className="text-transparent stroke-text">VELOP</span>ER
        </h1>
         <div className='text-[1vw] flex justify-center m-4'>
           <a href="/AkashPandey_frontenddeveloper_resume.pdf" download="AkashPandey_frontenddeveloper_resume.pdf">
          <button className="px-8 py-3 border-2 border-yellow-500 text-white rounded-full hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300" >
            Download CV
          </button>
          </a>
         </div>
      </div>
         
        
        </div>
   
  
  )
}

export default Mainpage
