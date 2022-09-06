import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../assets/vlogo.png";

const Footer = () => {
  return (
    <footer className="footer min-h-[100px] w-[100vw]">
      <div className=" mx-14">
        <section>
          <img src={logo} alt="logo" className="w-20" />
        </section>
        <section>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/victor-owiti/"
              target="_blank"
              className="  border rounded-full w-12 h-12 flex  items-center justify-center hover:bg-white hover:text-[#121212] hover:scale-105 duration-700"
            >
              <FaLinkedinIn size={30} />
            </a>
            <a
              href="https://twitter.com/victorr_js"
              target="_blank"
              className="border :flex rounded-full w-12 h-12 flex items-center justify-center hover:bg-white hover:text-[#121212] hover:scale-105 duration-700"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://github.com/vicowiti"
              target="_blank"
              className="border rounded-full w-12 h-12 flex items-center justify-center hover:bg-white hover:text-[#121212] hover:scale-105 duration-700"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </section>
      </div>
      <h3 className="w-full text-center text-lg lg:text-2xl p-5">
        Thanks for visiting.
      </h3>
    </footer>
  );
};

export default Footer;
