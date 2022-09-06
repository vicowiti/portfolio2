import React from "react";
import { skills } from "../skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="skills min-h-[100vh]" id="skills">
      <div className="mt-20 ">
        <h1 className="text-[30px] lg:text-[65px] font-bold p-5">Skills</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {skills.map((skill) => (
          <SkillCard skill={skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
