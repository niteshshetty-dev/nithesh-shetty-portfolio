import SkillContainer from "./SkillContainer";
import { skills } from "../data/Skills";
import { ChevronDown } from "lucide-react";

const Skills = () => (
  <section id="skills" className="py-16 px-6 bg-blue-50 text-[#0f172a]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Technical Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <SkillContainer key={index} name={skill} />
        ))}
      </div>
    </div>
    <div className="flex justify-center mt-10">
      <a href="#project" className="animate-bounce text-blue-700">
        <ChevronDown className="w-6 h-6" />
      </a>
    </div>
  </section>
);

export default Skills;
