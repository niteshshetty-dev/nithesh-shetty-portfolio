import ProjectCard from "./ProjectCard";
import { ChevronDown } from "lucide-react";
import { projects } from "../data/Projects";

const Projects = () => (
  <section id="project" className="py-16 px-6 bg-white text-[#0f172a]">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
    <div className="flex justify-center mt-10">
      <a
        href="#contact"
        className="animate-bounce text-[#0f172a] hover:text-blue-600"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </div>
  </section>
);

export default Projects;
