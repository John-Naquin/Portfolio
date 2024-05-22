import React from 'react';
import { Link } from 'react-scroll';
import githubIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png';
import resumeIcon from '../images/resume.png';

const Footer = () => {
    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    }

    const currentYear = new Date().getFullYear();

    return (
        <footer className="font-source-code-pro bg-white text-black p-8 relative mt-12">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-black"></div>
       
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold tracking-wide">John Naquin</h1>
                <p className="text-base">© {currentYear} All Rights Reserved By John Naquin</p>
            </div>

            <div className="flex justify-center space-x-4 md:space-x-6 mb-4">
                <button 
                    className="w-12 h-12 md:w-14 md:h-14 bg-transparent rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-800 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                    onClick={() => handleButtonClick('https://github.com/John-Naquin')}
                >
                    <img src={githubIcon} alt="GitHub" className="w-6 h-6 mx-auto" />
                </button>

                <button 
                    className="w-12 h-12 md:w-14 md:h-14 bg-transparent rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-800 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                    onClick={() => handleButtonClick('https://www.linkedin.com/in/john-naquin/')}
                >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 mx-auto" />
                </button>

                <button 
                    className="w-12 h-12 md:w-14 md:h-14 bg-transparent rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-800 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                    onClick={() => handleButtonClick('https://1drv.ms/b/s!Ar5F0wL10bwk0XR1KAApsyM0FLnN?e=yr751o')}
                >
                    <img src={resumeIcon} alt="Resume" className="w-6 h-6 mx-auto" />
                </button>
            </div>

            <div className="text-center flex flex-wrap justify-center space-x-2 md:space-x-4">
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer font-bold hover:text-blue-600 transition-colors mb-2">.Home()</Link>
                <Link to="about" smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold hover:text-blue-600 transition-colors mb-2">.About()</Link>
                <Link to="projects" smooth={true} duration={500} offset={-90} className="cursor-pointer font-bold hover:text-blue-600 transition-colors mb-2">.Projects()</Link>
                <Link to="work" smooth={true} duration={500} className="cursor-pointer font-bold hover:text-blue-600 transition-colors mb-2">.Work()</Link>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer font-bold hover:text-blue-600 transition-colors mb-2">.Contact()</Link>
            </div>
        </footer>
    );
};

export default Footer;
