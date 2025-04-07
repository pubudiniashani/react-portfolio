import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 ">
            <h2 className="text-4xl font-bold text-center mt-14 mb-20 text-[#b0bec5]">Contact </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left side content */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#90a4ae]">Get in Touch</h2>
                    <p className="text-lg text-[#78909c]">
                        Feel free to reach out to me !!
                    </p>

                    <div className="space-y-4">

                        <div className="flex items-center text-gray-600">
                            <span className="mr-3">
                                <FaEnvelope className="text-gray-600"/>
                            </span>
                            <a href="mailto:pubudiniashani2000@gmail.com" className="text-white">pubudiniashani2000@gmail.com</a>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <span className="mr-3">
                                <FaLinkedin className="text-blue-600"/>
                            </span>
                            <a href="https://www.linkedin.com/in/pubudini-ashani-23ba63251/" target="_blank"
                               rel="noopener noreferrer" className="hover:underline">
                                Pubudini Ashani
                            </a>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <span className="mr-3">📍</span>
                            <p className="text-white">Horana,Sri Lanka</p>
                        </div>
                    </div>
                </div>

                {/* Right side contact form */}
                <div>
                    <form className="space-y-6">
                        <div>
                            <input type="text" id="name" name="name"
                                   className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-white" placeholder="Your Name"
                                   required/>
                        </div>
                        <div>
                            <input type="email" id="email" name="email"
                                   className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-white"
                                   placeholder="Your Email" required/>
                        </div>
                        <div>

                            <textarea id="message" name="message"
                                      className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-white" rows={6}
                                      placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit"
                                className="w-1/2 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};


