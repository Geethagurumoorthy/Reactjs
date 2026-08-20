import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Button } from "@mui/material";

function Navbar() {

  const [homeOpen, setHomeOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-[#f8f1e7] px-6 py-5 lg:px-10">

      <div className="mx-auto flex max-w-[1830px] items-center justify-between">

        {/* LOGO */}

        <a
          href="#home"
          className="flex items-center"
        >

          <div className="mr-2 text-4xl">
            🌴
          </div>

          <h1 className="text-4xl font-extrabold tracking-[-2px] text-[#395970]">
            Kidsa
          </h1>

        </a>


        {/* CATEGORY */}

        <button
          className="
          ml-5
          hidden
          h-[60px]
          w-[190px]
          items-center
          justify-center
          gap-3
          rounded-xl
          border
          border-[#d1cbc2]
          text-[#31546c]
          transition
          hover:bg-white
          lg:flex
          "
        >

          <GridViewIcon className="text-[#f4a05a]" />

          <span>Category</span>

          <KeyboardArrowDownIcon />

        </button>


        {/* DESKTOP MENU */}

        <div className="ml-auto hidden items-center gap-8 xl:flex">

          {/* HOME */}

          <div className="relative">

            <button
              onClick={() => {
                setHomeOpen(!homeOpen);
                setProgramOpen(false);
                setPagesOpen(false);
                setBlogOpen(false);
              }}
              className="flex items-center gap-1 font-semibold text-[#244c68] hover:text-[#f4a05a]"
            >

              Home

              <KeyboardArrowDownIcon />

            </button>


            {homeOpen && (

              <div className="absolute left-0 top-full mt-4 w-52 rounded-xl bg-white p-3 shadow-2xl">

                <a
                  href="#home"
                  className="block rounded-lg px-4 py-3 text-[#31546c] hover:bg-[#fff2e7]"
                >
                  Home One
                </a>

                <a
                  href="#about"
                  className="block rounded-lg px-4 py-3 text-[#31546c] hover:bg-[#fff2e7]"
                >
                  Home Two
                </a>

                <a
                  href="#programs"
                  className="block rounded-lg px-4 py-3 text-[#31546c] hover:bg-[#fff2e7]"
                >
                  Home Three
                </a>

              </div>

            )}

          </div>


          {/* ABOUT */}

          <a
            href="#about"
            className="font-semibold text-[#244c68] hover:text-[#f4a05a]"
          >
            About Us
          </a>


          {/* PROGRAMS */}

          <div className="relative">

            <button
              onClick={() => {
                setProgramOpen(!programOpen);
                setHomeOpen(false);
                setPagesOpen(false);
                setBlogOpen(false);
              }}
              className="flex items-center gap-1 font-semibold text-[#244c68] hover:text-[#f4a05a]"
            >

              Programs

              <KeyboardArrowDownIcon />

            </button>


            {programOpen && (

              <div className="absolute left-0 top-full mt-4 w-56 rounded-xl bg-white p-3 shadow-2xl">

                <a
                  href="#programs"
                  className="block rounded-lg px-4 py-3 hover:bg-[#fff2e7]"
                >
                  Our Programs
                </a>

                <a
                  href="#programs"
                  className="block rounded-lg px-4 py-3 hover:bg-[#fff2e7]"
                >
                  Program Details
                </a>

                <a
                  href="#contact"
                  className="block rounded-lg px-4 py-3 hover:bg-[#fff2e7]"
                >
                  Admission
                </a>

              </div>

            )}

          </div>


          {/* PAGES */}

          <div className="relative">

            <button
              onClick={() => {
                setPagesOpen(!pagesOpen);
                setHomeOpen(false);
                setProgramOpen(false);
                setBlogOpen(false);
              }}
              className="flex items-center gap-1 font-semibold text-[#244c68] hover:text-[#f4a05a]"
            >

              Pages

              <KeyboardArrowDownIcon />

            </button>


            {pagesOpen && (

              <div className="absolute left-0 top-full mt-4 w-52 rounded-xl bg-white p-3 shadow-2xl">

                <a
                  href="#teachers"
                  className="block rounded-lg px-4 py-3 hover:bg-[#fff2e7]"
                >
                  Teachers
                </a>

                <a
                  href="#gallery"
                  className="block rounded-lg px-4 py-3 hover:bg-[#fff2e7]"
                >
                  Gallery
                </a>

                <a
                  href="#faq"
                  className="block rounded-lg px-4 py-3 hover:bg-[#fff2e7]"
                >
                  FAQ
                </a>

              </div>

            )}

          </div>


          {/* BLOG */}

          <div className="relative">

            <button
              onClick={() => {
                setBlogOpen(!blogOpen);
                setHomeOpen(false);
                setProgramOpen(false);
                setPagesOpen(false);
              }}
              className="flex items-center gap-1 font-semibold text-[#244c68] hover:text-[#f4a05a]"
            >

              Blog

              <KeyboardArrowDownIcon />

            </button>


            {blogOpen && (

              <div className="absolute left-0 top-full mt-4 w-52 rounded-xl bg-white p-3 shadow-2xl">

                <a
                  href="#blog"
                  className="block rounded-lg px-4 py-3 hover:bg-[#fff2e7]"
                >
                  Blog
                </a>

                <a
                  href="#blog"
                  className="block rounded-lg px-4 py-3 hover:bg-[#fff2e7]"
                >
                  Blog Details
                </a>

              </div>

            )}

          </div>


          {/* CONTACT */}

          <a
            href="#contact"
            className="font-semibold text-[#244c68] hover:text-[#f4a05a]"
          >
            Contact Us
          </a>

        </div>


        {/* RIGHT */}

        <div className="ml-6 flex items-center gap-5">

          {/* SEARCH */}

          <button
            onClick={() => alert("Search clicked!")}
            className="
            hidden
            h-[60px]
            w-[60px]
            items-center
            justify-center
            rounded-full
            border
            border-[#d1cbc2]
            text-[#244c68]
            hover:bg-white
            md:flex
            "
          >

            <SearchIcon />

          </button>


          {/* QUOTE */}

          <Button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              height: "65px",
              minWidth: "210px",
              borderRadius: "25px",
              backgroundColor: "#f5a05a",
              fontSize: "16px",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "none",

              "&:hover": {
                backgroundColor: "#e88e47",
                boxShadow: "none",
              },
            }}
          >
            Get A Quote
          </Button>


          {/* MOBILE MENU */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden"
          >

            {mobileOpen ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}

          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      {mobileOpen && (

        <div className="mt-5 rounded-2xl bg-white p-5 shadow-xl xl:hidden">

          <a
            href="#home"
            className="block border-b py-3"
          >
            Home
          </a>

          <a
            href="#about"
            className="block border-b py-3"
          >
            About Us
          </a>

          <a
            href="#programs"
            className="block border-b py-3"
          >
            Programs
          </a>

          <a
            href="#teachers"
            className="block border-b py-3"
          >
            Pages
          </a>

          <a
            href="#blog"
            className="block border-b py-3"
          >
            Blog
          </a>

          <a
            href="#contact"
            className="block py-3"
          >
            Contact Us
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;