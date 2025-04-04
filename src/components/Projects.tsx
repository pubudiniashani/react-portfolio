import image1 from "../assets/green shadow.png";
import image2 from "../assets/pos.png";
import image3 from "../assets/book store.png";
import image4 from "../assets/chat app.png";
import image5 from "../assets/bookworm library.png";
import image6 from "../assets/chat app.png";


export const Projects = () => {
    const projects = [
        {
            title: "Green Shadow (Pvt) Ltd",
            description: "A crop monitoring system is developed for managing crops,fields,staff,vehicles etc.",
            image: image1, // Unique Image for Project 1
            link: "#",
            github: "https://github.com/pubudiniashani/green-shadow-react",
        },
        {
            title: "Point Of Sales System",
            description: "A productivity tool to track tasks, deadlines, and collaboration with teams.",
            image: image2, // Unique Image for Project 2
            link: "#",
        },
        {
            title: "Book Store Management System",
            description: "A modern portfolio showcasing projects and skills using React and Tailwind CSS.",
            image: image3, // Unique Image for Project 3
            link: "#",
        },
        {
            title: "Chat application",
            description: "A modern portfolio showcasing projects and skills using React and Tailwind CSS.",
            image: image4, // Unique Image for Project 3
            link: "#",
        },
        {
            title: "Bookworm library",
            description: "A modern portfolio showcasing projects and skills using React and Tailwind CSS.",
            image: image5, // Unique Image for Project 3
            link: "#",
        },
        {
            title: "Chat application",
            description: "A modern portfolio showcasing projects and skills using React and Tailwind CSS.",
            image: image6, // Unique Image for Project 3
            link: "#",
        },
    ];

    return (
        <section id="projects" className="py-20 ">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-gray-400 mb-12">
                    My Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index}
                             className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mt-2">{project.description}</p>

                            </div>
                            <div className="flex justify-center items-center gap-2 mt-1 mb-8">
                                <span className="font-medium">GitHub</span>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:scale-110 transition"
                                >
                                    <i className="fa-brands fa-github"
                                       style={{color: "#1a5fb4", fontSize: "2rem"}}></i>
                                </a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
