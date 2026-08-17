import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar({ onHomeChange }) {
  const [homeOpen, setHomeOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const selectHome = (number) => {
    onHomeChange(number);
    setHomeOpen(false);
  };

  return (
    <header className="relative z-50 w-full bg-[#f7f0e6]">

  
      {/* ================= MAIN NAVBAR ================= */}
      <nav className="border-b border-orange-100 bg-[#f7f0e6]">

        <div className="mx-auto max-w-7xl px-4 py-4">

          {/* LOGO */}
          <div className="mb-4 flex justify-center md:mb-0 md:justify-between">

            <img
              src="https://www.ex-coders.com/php-template/kidsa/assets/img/logo.svg"
              alt="Kidsa"
              className="h-14 w-auto"
            />

          </div>


          {/* ================= NAV ITEMS ================= */}
          <div className="mt-4 flex flex-col items-stretch gap-2 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-3">

            {/* CATEGORY */}
            <div className="relative">
              <button
                onClick={() => setCategoryOpen(!categoryOpen)}
                className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-white px-4 py-3 text-left font-medium text-slate-700 transition hover:border-orange-400 hover:text-orange-400 md:w-auto"
              >
                <span>▦ &nbsp; Category</span>
                <span className="ml-4">
                  {categoryOpen ? "⌃" : "⌄"}
                </span>
              </button>

              <AnimatePresence>
                {categoryOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative mt-2 w-full rounded-xl bg-white p-3 shadow-lg md:absolute md:left-0 md:w-48"
                  >
                    <p className="mb-2 font-bold text-slate-700">
                      Category
                    </p>

                    <Link
                      to="#"
                      className="block rounded-lg px-3 py-2 hover:bg-orange-50 hover:text-orange-400"
                    >
                      Designer
                    </Link>

                    <Link
                      to="#"
                      className="block rounded-lg px-3 py-2 hover:bg-orange-50 hover:text-orange-400"
                    >
                      Developer
                    </Link>

                    <Link
                      to="#"
                      className="block rounded-lg px-3 py-2 hover:bg-orange-50 hover:text-orange-400"
                    >
                      Graphic Designer
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* HOME */}
            <div className="relative">

              <button
                onClick={() => setHomeOpen(!homeOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-white hover:text-orange-400 md:w-auto"
              >
                Home
                <span className="ml-3">
                  {homeOpen ? "⌃" : "⌄"}
                </span>
              </button>

              <AnimatePresence>
                {homeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="relative mt-2 rounded-xl bg-white p-2 shadow-lg md:absolute md:left-0 md:w-52"
                  >

                    <button
                      onClick={() => selectHome(1)}
                      className="block w-full rounded-lg px-4 py-3 text-left hover:bg-orange-50 hover:text-orange-400"
                    >
                      Home 01
                    </button>

                    <button
                      onClick={() => selectHome(2)}
                      className="block w-full rounded-lg px-4 py-3 text-left hover:bg-orange-50 hover:text-orange-400"
                    >
                      Home 02
                    </button>

                    <button
                      onClick={() => selectHome(3)}
                      className="block w-full rounded-lg px-4 py-3 text-left hover:bg-orange-50 hover:text-orange-400"
                    >
                      Home 03
                    </button>

                    <button
                      onClick={() => selectHome(4)}
                      className="block w-full rounded-lg px-4 py-3 text-left hover:bg-orange-50 hover:text-orange-400"
                    >
                      Home 04
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>


            {/* ABOUT */}
            <Link
              to="/about"
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-white hover:text-orange-400"
            >
              About Us
            </Link>


            {/* PROGRAMS */}
            <div className="relative">

              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-white hover:text-orange-400 md:w-auto"
              >
                Programs
                <span className="ml-3">
                  {programsOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {programsOpen && (
                <div className="relative mt-2 rounded-xl bg-white p-2 shadow-lg md:absolute md:left-0 md:w-52">

                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-3 hover:bg-orange-50"
                  >
                    Preschool
                  </Link>

                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-3 hover:bg-orange-50"
                  >
                    Kindergarten
                  </Link>

                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-3 hover:bg-orange-50"
                  >
                    Baby Care
                  </Link>

                </div>
              )}

            </div>


            {/* PAGES */}
            <div className="relative">

              <button
                onClick={() => setPagesOpen(!pagesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-white hover:text-orange-400 md:w-auto"
              >
                Pages
                <span className="ml-3">
                  {pagesOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {pagesOpen && (
                <div className="relative mt-2 rounded-xl bg-white p-2 shadow-lg md:absolute md:left-0 md:w-52">

                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-3 hover:bg-orange-50"
                  >
                    Teachers
                  </Link>

                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-3 hover:bg-orange-50"
                  >
                    Gallery
                  </Link>

                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-3 hover:bg-orange-50"
                  >
                    Testimonials
                  </Link>

                </div>
              )}

            </div>


            {/* BLOG */}
            <div className="relative">

              <button
                onClick={() => setBlogOpen(!blogOpen)}
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-white hover:text-orange-400 md:w-auto"
              >
                Blog
                <span className="ml-3">
                  {blogOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {blogOpen && (
                <div className="relative mt-2 rounded-xl bg-white p-2 shadow-lg md:absolute md:left-0 md:w-48">

                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-3 hover:bg-orange-50"
                  >
                    Blog Grid
                  </Link>

                  <Link
                    to="#"
                    className="block rounded-lg px-4 py-3 hover:bg-orange-50"
                  >
                    Blog Details
                  </Link>

                </div>
              )}

            </div>


            {/* CONTACT */}
            <Link
              to="/contact"
              className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-white hover:text-orange-400"
            >
              Contact Us
            </Link>


            {/* SEARCH */}
            <button
              className="
                rounded-xl
                border
                border-slate-300
                bg-white
                px-5
                py-3
                text-slate-700
                transition
                hover:border-orange-400
                hover:text-orange-400
              "
            >
              🔍 Search
            </button>


            {/* QUOTE */}
            <button
              className="
                rounded-xl
                bg-orange-400
                px-6
                py-3
                font-semibold
                text-white
                shadow-md
                transition
                hover:bg-orange-500
              "
            >
              Get A Quote →
            </button>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;