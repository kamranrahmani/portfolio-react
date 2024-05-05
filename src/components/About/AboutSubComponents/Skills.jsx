
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div className="mx-auto my-32 w-[80%]">
      <h1 className="text-center text-2xl text-white font-bold mb-16">
         MY SKILLS
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 justify-items-center">
        <SkillItem name={'JavaScript'} percent={80}/>
        <SkillItem name={'Python'} percent={80}/>
        <SkillItem name={'REACT JS'} percent={80}/>
        <SkillItem name={'Node.js'} percent={75}/>
        <SkillItem name={'Express.js'} percent={75}/>
        <SkillItem name={'TypeScript'} percent={60}/>
        <SkillItem name={'HTML'} percent={90}/>
        <SkillItem name={'CSS'} percent={90}/>
        <SkillItem name={'Next.js'} percent={40}/>
      </div>
    </div>
  );
}

export default Skills;
