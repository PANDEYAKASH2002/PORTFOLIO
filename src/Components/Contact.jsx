
import React from 'react';
import { FaInstagram, FaFacebook, FaXTwitter, FaWhatsapp, FaLinkedin, FaPhone  } from 'react-icons/fa6';
import './Contact.css'; 

const socialLinks = [
  {
    icon: <FaInstagram size={40} color="#E1306C" />,
    url: 'https://www.instagram.com/__aakash.0007/',
    name: 'Instagram',
  },
  {
    icon: <FaFacebook size={40} color="#1877F2" />,
    url: 'https://www.facebook.com/your_username/',
    name: 'Facebook',
  },
  {
    icon: <FaXTwitter size={40} color="#000000" />,
    url: 'https://twitter.com/your_username/',
    name: 'Twitter',
  },
  {
    icon: <FaWhatsapp size={40} color="#25D366" />,
    url: 'https://wa.me/+918957447491',
    name: 'WhatsApp',
  },
  {
    icon: <FaLinkedin size={40} color="#0A66C2" />,
    url: 'https://www.linkedin.com/in/akash-pandey-6960842b1/',
    name: 'LinkedIn',
  },
  {
    icon: <FaPhone size={36} color="#0A66C2" />,
    url: 'tel:+918957447491',
    name: 'Phone',
  },
];

const Contact = () => {
  return (
    <div className="contact-container " style={{ backgroundColor: "rgb(59, 57, 57)"}}>
        
           <div className=" ">

             <h1 className="contact-title flex justify-center text-amber-400">Connect with Me</h1>
               <div className="icon-wrapper">
     
                   {socialLinks.map((social, index) => (
                     <a
                      key={index}
                 href={social.url}
                     target="_blank"
                   rel="noopener noreferrer"
                   className="social-icon"
                     style={{ animationDelay: `${index * 0.2}s` }}
                  title={social.name}
                        > 
                     {social.icon}
          
                  </a>
                    ))}
                  </div> 
              </div>
    </div>
  );
};

export default Contact;
