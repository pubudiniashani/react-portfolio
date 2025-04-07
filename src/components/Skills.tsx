// src/components/Skills.tsx

import { FaJava } from 'react-icons/fa'; // Java icon
import { FaNodeJs } from 'react-icons/fa'; // Node.js icon

import {
    SiReact,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiSpringboot,
    SiMysql,
    SiGit,
    SiPostman,
    SiTypescript,
    SiExpress,
    SiPython,
    SiGithub

} from "react-icons/si";

const skills = [
    { icon: <FaJava />, label: "Java", color: "#E44D26" },
    { icon: <SiReact />, label: "React", color: "#61DAFB" },
    { icon: <SiHtml5 />, label: "HTML", color: "#E34F26" },
    { icon: <SiCss3 />, label: "CSS", color: "#1572B6" },
    { icon: <SiJavascript />, label: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "#38B2AC" },
    { icon: <SiSpringboot />, label: "Spring Boot", color: "#6DB33F" },
    { icon: <SiMysql />, label: "MySQL", color: "#4479A1" },
    { icon: <SiGit />, label: "Git", color: "#F05032" },
    { icon: <SiPostman />, label: "Postman", color: "#FF6C37" },
    { icon: <FaNodeJs />, label: "Node.js", color: "#339933" },  // Node.js icon with color
    { icon: <SiTypescript />, label: "TypeScript", color: "#3178C6" },  // TypeScript icon with color
    { icon: <SiExpress />, label: "Express.js", color: "white" },  // Express.js icon with color
    { icon: <SiPython />, label: "Python", color: "#306998" },  // Python icon with color
    {icon: <SiGithub />, label: "Github", color: "#6C757D" },
];


export const Skills = () => {
    return (
        <section id="skills" className="px-6 py-10 text-center">
            <h2 className="text-4xl font-bold text-center mt-14 mb-20 text-[#cfd8dc]">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center rounded-full  border-white
                        bg-transparent shadow-sm transition duration-300 hover:shadow-2xl hover:bg-gradient-to-r border-1
                        animate-float"
                        title={skill.label}
                    >
                        <div style={{color: skill.color}} className="text-4xl">
                            {skill.icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


