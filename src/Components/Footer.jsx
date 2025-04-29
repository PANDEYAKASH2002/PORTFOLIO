import React from 'react'

function Footer() {

//     const cursor = document.querySelector('.cursor');
// let mouseX = 0;
// let mouseY = 0;
// let currentX = 0;
// let currentY = 0;
// const speed = 0.1; // smaller is slower

// document.addEventListener('mousemove', (e) => {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
// });

// function animate() {
//   currentX += (mouseX - currentX) * speed;
//   currentY += (mouseY - currentY) * speed;
  
//   cursor.style.left = currentX + 'px';
//   cursor.style.top = currentY + 'px';
  
//   requestAnimationFrame(animate);
// }

// animate();

  return (
    <div className='cursor'>
        

<footer className="bg-white  shadow-sm dark:bg-gray-900 " >
    <div className=" mx-20 p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" className="h-8 rounded-xl" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Portfolio</span>
            </a>
            <ul className="flex flex-wrap items-center  text-sm font-medium text-gray-500  dark:text-gray-400">
                <li>
                    <a href="/About" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/Contact"  className="hover:underline me-4 md:me-6">Contact</a>
                </li>
              
             
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline"></a>. All Rights Reserved.</span>
    </div>
</footer>


      
    </div>
  )
}

export default Footer
