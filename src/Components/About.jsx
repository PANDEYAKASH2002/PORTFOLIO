
    import React from 'react';
    import "./Mainpage.css";

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-stack e-commerce web application featuring product listings, cart functionality, and user authentication. Built with HTML, CSS, JavaScript, React, and integrated with backend APIs.",
    link: "https://github.com/PANDEYAKASH2002/E-Commerce",
  },
  {
    title: "To-Do List App",
    description: "A simple yet efficient to-do list application allowing users to add, edit, and delete tasks. Built with ReactJS, offering a clean UI and smooth user experience.",
    link: "https://github.com/PANDEYAKASH2002/TO-DO-LIST",
  },
  {
    title: "Bubble Game",
    description: "An interactive browser-based game where players pop bubbles against a timer. Developed using JavaScript, enhanced with fun animations and score tracking.",
    link: "https://github.com/PANDEYAKASH2002/BUBBLE-GAME",
  },
  {
    title: "Calculator",
    description: "A simple yet functional Calculator web app built with HTML, CSS, and JavaScript. It performs basic arithmetic operations with clean UI, efficient event handling, and dynamic display updates. This project showcases my foundational skills in frontend development and interactive web design.",
    link: "https://github.com/PANDEYAKASH2002/CALCULATOR",
  },
];

export default function About() {
  return (
    <div className="min-h-screen p-8 " style={{ backgroundColor: "rgb(59, 57, 57)"}}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-black-800 flex justify-center">About Me</h1>
        <p className="text-lg text-black mb-10">
          Hello! I'm  a passionate Frontend Web Developer with skills in 
          <span className="font-semibold text-black"> HTML, CSS, JavaScript, ReactJS, and TailwindCSS</span>.
          I love building interactive, responsive web applications and always eager to learn more and grow in the tech industry.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-black-800 flex justify-center">Projects I've Built</h2>
        <div className="grid gap-6 md:grid-cols-2 border-black hover:border-amber-300">
          {projects.map((project, index) => (
            <div key={index} className="project-div  bg-gray-400 p-6 rounded-2xl shadow-md hover:shadow-lg  transition duration-300">
              <h3 className="text-2xl font-bold mb-2 hover:text-yellow-300">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 font-medium hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

