function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p>
          © {year} Trupti Umesh. All rights reserved.
        </p>

        <div className="flex gap-6">

          <a
            href="https://github.com/truptiumesh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;