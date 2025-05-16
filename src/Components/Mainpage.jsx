import React, { useState } from 'react'
import { useGSAP } from "@gsap/react";
// import designerImg from "./logo.png"
import gsap from 'gsap';
import "./Hero.css";

function Hero() {
   const [show ,setShow]=useState(false);
  useGSAP( () =>{
    const tl=gsap.timeline();
     tl.to(".vi-mask-group",{
        rotate:10,
        duration:2,
        ease:"Power4.easeInOut",
        transformOrigin:"50% 50%",
     })
    .to(".vi-mask-group",{
        scale:10,
        duration:2,
        delay:-1.8,
        ease:"Expo.easeInOut",
          transformOrigin:"50% 50%",
          opacity:"0",
          onUpdate:function(){
            if(this.progress()>= .9){
                document.querySelector(".svg").remove();
                setShow(true);
                this.kill();
            }
          }
    })
  })

  return (
    <>    <div className='svg flex justify-center text-center h-screen w-full fixe overflow-hidden z-[100] bg-[rgb(0,0,0)]'>
        <svg viewBox='0 0 800 600 ' preserveAspectRatio='xMidYMid slice'>
                <defs>
                    <mask id="vimask">
                       <rect className='width-100vw height-100vh fill-black'> </rect>
                       <g className='vi-mask-group'>
                        <text
                        x="50%"
                        y="50%"
                        fontSize="250"
                        textAnchor='middle'
                        fill='white'
                        dominantBaseline="middle"
                        fontFamily='Arial Black'
                        >
                       AP
                        </text>
                       </g>
                    </mask>
                </defs>

                    <image
                        width="100%"
                        height="100%"
                        href="./main.png"   
                        preserveAspectRatio='xMidyMid slice'
                        mask='url(#vimask)'

                        />
        </svg>
    </div>
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
  </>

  )
}

export default Hero
