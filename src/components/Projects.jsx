import FadeInSection from "./FadeInSection";
const projects = [
  {
    title: "Employee Management System",
    description:
      "A full-stack employee management application with secure authentication and CRUD functionality.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/truptiumesh",
  },

  {
    title: "Shop Sphere",
    description:
      "An e-commerce platform featuring authentication, product management, and shopping cart functionality.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/truptiumesh",
  },

  {
    title: "Binance Trading Bot",
    description:
      "A Python-based trading bot that interacts with the Binance API to automate trading strategies.",
    tech: ["Python", "Binance API"],
    github: "https://github.com/truptiumesh/trading-bot-binance",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-800 text-white py-24">
        <FadeInSection>
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 rounded-2xl shadow-lg p-6 hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-black px-5 py-2 rounded-lg hover:bg-gray-200"
              >
                GitHub Repository
              </a>

            </div>
          ))}

        </div>

      </div>
      </FadeInSection>
    </section>
  );
}

export default Projects;