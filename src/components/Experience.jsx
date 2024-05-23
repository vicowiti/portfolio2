import React from "react";
import { experience } from "../experience,js";
import ProjectCard from "./ProjectCard";
const Experience = () => {
  return (
    <section className="projects min-h-[100vh] w-[100vw] mx-1" id="experience">
      <div className="mt-8 ">
        <h1 className="text-[30px] lg:text-[65px] font-bold p-5">Experience</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5 gap-2">
        {experience.map((project) => (
          <div className="flex items-center p-5 bg-white/20 gap-5 my-4 shadow-lg rounded-md">
            <img src={project.image} className="w-16" />
            <div>
              <h4 className="text-2xl font-semibold">{project.name}</h4>
              <h4>{project.duration}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
