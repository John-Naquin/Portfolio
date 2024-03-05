import React, { useState, useEffect, useRef } from 'react';
import Pure from '../images/pureearth.png';
import Atom from '../images/atom.png';
import Node from '../images/node-js.png';
import Mongo from '../images/mongodb.png';
import Java from '../images/js.png';
import Boot from '../images/bootstrap.png';
import LinkIcon from '../images/link.png';
import Github from '../images/github.png';
import Tail from '../images/tailwind.png';
import Stellar from '../images/space logo.png';
import CommingSoon from '../images/comming_soon.jpg';
import Chatbot from '../images/chatbot.gif';
import Python from '../images/python.png';
import Next from '../images/nextjs.jpg';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('Software Developing');
    const [topTagVisible, setTopTagVisible] = useState(false);
    const [bottomTagVisible, setBottomTagVisible] = useState(false);
    const topTagRef = useRef(null);
    const bottomTagRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (topTagRef.current) {
                const rect = topTagRef.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setTopTagVisible(true);
                } else {
                    setTopTagVisible(false);
                }
            }

            if (bottomTagRef.current) {
                const rect = bottomTagRef.current.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    setBottomTagVisible(true);
                } else {
                    setBottomTagVisible(false);
                }
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section id="projects" className="font-source-code-pro p-10 pb-56 pt-40 mt-8 relative grid gap-8 place-items-center">
            <p className={`text-4xl text-blue-600 absolute top-0 left-0 transform ${topTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={topTagRef}>&lt;section id="projects"&gt;</p>

            <div className="flex justify-center mb-4">
                <button className={`px-4 py-2 mr-2 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 ${activeCategory === 'Software Developing' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-25 hover:bg-gray-300 text-blue-600'}`} onClick={() => setActiveCategory('Software Developing')}>
                    Software Developing
                </button>
                <button className={`px-12 py-2 rounded-lg shadow-md transition duration-150 ease-in-out transform hover:scale-105 ${activeCategory === 'Data Science' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-25 hover:bg-gray-300 text-blue-600'}`} onClick={() => setActiveCategory('Data Science')}>
                    Data Science
                </button>
            </div>


            {activeCategory === 'Software Developing' && (
                <div>
                    <div className="card card-shadow bg-white p-4 md:p-8 rounded w-full max-w-screen-lg text-center mx-2 mb-8 flex flex-col items-center justify-between">
                        <img src={Pure} alt="Project 1" className="mx-auto w-full md:w-3/4 lg:w-1/2 h-32 md:h-1/2 object-cover rounded" />
                        <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-blue-600 mt-4 md:mt-6">Pure Earth</h3>
                        <p className="text-base text-black mt-4 font-bold">Tech Stack:</p>
                        <div className="flex flex-wrap justify-center items-center mt-2 space-x-2 md:space-x-4">
                            <img src={Atom} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                            <img src={Java} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                            <img src={Node} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                            <img src={Mongo} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                            <img src={Boot} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                        </div>
                        <p className="mt-4 text-md md:text-basebp-6 p-6">
                            Pure Earth stands as a preservation portal for national parks. Fueled by the MERN stack, this platform is a sanctuary for environmental preservation. It encompasses education, donation, volunteering, and leverages the ChatGPT API for interactive engagement. With mobile adaptability and secure transactions via the Stripe API, it embodies the blend of tech and conservation for a greener tomorrow.
                        </p>
                        <hr className="my-4 w-3/4 mx-auto" />
                        <p className="text-base text-black mt-4 font-bold">Demo Account:</p>
                        <div className="flex flex-col md:flex-row justify-center items-center mt-2 md:space-x-4">
                            <div className="mb-2 md:mb-0">
                                <span className='text-blue-600 font-medium'>Email:</span>
                                <span className="font-normal"> demo@gmail.com</span>
                            </div>
                            <div>
                                <span className='text-blue-600 font-medium'>Password:</span>
                                <span className="font-normal"> 111111111</span>
                            </div>
                        </div>
                        <p className="mt-2 text-sm">Using free tier of render so backend will take a few mins to spin up!</p>
                        <hr className="my-4 w-3/4 mx-auto" />
                        <div className="flex items-center justify-center space-x-1 md:space-x-4">
                            <a href="https://pureearth.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                                <img src={LinkIcon} alt="Live Demo Icon" className="h-4 w-4 mr-1 md:mr-2" />
                                Live Demo
                            </a>
                            <span className="mx-1 md:mx-2">|</span>
                            <a href="https://github.com/Rookie1829/Pure-Earth" target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                                <img src={Github} alt="Source Code Icon" className="h-4 w-4 mr-1 md:mr-2" />
                                Source Code
                            </a>
                        </div>
                    </div>

                    <div className="card card-shadow bg-white p-4 md:p-8 rounded w-full max-w-screen-lg text-center mx-2 mb-8 flex flex-col items-center justify-between">
                        <img src={Stellar} alt="Project 2" className="mx-auto w-full md:w-3/4 lg:w-1/2 h-32 md:h-1/2 object-cover rounded" />
                        <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-blue-600 mt-4 md:mt-6">Stellar</h3>
                        <p className="text-base text-black mt-4 font-bold">Tech Stack:</p>
                        <div className="flex flex-wrap justify-center items-center mt-2 space-x-2 md:space-x-4">
                            <img src={Atom} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                            <img src={Java} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                            <img src={Tail} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                        </div>
                        <p className="mt-4 text-md md:text-basebp-6 p-6">
                            Venture into the cosmos through my space website—an all-in-one celestial odyssey. Ignited by the SpaceX-API and an array of NASA APIs, it unveils captivating images, videos, and real-time astronaut count. Discover the universe's secrets, learn about celestial marvels, and stay attuned to space news via the Space News API. This platform seamlessly blends learning and exploration, all within a single cosmic panorama.
                        </p>
                        <div className="flex items-center justify-center space-x-1 md:space-x-4">
                            <a href="https://stellar-ashen.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                                <img src={LinkIcon} alt="Live Demo Icon" className="h-4 w-4 mr-1 md:mr-2" />
                                Live Demo
                            </a>
                            <span className="mx-1 md:mx-2">|</span>
                            <a href="https://github.com/Rookie1829/Stellar" target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                                <img src={Github} alt="Source Code Icon" className="h-4 w-4 mr-1 md:mr-2" />
                                Source Code
                            </a>
                        </div>
                    </div>

                    <div className="card card-shadow bg-white p-4 md:p-8 rounded w-full max-w-screen-lg text-center mx-2 mb-8 flex flex-col items-center justify-between">
                        <img src={Chatbot} alt="Project 2" className="mx-auto w-full md:w-3/4 lg:w-1/2 h-32 md:h-1/2 object-cover rounded" />
                        <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-blue-600 mt-4 md:mt-6">Atlas</h3>
                        <p className="text-base text-black mt-4 font-bold">Tech Stack:</p>
                        <div className="flex flex-wrap justify-center items-center mt-2 space-x-2 md:space-x-4">
                            <img src={Next} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                            <img src={Java} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                            <img src={Python} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                            <img src={Tail} alt="Tech Stack" className="h-8 mx-1 md:mx-2" />
                        </div>
                        <p className="mt-4 text-md md:text-basebp-6 p-6">
                            Atlas is a versatile digital assistant designed to engage in intelligent conversations, solve complex math problems, and assist with a wide range of writing tasks. From crafting essays to composing poems and even drafting entire books, Atlas seamlessly combines chat functionality with advanced problem-solving and creative writing capabilities, making it an indispensable tool for students, professionals, and anyone in between looking for a multi-functional bot companion.
                        </p>
                        <hr className="my-4 w-3/4 mx-auto" />
                        <p className="mt-2 text-sm">Using free tier of render so backend will take a few mins to spin up!</p>
                        <hr className="my-4 w-3/4 mx-auto" />
                        <div className="flex items-center justify-center space-x-1 md:space-x-4">
                            <a href="https://atlas-black-beta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                                <img src={LinkIcon} alt="Live Demo Icon" className="h-4 w-4 mr-1 md:mr-2" />
                                Live Demo
                            </a>
                            <span className="mx-1 md:mx-2">|</span>
                            <a href="https://github.com/Rookie1829/Atlas" target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                                <img src={Github} alt="Source Code Icon" className="h-4 w-4 mr-1 md:mr-2" />
                                Front End
                            </a>
                            <span className="mx-1 md:mx-2">|</span>
                            <a href="https://github.com/Rookie1829/atlas-backend" target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                                <img src={Github} alt="Source Code Icon" className="h-4 w-4 mr-1 md:mr-2" />
                                Back End
                            </a>
                        </div>
                    </div>
                </div>

            )}

            {activeCategory === 'Data Science' && (
                <div className="card card-shadow bg-white p-4 md:p-8 rounded w-full max-w-screen-lg text-center mx-2 mb-8 flex flex-col items-center justify-between">
                    <img src={CommingSoon} alt="Project 2" className="mx-auto w-full md:w-3/4 lg:w-1/2 h-32 md:h-1/2 object-cover rounded" />
                    <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-blue-600 mt-4 md:mt-6">Coming Soon</h3>
                    <p className="text-base text-black mt-4 font-bold">Tech Stack:</p>
                    <div className="flex flex-wrap justify-center items-center mt-2 space-x-2 md:space-x-4">

                    </div>
                    <p className="mt-4 text-md md:text-basebp-6 p-6">
                        This Project is currently a work in progress
                    </p>
                    <div className="flex items-center justify-center space-x-1 md:space-x-4">
                        <a href="https://stellar-ashen.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                            <img src={LinkIcon} alt="Live Demo Icon" className="h-4 w-4 mr-1 md:mr-2" />
                            Live Demo
                        </a>
                        <span className="mx-1 md:mx-2">|</span>
                        <a href="https://github.com/Rookie1829/Stellar" target='_blank' rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors flex items-center">
                            <img src={Github} alt="Source Code Icon" className="h-4 w-4 mr-1 md:mr-2" />
                            Source Code
                        </a>
                    </div>
                </div>
            )}

            <p className={`text-4xl text-blue-600 absolute bottom-0 left-0 transform ${bottomTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={bottomTagRef}>&lt;/section&gt;</p>
        </section>
    );
};

export default Projects;
