import FadeInSection from "./FadeInSection";
function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "SQL"],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-24"
    >
        <FadeInSection>
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-slate-700 rounded-lg px-4 py-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
      </FadeInSection>
    </section>
  );
}

export default Skills;