const ProjectCard = ({ title, description, tech, github, demo }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition">
    <h3 className="text-xl font-semibold mb-2 text-[#0f172a]">{title}</h3>
    <p className="text-sm text-gray-700 mb-3">{description}</p>
    <p className="text-sm text-gray-500 mb-4">
      <strong>Tech:</strong> {tech}
    </p>
    <div className="flex space-x-4 text-sm text-blue-600">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
