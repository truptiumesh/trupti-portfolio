import FadeInSection from "./FadeInSection";
function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-800 text-white py-24"
    >
        <FadeInSection>
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-8">
          Get In Touch
        </h2>

        <p className="text-gray-300 text-lg leading-8 mb-12">
          I'm currently looking for Software Development Internship
          opportunities. If you'd like to discuss a project,
          internship, or collaboration, feel free to reach out.
        </p>

        <div className="space-y-6">

          <div className="bg-slate-900 rounded-xl p-5">
            <p className="text-xl">
              📧 Email
            </p>

            <a
              href="mailto:YOUR_EMAIL@gmail.com"
              className="text-blue-400 hover:underline"
            >
              truptiumesh135@gmail.com
            </a>
          </div>

          <div className="bg-slate-900 rounded-xl p-5">
            <p className="text-xl">
              💼 LinkedIn
            </p>

            <a
              href="https://www.linkedin.com/in/truptiumesh/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              View LinkedIn Profile
            </a>
          </div>

          <div className="bg-slate-900 rounded-xl p-5">
            <p className="text-xl">
              💻 GitHub
            </p>

            <a
              href="https://github.com/truptiumesh"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/truptiumesh
            </a>
          </div>

        </div>

        <div className="mt-12">

          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white transition"
          >
            Download Resume
          </a>

        </div>

      </div>
      </FadeInSection>
    </section>
  );
}

export default Contact;