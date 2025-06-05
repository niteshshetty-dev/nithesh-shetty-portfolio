import ProjectCard from "./ProjectCard";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A scrollable React portfolio using Tailwind CSS.",
    tech: "React, Tailwind CSS, Framer Motion",
    github: "",
    demo: "",
  },
  {
    title: "E-commerce Frontend",
    description:
      "This is a React-based e-commerce frontend project with basic authentication and cart functionality.",
    tech: "React, React Router, Context API, CSS, Vercel (for deployment)",
    github: "https://github.com/niteshshetty-dev/react-project-eshopping",
    demo: "https://react-project-eshopping.vercel.app/",
  },
  {
    title: "Task Manager App",
    description:
      "This is a simple Task Manager built using React and Redux Toolkit. It allows users to add tasks, mark them as complete, and delete them. It uses React Router for navigation and Redux for state management.",
    tech:
      "React, React Router, Redux Toolkit, Tailwind CSS, Vercel (for deployment)",
    github:
      "https://github.com/niteshshetty-dev/react-project-task-manager-app",
    demo: "https://react-project-task-manager-app.vercel.app/",
  },

  {
    title: "Discover Indian Dance",
    description:
      "An interactive web application that showcases the rich heritage of Indian classical and folk dance forms, categorized by region and style. Built using React and Tailwind CSS, the project serves as an educational and visual exploration tool for Indian dance culture.",
    tech: "React, React Router, CSS, Vercel (for deployment)",
    github:
      "https://github.com/niteshshetty-dev/react-project-discover-Indian-dance",
    demo: "https://react-discover-indian-dance.vercel.app/",
  },
  {
    title: "React Weather App",
    description:
      "A simple weather application built with React and OpenWeatherMap API.",
    tech: "React, CSS, REST API, Vercel (for deployment)",
    github:
      "https://github.com/niteshshetty-dev/react-project-weather-dashboard",
    demo: "https://react-project-weather-dashboard.vercel.app/",
  },
];

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
