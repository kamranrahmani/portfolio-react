import React from "react";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div className="mx-auto my-32 w-[80%]">
      <h1 className="text-center text-2xl text-white font-bold mb-16">
         MY SKILLS
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 justify-items-center">
        <SkillItem name={'HTML'} percent={90}/>
        <SkillItem name={'CSS'} percent={90}/>
        <SkillItem name={'JAVASCRIPT'} percent={80}/>
        <SkillItem name={'REACT JS'} percent={75}/>
        <SkillItem name={'GraphQL'} percent={60}/>
        <SkillItem name={'Next.js'} percent={60}/>
        <SkillItem name={'Node.js'} percent={50}/>
        <SkillItem name={'Express.js'} percent={50}/>
      </div>
    </div>
  );
}

export default Skills;
