import image1 from "../assets/green shadow.png";
import image2 from "../assets/pos.png";
import image3 from "../assets/book store.png";
import image4 from "../assets/chat app.png";
import image5 from "../assets/chat app.png";
import image6 from "../assets/chat app.png";


export const Projects = () => {
    const projects = [
        {
            title: "Green Shadow (Pvt) Ltd",
            description: "A full-stack e-commerce platform with secure authentication and Stripe integration.",
            image: image1, // Unique Image for Project 1
            link: "#",
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
            title: "Chat application",
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
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                    My Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mt-2">{project.description}</p>
                                <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">
                                    View Project →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
