import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
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

    const validateForm = (formData) => {
        for (let value of formData.values()) {
            if (value.trim() === "") {
                return false;
            }
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        if (!validateForm(formData)) {
            toast.error("Please fill out all fields.", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: 'text-white text-xl bg-red-500' 
            });
            return; 
        }

        const response = await fetch('https://formspree.io/f/myyqeqzz', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            e.target.reset();
            toast.success("Thank you for reaching out!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: 'text-white text-xl bg-blue-500' 
            });
        }
    };

    return (
        <section id="contact" className="font-source-code-pro p-10 pb-56 pt-40 mt-8 relative">
            <p className={`text-4xl text-blue-600 absolute top-0 left-0 transform ${topTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={topTagRef}>&lt;section id="contact"&gt;</p>
            
            <div className="text-center">
                <h2 className="text-4xl font-bold tracking-wide text-white mb-8">Contact</h2>
                
                <div className="bg-white p-8 rounded shadow-lg max-w-xl mx-auto">
                    <form onSubmit={handleSubmit}>            
                        <input type="email" name="email" placeholder="Your Email" className="p-2 rounded mb-4 w-full border-2 border-blue-600 focus:outline-none focus:border-blue-800" />
                        <input type="text" name="name" placeholder="Your Name" className="p-2 rounded mb-4 w-full border-2 border-blue-600 focus:outline-none focus:border-blue-800" />
                        <textarea name="message" placeholder="Your Message" className="p-2 rounded mb-4 w-full h-32 border-2 border-blue-600 focus:outline-none focus:border-blue-800"></textarea>
                        <button type="submit" className="mt-2 text-blue-500 border-2 border-blue-500 p-2 rounded w-full hover:bg-blue-500 hover:text-white transition-colors duration-300">Send Message</button>
                    </form>
                </div>
            </div>
            
            <p className={`text-4xl text-blue-600 absolute bottom-0 left-0 transform ${bottomTagVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`} ref={bottomTagRef}>&lt;/section&gt;</p>

            <ToastContainer />
        </section>
    );
};

export default Contact;
