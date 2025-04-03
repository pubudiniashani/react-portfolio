import '../assets/style/Header.css'

export const Header = () => {
    return (
        <header className="w-screen fixed top-0 left-0 h-[80px] bg-[#0a0a23] backdrop-blur-lg shadow-lg z-50 border-b border-white/20">
            <nav className="h-full flex items-center justify-center px-10 text-white">
                <ul className="flex space-x-8 text-lg font-medium">
                    <li className="relative group">
                        <a href="#about" className="text-white hover:text-gray-300 transition-colors">About Me</a>
                        <div className="absolute left-0 w-full h-[2px] bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </li>
                    <li className="relative group">
                        <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
                        <div className="absolute left-0 w-full h-[2px] bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </li>
                    <li className="relative group">
                        <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
                        <div className="absolute left-0 w-full h-[2px] bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </li>
                    <li className="relative group">
                        <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
                        <div className="absolute left-0 w-full h-[2px] bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </li>
                </ul>
            </nav>
        </header>


    );
};
