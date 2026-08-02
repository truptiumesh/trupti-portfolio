import profile from "../images/profile.jpeg";
import FadeInSection from "./FadeInSection";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-800 text-white py-24"
    >
        <FadeInSection>
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <div className="flex justify-center">

            <img
              src={profile}
              alt="Profile"
              className="w-80 h-80 object-cover rounded-3xl shadow-2xl border-4 border-blue-500"
            />

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-3xl font-semibold mb-6">
              Computer Science Engineering Student
            </h3>

            <p className="text-gray-300 leading-8">

              I'm Trupti Umesh, a Computer Science Engineering student at
              Atria Institute of Technology. I enjoy building full-stack web
              applications that are responsive, user-friendly, and scalable.

              My primary tech stack includes React.js, Node.js, Express.js,
              MongoDB, JavaScript, Python, and SQL. I enjoy solving real-world
              problems through clean and efficient code.

              I am currently looking for Software Development internship
              opportunities where I can contribute to meaningful projects
               while continuously improving my technical skills.

            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-slate-900 p-4 rounded-xl">
                ✅ Full Stack Development
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                ✅ React.js
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                ✅ Problem Solving
              </div>

              <div className="bg-slate-900 p-4 rounded-xl">
                ✅ Quick Learner
              </div>

            </div>

          </div>

        </div>

      </div>
      </FadeInSection>
    </section>
  );
}

export default About;