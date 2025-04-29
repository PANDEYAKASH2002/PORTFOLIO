import React from 'react'

function Skills() {

    
const Skilled = [
    {
      title: "Web Development",
      description:"Experienced in creating fully functional websites ranging from single-page applications to e-commerce platforms, with an emphasis on mobile-first design, accessibility, and seamless user experience.",
      
    },
    {
      title: "UI/UX Design",
      description: "Focus on building intuitive and user-friendly interfaces, applying fundamental UI/UX principles to enhance user satisfaction and engagement.",
    
    },
    {
      title: "HTML/CSS",
      description: "Skilled in writing clean, semantic, and accessible HTML5 markup to build strong foundations for modern web applications.Proficient in crafting responsive layouts, animations, and visually appealing designs using CSS3, with a solid grasp of Flexbox, Grid, and modern styling practices.",
   
    },
    {
      title: "JavaScript",
      description: "Strong understanding of JavaScript fundamentals, including DOM manipulation, event handling, API integration, and working with modern ES6+ features like arrow functions, promises, async/await.",
     
    },
    {
        title: "TailWind CSS/BootStrap CSS",
        description: "Expertise in rapidly designing modern, responsive user interfaces using Tailwind CSS/BoootStrap CSS, following utility-first principles to build highly maintainable codebases.",
      
      },
      {
        title: "React-Js",
        description: "Experienced in building dynamic and reusable components with React.js, managing state effectively using Hooks, and implementing routing with React Router.",
       
      },
  ];
  return (
    <div className="min-h-screen p-8 " >
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-black-800 flex justify-center">My Services</h1>
      <p className="text-lg text-black mb-10">
      “Proficient in front-end technologies such as React.js, TailwindCSS, and JavaScript, with a strong emphasis on building scalable, responsive user interfaces.”
      </p>

      <div className="grid gap-6 md:grid-cols-2 border-black hover:border-amber-300">
        {Skilled.map((skill, index) => (
          <div key={index} className="project-div  bg-gray-400 p-6 rounded-2xl shadow-md hover:shadow-lg  transition duration-300">
            <h3 className="text-2xl font-bold mb-2 ">{skill.title}</h3>
            <p className=" mb-4">{skill.description}</p>
           
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Skills
