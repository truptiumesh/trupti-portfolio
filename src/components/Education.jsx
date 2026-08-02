import FadeInSection from "./FadeInSection";
function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-24"
    >
        <FadeInSection>
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="bg-slate-800 rounded-3xl p-10 shadow-xl border border-slate-700">

          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">🎓</div>

            <div>
              <h3 className="text-3xl font-bold">
                Bachelor of Engineering
              </h3>

              <p className="text-blue-400 text-xl">
                Computer Science and Engineering
              </p>
            </div>
          </div>

          <div className="space-y-4 text-gray-300 text-lg">

  <p>
    <strong>College:</strong> Atria Institute of Technology
  </p>

  <p>
    <strong>Location:</strong> Bengaluru, Karnataka
  </p>

  <p>
    <strong>Duration:</strong> 2023 – 2027
  </p>

  <p>
    <strong>Current Status:</strong> 3rd Year Student
  </p>

  {/* Currently Learning */}
  <div className="mt-8">
    <h4 className="text-2xl font-semibold text-blue-400 mb-4">
      Currently Learning
    </h4>

    <div className="flex flex-wrap gap-3">

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        React.js
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        Node.js
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        Express.js
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        MongoDB
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        Python
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        Data Structures
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        REST APIs
      </span>

      <span className="bg-blue-600 px-4 py-2 rounded-full">
        Git & GitHub
      </span>

    </div>
  </div>

</div>

        </div>

      </div>
      </FadeInSection>
    </section>
  );
}

export default Education;