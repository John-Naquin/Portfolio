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

            <div className="mb-20 text-center">
                <h4 className="text-xl font-bold tracking-wide mt-4 text-blue-600">Code Ninjas</h4>
                <h5 className="text-lg font-semibold tracking-wide mt-2 text-black">Instructor | Pensacola, Florida | August 2023 - Present</h5>
                <ul className="text-xl md:text-2xl tracking-wide mt-4 mx-auto max-w-3xl list-disc pl-5 leading-loose">
                    <li className="my-3">Teaching kids programming fundamentals using JavaScript, Python, and C#. </li>
                    <li className="my-3">Guide students through practice material, providing feedback to center manager and parents. </li>
                    <li className="my-3">Plan activities to enhance their programming and game design skills. </li>
                </ul>
            </div>

            <div className="mb-20 text-center">
                <h4 className="text-xl font-bold tracking-wide mt-4 text-blue-600">University of Louisiana at Lafayette Housing</h4>
                <h5 className="text-lg font-semibold tracking-wide mt-2 text-black">Intern | Lafayette, Louisiana | May 2021 - May 2023</h5>
                <ul className="text-xl md:text-2xl tracking-wide mt-4 mx-auto max-w-3xl list-disc pl-5 leading-loose">
                    <li className="my-3">Maintained 394 apartments and 28 buildings while maintaining the area around the buildings.</li>
                    <li className="my-3">Worked with more than 600+ residents to help them with any issues they may have with their living situations.</li>
                    <li className="my-3">Performed as a team with other interns and building manager to complete all necessary task.</li>
                </ul>
            </div>
            


            <p className={`text-4xl text-blue-600 absolute bottom-0 left-0 transform ${bottomTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={bottomTagRef}>&lt;/section&gt;</p>
        </section>
    );
};

export default Work;
