import myImage from "../assets/my.jpg";

export const AboutMe = () => {
    return (
        <section id="about" className="w-full py-20">
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col md:flex-row-reverse items-center gap-10">

                    {/* Profile Picture */}
                    <div className="w-64 h-64 md:w-80 md:h-80">
                        <img
                            src={myImage}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* About Me Text */}
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                        <h2 className="text-4xl font-semibold text-gray-800 mb-4">About Me</h2>
                        <p className="text-lg text-gray-600 w-full">
                            Passionate about crafting clean, functional, and aesthetic web applications.
                            Always learning and growing as a developer.
                        </p>
                    </div>


                </div>
            </div>
        </section>

    );
};
