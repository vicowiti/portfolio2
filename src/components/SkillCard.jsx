import React from "react";

const SkillCard = ({ skill }) => {
  const { imgUrl, name } = skill;
  return (
    <article className="bg-gradient-to-bl from-[rgba(170,54,124,0.5)] shadow-2xl bg-opacity-5 flex flex-col items-center p-10 h-72 rounded-lg">
      <div className="py-10">
        <img src={imgUrl} alt="skill-icon" className="w-20" />
      </div>
      <div className="py-15">
        <h3 className="text-2xl text-center font-extrabold">{name}</h3>
      </div>
    </article>
  );
};

export default SkillCard;
