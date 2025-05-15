import React from "react";
import "./Hero.css";
import designerImg from "/AKASH1.png"; // Replace with actual path

const Hero = () => {
  return (
    <section className="relative bg-[#fcf7f3] h-screen flex items-center justify-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute w-[150px] h-[150px] bg-orange-500 rotate-45 top-1/2 left-[18%] transform -translate-y-1/2 z-0"></div>
      <div className="absolute w-[120px] h-[120px] bg-orange-500 bottom-0 left-[10%] z-0"></div>

      {/* Text */}
      <div className="absolute text-black text-[5vw] font-extrabold uppercase z-10 leading-none text-center sm:text-left">
        <h1 className="tracking-tight">I’M A FRONT-END </h1>
        <h1 className="mt-4 tracking-tight">
          DE<span className="text-transparent stroke-text">VELOP</span>ER
        </h1>
      </div>

      {/* Designer Image */}
      <img
        src={designerImg}
        alt="UI/UX Designer"
        className="relative z-0 max-h-[90vh] object-contain h-screen "
      />
    </section>
  );
};

export default Hero;
