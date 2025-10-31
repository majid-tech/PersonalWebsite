import { Menu } from "lucide-react"
import { X } from "lucide-react";
import { useState } from "react"


export default function Navbar() {
    const [mobileMenuIsOpen, setmobileMenuIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 h-16 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-2 group cursor-pointer">
                        <div>
                            <img 
                                src="/src/assets/images/profile.jpg" 
                                alt="MajidMohammed" 
                                className="w-6 h-6 sm:w-8 sm:h-8 rounded-2xl" /> 
                        </div>

                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Majid</span>
                            <span className="text-blue-400">Mohammed</span>
                        </span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#about" className="text-gray-100 hover:text-blue-400 text-sm lg:text-base">
                            About
                        </a>
                        <a href="#project" className="text-gray-100 hover:text-blue-400 text-sm lg:text-base">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-100 hover:text-blue-400 text-sm lg:text-base">
                        Contact
                        </a>
                    </div>

                    <button 
                        className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
                        onClick={() => setmobileMenuIsOpen((prev) => !prev)}
                        >
                        {mobileMenuIsOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        ) : (
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                    </button>

                    
                </div>
            </div>

            {mobileMenuIsOpen && (<div>
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slideInFromTop duration-300">
                    <div className="">
                        <a 
                        href="#about" 
                        className="block text-gray-100 hover:text-blue-400 text-sm lg:text-base p-3 hover:bg-slate-950"
                        onClick={() => setmobileMenuIsOpen(false)}>
                            About
                        </a>
                        <a 
                        href="#projects" 
                        className="block text-gray-100 hover:text-blue-400 text-sm lg:text-base p-3 hover:bg-slate-950"
                        onClick={() => setmobileMenuIsOpen(false)}>
                            Projects
                        </a>
                        <a 
                        href="#contact" 
                        className="block text-gray-100 hover:text-blue-400 text-sm lg:text-base p-3 hover:bg-slate-950"
                        onClick={() => setmobileMenuIsOpen(false)}>
                        Contact
                        </a>
                    </div>
                        
                </div>
            </div>)}
        </nav>
    )
}