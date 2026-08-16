import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ onHomeChange }) {

  const [homeOpen, setHomeOpen] = useState(false);

  const [categoryOpen, setCategoryOpen] = useState(false);

  const homePages = [
    {
      id: 1,
      name: "Home 01",
      image: "https://www.ex-coders.com/php-template/kidsa/assets/img/header/home-1.jpg",
    },
    {
      id: 2,
      name: "Home 02",
      image: "https://www.ex-coders.com/php-template/kidsa/assets/img/header/home-2.jpg",
    },
    {
      id: 3,
      name: "Home 03",
      image: "https://www.ex-coders.com/php-template/kidsa/assets/img/header/home-3.jpg",
    },
    {
      id: 4,
      name: "Home 04",
      image: "https://www.ex-coders.com/php-template/kidsa/assets/img/header/home-4.jpg",
    },
  ];

  // This function changes the Home page
  const selectHome = (id) => {

    // Send selected number to App.jsx
    onHomeChange(id);

    // Close dropdown
    setHomeOpen(false);
  };

  return (
    <header className="relative z-50">

      {/* NAVBAR */}
      <nav className="bg-[#f7f0e6] px-6 py-5">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LOGO */}
          <img
            src="https://www.ex-coders.com/php-template/kidsa/assets/img/logo/logo.svg"
            alt="Kidsa"
            className="h-14 w-auto"
          />

          {/* CATEGORY */}
          <div className="relative hidden lg:block">

            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                border
                border-slate-300
                px-6
                py-4
                text-slate-700
              "
            >
              <span className="text-orange-400">
                ▦
              </span>

              Category

              <span>
                ⌄
              </span>

            </button>

            {categoryOpen && (

              <div className="
                absolute
                left-0
                top-16
                z-50
                w-52
                rounded-lg
                bg-white
                py-3
                shadow-xl
              ">

                <p className="px-4 py-2 font-bold">
                  Category
                </p>

                <button className="block w-full px-4 py-2 text-left hover:bg-orange-50">
                  Designer
                </button>

                <button className="block w-full px-4 py-2 text-left hover:bg-orange-50">
                  Developer
                </button>

                <button className="block w-full px-4 py-2 text-left hover:bg-orange-50">
                  Graphic Designer
                </button>

              </div>

            )}

          </div>


          {/* MENU */}
          <div className="hidden items-center gap-9 lg:flex">

            {/* HOME */}
            <div className="relative">

              <button
                onClick={() => setHomeOpen(!homeOpen)}
                className="
                  flex
                  items-center
                  gap-2
                  font-medium
                  text-slate-700
                  hover:text-orange-400
                "
              >

                Home

                <motion.span
                  animate={{
                    rotate: homeOpen ? 180 : 0
                  }}
                >
                  ⌄
                </motion.span>

              </button>


              {/* HOME DROPDOWN */}
              <AnimatePresence>

                {homeOpen && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -20
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    exit={{
                      opacity: 0,
                      y: -20
                    }}
                    transition={{
                      duration: 0.3
                    }}
                    className="
                      absolute
                      left-1/2
                      top-12
                      z-50
                      w-[1050px]
                      -translate-x-1/2
                      rounded-xl
                      bg-white
                      p-8
                      shadow-2xl
                    "
                  >

                    <div className="grid grid-cols-4 gap-7">

                      {homePages.map((page) => (

                        <button
                          key={page.id}
                          onClick={() => selectHome(page.id)}
                          className="group text-center"
                        >

                          {/* IMAGE */}
                          <div className="
                            overflow-hidden
                            rounded-lg
                            border
                            border-slate-200
                          ">

                            <img
                              src={page.image}
                              alt={page.name}
                              className="
                                h-64
                                w-full
                                object-cover
                                object-top
                                transition
                                duration-500
                                group-hover:scale-105
                              "
                            />

                          </div>

                          {/* NAME */}
                          <h3 className="
                            mt-4
                            text-lg
                            font-semibold
                            text-slate-700
                            group-hover:text-orange-400
                          ">
                            {page.name}
                          </h3>

                        </button>

                      ))}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>


            {/* OTHER LINKS */}
            <a
              href="#about"
              className="text-slate-700 hover:text-orange-400"
            >
              About Us
            </a>

            <a
              href="#programs"
              className="text-slate-700 hover:text-orange-400"
            >
              Programs
            </a>

            <a
              href="#pages"
              className="text-slate-700 hover:text-orange-400"
            >
              Pages
            </a>

            <a
              href="#blog"
              className="text-slate-700 hover:text-orange-400"
            >
              Blog
            </a>

            <a
              href="#contact"
              className="text-slate-700 hover:text-orange-400"
            >
              Contact Us
            </a>

          </div>


          {/* RIGHT */}
          <div className="hidden items-center gap-5 lg:flex">

            <button className="
              h-14
              w-14
              rounded-full
              border
              border-slate-300
            ">
              ⌕
            </button>

            <button className="
              rounded-2xl
              bg-orange-400
              px-9
              py-5
              font-semibold
              text-white
            ">
              Get A Quote →
            </button>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;