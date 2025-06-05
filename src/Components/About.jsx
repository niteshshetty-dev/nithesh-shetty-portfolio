import { ChevronDown } from "lucide-react";

function About() {
  return (
    <>
      <section id="about" className="py-16 px-6  bg-white text-[#0f172a]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-base leading-relaxed text-gray-700">
              I’m a Frontend Developer with 4 years of IT experience, currently
              focused on building responsive and user-friendly web applications
              using React.js, JavaScript (ES6+), and Tailwind CSS. I’ve been
              building real-world projects and internal tools with React,
              integrating RESTful APIs, and applying component-level testing —
              as part of my career transition into full-time frontend
              development.
            </p>
            <ul className="mt-6 space-y-2 list-disc list-inside text-gray-800">
              <li>
                4 years of IT experience with React-based internal tools and
                personal projects
              </li>
              <li>
                Proficient in React.js, JavaScript (ES6+), Tailwind CSS, and
                Redux
              </li>
              <li>
                Hands-on experience with REST API integration and testing using
                Vitest
              </li>
              <li>
                Strong skills in debugging, performance tuning, and clean UI
                development
              </li>
              <li>
                Recognized with multiple performance awards at TCS for ownership
                and initiative
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="#skills"
            className="animate-bounce text-[#0f172a] hover:text-blue-600"
          >
            <ChevronDown className="w-6 h-6" />
          </a>
        </div>
      </section>
      ;
    </>
  );
}

export default About;
