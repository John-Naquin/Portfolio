import React, { useState, useEffect, useRef } from 'react';

const Work = () => {
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
        <section id="work" className="font-source-code-pro px-10 md:px-20 pb-56 pt-40 mt-8 relative">
            <p className={`text-4xl text-blue-600 absolute top-0 left-0 transform ${topTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={topTagRef}>&lt;section id="work"&gt;</p>
            
            <h1 className="text-3xl font-bold tracking-wide text-blue-600 text-center mb-8">Work Experience</h1>

            <div className="mb-20">
                <h4 className="text-xl font-bold tracking-wide mt-4 text-blue-600 text-center">Code Ninjas</h4>
                <h5 className="text-lg font-semibold tracking-wide mt-2 text-black text-center">Instructor | Pensacola, Florida | August 2023 - Present</h5>
                <ul className="text-lg md:text-xl tracking-wide mt-4 mx-auto max-w-2xl pl-0">
                    <li className="my-3 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">Teaching kids programming fundamentals using JavaScript, Python, and C#.</li>
                    <li className="my-3 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">Guide students through practice material, providing feedback to center manager and parents.</li>
                    <li className="my-3 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">Plan activities to enhance their programming and game design skills.</li>
                </ul>
            </div>

            <div className="mb-20">
                <h4 className="text-xl font-bold tracking-wide mt-4 text-blue-600 text-center">Mood Social and Dating</h4>
                <h5 className="text-lg font-semibold tracking-wide mt-2 text-black text-center">Software Developer | Remote | October 2023 - June 2024</h5>
                <ul className="text-lg md:text-xl tracking-wide mt-4 mx-auto max-w-2xl pl-0">
                    <li className="my-3 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">Utilized Android Studio and various code emulators to rigorously test and debug the Mood app, ensuring the code performed optimally across different devices and scenarios.</li>
                    <li className="my-3 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">Developed the front end of the Mood app with React Native and the back end with Python to deliver a seamless and responsive user experience. The app reached over 1,000 downloads across iOS and Android, with more than 300 daily active users.</li>
                    <li className="my-3 pl-5 relative list-none before:content-['•'] before:absolute before:left-0 before:text-blue-600">Developed key features for the app, including an admin portal with app insights and specialized account management, a verification system for monthly payments or social media, and the integration of OpenAI's advanced AI capabilities to enhance conversational skills.</li>
                </ul>
            </div>

            <p className={`text-4xl text-blue-600 absolute bottom-0 left-0 transform ${bottomTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={bottomTagRef}>&lt;/section&gt;</p>
        </section>
    );
};

export default Work;
