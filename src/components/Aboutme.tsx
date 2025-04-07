import myImage from "../assets/my.jpg";

export const AboutMe = () => {
    return (
        <section id="about" className="w-full pt-40 pb-20">
            <div className="container mx-auto px-4 md:px-10 w-full">
                <div className="flex flex-col md:flex-row-reverse items-center gap-10 justify-center">

                    {/* Profile Picture */}
                    <div className="w-64 h-64 md:w-80 md:h-80">
                        <img
                            src={myImage}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>


                    <div
                        className="text-center md:text-center max-w-2xl mx-auto ">
                        <h2 className="text-4xl font-semibold text-gray-300 mb-4 animate-bounce">
                            Hi There !! <span role="img" aria-label="waving hand">👋</span>
                        </h2>
                        <p className=" text-lg text-white mx-auto md:text-left max-w-xl leading-loose">
                            I am a passionate software engineering student.
                            I am eager for learning always and growing as a developer. I enjoy exploring new
                            technologies,
                            and constantly improving my skills to build better user experiences.
                        </p>
                    </div>

                </div>

                <div className="flex justify-center mt-8">
                    <a
                        href="https://drive.google.com/file/d/1Cl8omXaUIwLkXXu27WOdP4Y-XGPBkYla/view?usp=sharing"
                        download
                        className="w-40 py-3 bg-[#4c8fc2] text-white rounded-2xl hover:bg-gray-400 transition transform -translate-x-8 text-center inline-block"
                    >
                        Download Resume
                    </a>
                </div>

            </div>
        </section>
    );
};
