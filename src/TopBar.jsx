import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function TopBar() {
  return (
    <div className="relative h-[100px] bg-[#c8e1e8]">

      <div className="mx-auto flex h-[80px] max-w-[1830px] items-center justify-between px-6 lg:px-12">

        {/* LEFT */}

        <div className="flex items-center gap-8 text-[#31546c]">

          <div className="flex items-center gap-2">
            <LocationOnOutlinedIcon />

            <span className="hidden sm:block">
              6391 Elgin St. Celina, USA
            </span>
          </div>

          <div className="flex items-center gap-2">
            <EmailOutlinedIcon />

            <span className="hidden sm:block">
              info@example.com
            </span>
          </div>

        </div>


        {/* RIGHT */}

        <div className="flex items-center gap-4 text-[#31546c]">

          <span className="hidden md:block">
            Follow Us On:
          </span>

          <FacebookIcon
            className="cursor-pointer transition hover:text-[#f5a05a]"
          />

          <TwitterIcon
            className="cursor-pointer transition hover:text-[#f5a05a]"
          />

          <LinkedInIcon
            className="cursor-pointer transition hover:text-[#f5a05a]"
          />

          <YouTubeIcon
            className="cursor-pointer transition hover:text-[#f5a05a]"
          />

        </div>

      </div>


      {/* WAVE */}

      <div className="absolute bottom-[-1px] left-0 w-full">

        <svg
          viewBox="0 0 1920 90"
          preserveAspectRatio="none"
          className="h-[55px] w-full"
        >

          <path
            d="
            M0 45
            C50 100 100 100 150 45
            C200 -10 250 -10 300 45
            C350 100 400 100 450 45
            C500 -10 550 -10 600 45
            C650 100 700 100 750 45
            C800 -10 850 -10 900 45
            C950 100 1000 100 1050 45
            C1100 -10 1150 -10 1200 45
            C1250 100 1300 100 1350 45
            C1400 -10 1450 -10 1500 45
            C1550 100 1600 100 1650 45
            C1700 -10 1750 -10 1800 45
            C1850 100 1900 100 1920 45
            L1920 90
            L0 90
            Z"
            fill="#f8f1e7"
          />

        </svg>

      </div>

    </div>
  );
}

export default TopBar;