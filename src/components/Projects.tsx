import image1 from "../assets/green shadow.png";
import image2 from "../assets/pos.png";
import image3 from "../assets/book store.png";
import image4 from "../assets/mobile app.png";
import image5 from "../assets/bookworm library.png";
import image6 from "../assets/portfolio.png";


export const Projects = () => {
    const projects = [
        {
            title: "Green Shadow (Pvt) Ltd",
            description: "The crop monitoring system managing crops,fields,staff,vehicles developed using Java , Spring Boot , MySQL , JS and JWT authentication.",
            image: image1,
            link: "#",
            github: "https://github.com/pubudiniashani/green-shadow-react",
        },
        {
            title: "Point Of Sales System",
            description: "Developed a Point Of Sales system  using HTML , CSS and JS. The main functionalities include customer management, item management, and order processing.",
            image: image2,
            github: "https://github.com/pubudiniashani/Assignment-06",
        },
        {
            title: "Book Store Management System",
            description: "Developed a desktop application for managing a bookstore using Java and JavaFX. ",
            image: image3,
            github:"https://github.com/pubudiniashani/bookshop",
        },
        {
            title: "Book review",
            description: "The book review mobile app is designed by using react native and expo.",
            image: image4,
            github:"https://github.com/pubudiniashani/book-review",
        },
        {
            title: "Bookworm library",
            description: "Developed a desktop application using Java , MySQL and Hibernate ORM. The application  manages books, customers, and orders.",
            image: image5,
            github:"https://github.com/pubudiniashani/Bookworm",
        },
        {
            title: "Porfolio",
            description: "My portfolio is developed using React and Tailwind CSS.",
            image: image6,

        },
    ];

    return (
        <section id="projects" className="py-20 ">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-[#cfd8dc] mb-12">
                    My Projects
                </h2>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {projects.map((project, index) => (
                        <div key={index}
                             className="bg-[#c5cae9] rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
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
