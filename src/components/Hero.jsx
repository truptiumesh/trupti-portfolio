import profile from "../images/profile.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-900 min-h-screen flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold text-white">
            Trupti Umesh
          </h1>

          <h2 className="text-3xl font-semibold text-blue-400 mt-5">
            Computer Science Engineering Student
          </h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            Passionate about building modern web applications using
            React, Node.js, Express.js, MongoDB, and Python.
            I enjoy solving real-world problems and continuously
            learning new technologies.
          </p>

          <div className="mt-10 flex gap-5">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-white text-white px-7 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Trupti Umesh"
            className="w-80 h-80 object-cover rounded-full border-8 border-blue-500 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;