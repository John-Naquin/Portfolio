import React, { useState, useEffect, useRef } from 'react';

import atom from '../images/atom.png';
import Boot from '../images/bootstrap.png';
import tail from '../images/tailwind.png';
import js from '../images/js.png';
import mongo from '../images/mongodb.png';
import Node from '../images/node-js.png';
import Git from '../images/git.png';
import Python from '../images/python.png';
import express from '../images/express.jpg';
import java from '../images/java.png';

const About = () => {
    const [topTagVisible, setTopTagVisible] = useState(false);
    const [bottomTagVisible, setBottomTagVisible] = useState(false);
    const topTagRef = useRef(null);
    const bottomTagRef = useRef(null);


    const renderSkill = (imageSrc, skillName) => (
        <div className="flex flex-col md:flex-row items-center justify-center mb-4">
            <img src={imageSrc} alt={skillName} className="w-16 h-16" />
            <p className="mt-2 md:mt-0 md:ml-6 text-black text-lg font-semibold text-center flex-1">{skillName}</p>
        </div>
    );

    
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
        <section id="about" className="font-source-code-pro p-10 pb-56 pt-40 mt-8 relative">
            <p className={`text-4xl text-blue-600 absolute top-0 left-0 transform ${topTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={topTagRef}>&lt;section id="about"&gt;</p>

            <div className="text-center">
                <h2 className="text-4xl font-bold tracking-wide text-white">About Me</h2>
                <p className="text-xl tracking-wide mt-4 text-white">Your description...</p>

                <h3 className="text-3xl font-bold tracking-wide mt-8 text-blue-600">Skills</h3>
                <p className="text-lg tracking-wide mt-4 text-black"></p>

    
                <div className="grid grid-cols-1 gap-4 mb-8 max-w-5xl mx-auto">


<div className="bg-white p-6 relative card-corners rounded shadow-lg">
    <h2 className="text-2xl mb-6 text-center font-bold">Frontend</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
            {renderSkill(atom, 'React.js')}
            {renderSkill(Boot, 'Bootstrap')}
            {renderSkill(tail, 'Tailwind CSS')}
        </div>
    
        <div>
            {renderSkill(js, 'Javascript')}
            {renderSkill(Git, 'Git')}
        </div>
    </div>
</div>


<div className="bg-white p-6 relative card-corners rounded shadow-lg">
    <h2 className="text-2xl mb-6 text-center font-bold">Backend</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
            {renderSkill(mongo, 'Mongodb')}
            {renderSkill(Node, 'Node.js')}
            {renderSkill(express, 'Express.js')}
        </div>
        <div>
            {renderSkill(Python, 'Python')}
            {renderSkill(java, 'Java')}
            </div>
    </div>
</div>
</div>



                <h3 className="text-3xl font-bold tracking-wide mt-8 text-blue-600">Education</h3>
                <h4 className="text-xl font-bold tracking-wide mt-4 text-black">University of Louisiana at Lafayette</h4>
                <div className="mt-4 max-w-3xl mx-auto mb-6">
    <p className="text-xl md:text-2xl tracking-wide">
    I began my college studies in 2018 and completed them in 2023. Throughout my academic journey, I immersed myself in studying various programming languages, notably Java and Python, along with other web development tools. I took numerous courses, with a notable emphasis on data structures and algorithms. Holding a bachelor's degree in Computer Science, I have a solid foundation in software development.
    </p>
</div>




            </div>

            <p className={`text-4xl text-blue-600 absolute bottom-0 left-0 transform ${bottomTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={bottomTagRef}>&lt;/section&gt;</p>
        </section>
    );
};

export default About;
