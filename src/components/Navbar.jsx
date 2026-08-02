function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/90 backdrop-blur-md shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="#home"
          className="text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          Trupti Umesh
        </a>

        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#education" className="hover:text-blue-400 transition">
              Education
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>

        </ul>

        <a
          href="/resume.pdf"
          download
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Resume
        </a>

      </nav>
    </header>
  );
}

export default Navbar;