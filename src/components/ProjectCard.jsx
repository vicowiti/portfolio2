import React from "react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  const { name, imgUrl, liveUrl, gitUrl } = project;
  return (
    <article className="h-[70vh] overflow-hidden relative rounded-lg">
      <div className="w-full ">
        <img src={imgUrl} alt="Project Thumbnail" className="w-full" />
      </div>
      <div className="absolute bottom-0 rounded-b-lg left-0 w-full bg-black border-black h-36 hover:bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)] hover:border duration-500 ">
        <h3 className="text-xl p-2 font-bold text-center">{name}</h3>
        <div className="flex mt-5 items-center justify-center gap-9">
          <a href={liveUrl} target="_blank">
            <AiOutlineLink size={25} className="hover:scale-110 duration-500" />
          </a>
          <a href={gitUrl} target="_blank">
            <AiFillGithub size={25} className="hover:scale-110 duration-500" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
