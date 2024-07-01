import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import githubIcon from '../images/github.png';
import linkedinIcon from '../images/linkedin.png';
import resumeIcon from '../images/resume.png';

const Hero = () => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  }

  return (
    <section 
      id="hero" 
      className="relative text-center font-source-code-pro flex flex-col justify-center items-center h-screen p-10"
    >
      <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-4">John Naquin</h1>

      <TypeAnimation
        sequence={[
          "Software Developer",
          1000,
          "",
          "Data Scientist",
          1000,
          "",
        ]}
        speed={50}
        className="text-2xl font-light tracking-wide mt-2 text-blue-600 whitespace-nowrap"
        repeat={Infinity}
      />

      <div className="mt-4 max-w-3xl mx-auto mb-6">
        <p className="text-xl md:text-2xl tracking-wide">
        I'm a Data Scientist and Software Developer with a bachelor's in Computer Science. I am currently pursuing my master's in Data Science. I am passionate about both tech and space. 🌎
        </p>
      </div>
      
      <div className="flex justify-center space-x-6 mt-4">
        <button 
          className="w-14 h-14 bg-transparent rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-800 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() => handleButtonClick('https://github.com/John-Naquin')}
        >
          <img src={githubIcon} alt="GitHub" className="w-8 h-8 mx-auto" />
        </button>

        <button 
          className="w-14 h-14 bg-transparent rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-800 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() => handleButtonClick('https://www.linkedin.com/in/john-naquin/')}
        >
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 mx-auto" />
        </button>

        <button 
          className="w-14 h-14 bg-transparent rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-800 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          onClick={() => handleButtonClick('https://1drv.ms/b/c/24bcd1f502d345be/EfCVyWOGO41Jup2-pQm5NtoBJUx_yREBu99fh-iF0LKp7A?e=jtCaKt')}
        >
          <img src={resumeIcon} alt="Resume" className="w-8 h-8 mx-auto" />
        </button>
      </div>

      <div className="absolute -left-5 bottom-3 flex flex-col items-center">
        <p className="text-xs md:text-base font-bold transform -rotate-90 mb-6 md:mb-5 text-blue-600">Scroll Down</p>
        <div className="animate-bounce mt-4 md:mt-8">
          <span className="text-sm md:text-2xl text-blue-600">▼</span>
        </div>
      </div>

      <style jsx>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-10px);
            }
            60% {
              transform: translateY(-5px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
