import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <footer className="bg-[#36566d] text-white">

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* LOGO */}

        <div>

          <h2 className="text-4xl font-extrabold">
            🌴 Kidsa
          </h2>

          <p className="mt-5 leading-7 text-[#d7e1e6]">
            A happy place where children learn,
            play and grow together.
          </p>

          <div className="mt-6 flex gap-3">

            <button className="rounded-full bg-white/10 p-3 hover:bg-[#f5a05a]">
              <FacebookIcon />
            </button>

            <button className="rounded-full bg-white/10 p-3 hover:bg-[#f5a05a]">
              <TwitterIcon />
            </button>

            <button className="rounded-full bg-white/10 p-3 hover:bg-[#f5a05a]">
              <InstagramIcon />
            </button>

            <button className="rounded-full bg-white/10 p-3 hover:bg-[#f5a05a]">
              <YouTubeIcon />
            </button>

          </div>

        </div>


        {/* QUICK LINKS */}

        <div>

          <h3 className="text-xl font-extrabold">
            Quick Links
          </h3>

          <div className="mt-5 space-y-3">

            <a href="#home" className="block hover:text-[#f5a05a]">
              Home
            </a>

            <a href="#about" className="block hover:text-[#f5a05a]">
              About Us
            </a>

            <a href="#programs" className="block hover:text-[#f5a05a]">
              Programs
            </a>

            <a href="#teachers" className="block hover:text-[#f5a05a]">
              Teachers
            </a>

          </div>

        </div>


        {/* PROGRAMS */}

        <div>

          <h3 className="text-xl font-extrabold">
            Programs
          </h3>

          <div className="mt-5 space-y-3">

            <a href="#programs" className="block hover:text-[#f5a05a]">
              Creative Arts
            </a>

            <a href="#programs" className="block hover:text-[#f5a05a]">
              Early Learning
            </a>

            <a href="#programs" className="block hover:text-[#f5a05a]">
              Play & Sports
            </a>

            <a href="#gallery" className="block hover:text-[#f5a05a]">
              Gallery
            </a>

          </div>

        </div>


        {/* CONTACT */}

        <div>

          <h3 className="text-xl font-extrabold">
            Contact
          </h3>

          <p className="mt-5 leading-7 text-[#d7e1e6]">
            6391 Elgin St.
            <br />
            Celina, USA
          </p>

          <p className="mt-4 text-[#d7e1e6]">
            info@example.com
          </p>

          <p className="mt-2 text-[#d7e1e6]">
            +1 234 567 890
          </p>

        </div>

      </div>


      {/* COPYRIGHT */}

      <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-[#d7e1e6]">

        © 2026 Kidsa. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;