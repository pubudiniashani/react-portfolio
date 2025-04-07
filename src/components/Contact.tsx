
export const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 ">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left side content */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="text-lg text-gray-600">
                        Feel free to reach out to me for any inquiries or just to say hello!
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center text-gray-600">
                            <span className="mr-3">📍</span>
                            <p>Location: Your Location</p>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <span className="mr-3">📧</span>
                            <p>Email: your-email@example.com</p>
                        </div>
                        <div className="flex items-center text-gray-600">
                            <span className="mr-3">🔗</span>
                            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                LinkedIn: your-linkedin
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side contact form */}
                <div>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name</label>
                            <input type="text" id="name" name="name" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" placeholder="Your Name" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input type="email" id="email" name="email" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" placeholder="Your Email" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700">Message</label>
                            <textarea id="message" name="message" className="w-full p-3 mt-2 border border-gray-300 rounded-lg" rows={6} placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};


