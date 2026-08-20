function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 md:flex-row">

        <p className="text-slate-400">
          © 2026 MyWebsite. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-cyan-400">
            Instagram
          </a>

          <a href="#" className="hover:text-cyan-400">
            LinkedIn
          </a>

          <a href="#" className="hover:text-cyan-400">
            GitHub
          </a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;