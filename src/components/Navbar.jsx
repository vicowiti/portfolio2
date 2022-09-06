import React from "react";
import logo from "../assets/vlogo.png";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <header className="flex h-[80px] items-center justify-between mx-16 bg-transparent fixed top-0 w-[90vw]">
      <div>
        <a href="#home" className="w-[150px]">
          <img alt="logo" src={logo} className="w-[inherit]" />
        </a>
      </div>
      <div className=" hidden lg:flex gap-8 text-[24px]">
        <a
          href="#home"
          className="hover:text-gray-400 hover:scale-105 duration-700"
        >
          Home
        </a>
        <a
          href="#skills"
          className="hover:text-gray-400 hover:scale-105 duration-700"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="hover:text-gray-400 hover:scale-105 duration-700"
        >
          Projects
        </a>
      </div>
      <div className=" hidden lg:flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/victor-owiti/"
          target="_blank"
          className="  border rounded-full w-12 h-12 hidden lg:flex  items-center justify-center hover:bg-white hover:text-[#121212] hover:scale-105 duration-700"
        >
          <FaLinkedinIn size={30} />
        </a>
        <a
          href="https://twitter.com/victorr_js"
          target="_blank"
          className="border hidden lg:flex rounded-full w-12 h-12  items-center justify-center hover:bg-white hover:text-[#121212] hover:scale-105 duration-700"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://github.com/vicowiti"
          target="_blank"
          className="border rounded-full w-12 h-12 hidden lg:flex items-center justify-center hover:bg-white hover:text-[#121212] hover:scale-105 duration-700"
        >
          <FaGithub size={30} />
        </a>
        <a href="#contact">
          <button className="border h-12 px-5 text-lg hover:bg-white hover:text-[#121212] hover:scale-105 duration-700">
            Lets Connect
          </button>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
