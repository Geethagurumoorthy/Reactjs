import { motion } from "framer-motion";

import PaletteIcon from "@mui/icons-material/Palette";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";

const programs = [
  {
    icon: PaletteIcon,
    title: "Creative Arts",
    age: "2 - 3 Years",
    text: "Creative activities that help children discover their imagination.",
  },
  {
    icon: MenuBookIcon,
    title: "Early Learning",
    age: "3 - 5 Years",
    text: "Fun educational activities designed for early childhood learning.",
  },
  {
    icon: SportsSoccerIcon,
    title: "Play & Sports",
    age: "4 - 6 Years",
    text: "Physical activities that improve confidence and teamwork.",
  },
];

function Programs() {
  return (
    <section
      id="programs"
      className="bg-[#f8f1e7] px-6 py-24 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">

          <p className="font-bold text-[#f5a05a]">
            Our Programs
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#36566d] md:text-5xl">
            Learning Through
            <span className="text-[#f5a05a]">
              {" "}Fun
            </span>
          </h2>

          <p className="mt-5 leading-7 text-[#60778a]">
            Our programs encourage children to learn naturally
            through creativity, play and exploration.
          </p>

        </div>


        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {programs.map((program, index) => {

            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[30px] bg-white p-8 shadow-md transition hover:shadow-2xl"
              >

                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#fff0e3]">

                  <Icon
                    sx={{
                      fontSize: 42,
                      color: "#f5a05a",
                    }}
                  />

                </div>

                <p className="mt-7 text-sm font-bold text-[#f5a05a]">
                  {program.age}
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-[#36566d]">
                  {program.title}
                </h3>

                <p className="mt-4 leading-7 text-[#60778a]">
                  {program.text}
                </p>

                <button
                  onClick={() => alert(`${program.title} selected`)}
                  className="mt-6 font-bold text-[#36566d] transition group-hover:text-[#f5a05a]"
                >
                  Learn More →
                </button>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Programs;