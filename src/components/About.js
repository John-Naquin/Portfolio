import React, { useState, useEffect, useRef } from 'react';

import atom from '../images/atom.png';
import Boot from '../images/bootstrap.png';
import tail from '../images/tailwind.png';
import js from '../images/js.png';
import mongo from '../images/mongodb.png';
import Git from '../images/git.png';
import Python from '../images/python.png';
import java from '../images/java.png';
import AWS from '../images/aws.webp';
import GoogleColab from '../images/googlecolab.png';
import SQL from '../images/sql.png';
import NoSQL from '../images/nosql.jpeg';
import Scrum from '../images/scrum.png';
import SAS from '../images/sas.png';

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
                <h3 className="text-3xl font-bold tracking-wide mt-8 text-blue-600">Skills</h3>
                <p className="text-lg tracking-wide mt-4 text-black"></p>

                <div className="grid grid-cols-1 gap-4 mb-8 max-w-2xl mx-auto">
                    <div className="card card-shadow bg-white p-4 md:p-8 rounded w-full max-w-screen-lg text-center mx-2 mb-8 flex flex-col items-center justify-between hover:ring-4 hover:ring-blue-600 transition-all">
                        <h2 className="text-2xl mb-6 text-center font-bold"></h2>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                {renderSkill(atom, 'React.js')}
                                {renderSkill(mongo, 'Mongodb')}
                                {renderSkill(Git, 'Git')}
                                {renderSkill(js, 'Javascript')}
                                {renderSkill(SAS, 'SAS')}
                                {renderSkill(Scrum, 'Scrum')}
                            </div>

                            <div>
                                {renderSkill(GoogleColab, 'Google Colab')}
                                {renderSkill(SQL, 'SQL')}
                                {renderSkill(NoSQL, 'NoSQL')}
                                {renderSkill(AWS, 'AWS')}
                                {renderSkill(Python, 'Python')}
                                {renderSkill(java, 'Java')}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-20">
                <h3 className="text-3xl font-bold tracking-wide mt-8 text-blue-600 text-center">Education</h3>

                <div className="mb-12">
                    <h4 className="text-xl font-bold tracking-wide mt-4 text-blue-600 text-center">University of Louisiana at Lafayette</h4>
                    <h5 className="text-lg font-semibold tracking-wide mt-2 text-black text-center">Bachelor's Degree in Computer Science | 2018 - 2023</h5>
                    <ul className="text-lg md:text-xl tracking-wide mt-2 mx-auto max-w-2xl pl-0">
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">CMPS 150 Introduction to Computer Science</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">CMPS 340 Design and Analysis of Algorithms</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">CMPS 341 Foundations of Computer Science</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">CMPS 453 Introduction To Software Methodology</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">CMPS 455 Operating Systems</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">CMPS 460 Database Management Systems</li>
                    </ul>
                </div>

                <div className="mb-12">
                    <h4 className="text-xl font-bold tracking-wide mt-4 text-blue-600 text-center">University of West Florida</h4>
                    <h5 className="text-lg font-semibold tracking-wide mt-2 text-black text-center">Master's Degree in Data Science | Present - 2026</h5>
                    <ul className="text-lg md:text-xl tracking-wide mt-2 mx-auto max-w-2xl pl-0">
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">STA 5176 Statistical Modeling</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">STA 6235 Modeling in Regression</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">STA 6707 Multivariate Methods</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">IDC 6210 Machine Learning for Data Science</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">CAP 6771 Data Mining</li>
                        <li className="my-1 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">IDC 6145 Big Data Analytics for Data Science</li>
                    </ul>
                </div>
            </div>

            </div>
            <p className={`text-4xl text-blue-600 absolute bottom-0 left-0 transform ${bottomTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={bottomTagRef}>&lt;/section&gt;</p>
        </section>
    );
};

export default About;
