import React from "react";
import { projects } from "../projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section className="projects min-h-[100vh] mx-16" id="projects">
      <div className="mt-8 ">
        <h1 className="text-[30px] lg:text-[65px] font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
