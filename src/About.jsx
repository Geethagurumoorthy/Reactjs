import { motion } from "framer-motion";

import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";

function About() {
  const activities = [
    {
      icon: <AutoStoriesOutlinedIcon fontSize="large" />,
      title: "Early Learning",
      text: "Elit Aenean scelerisque vitae consequat the.",
      bg: "bg-orange-100",
      color: "text-orange-500",
    },
    {
      icon: <PaletteOutlinedIcon fontSize="large" />,
      title: "Creative Arts",
      text: "Elit Aenean scelerisque vitae consequat the.",
      bg: "bg-sky-100",
      color: "text-sky-500",
    },
    {
      icon: <PsychologyOutlinedIcon fontSize="large" />,
      title: "Smart Thinking",
      text: "Elit Aenean scelerisque vitae consequat the.",
      bg: "bg-indigo-100",
      color: "text-indigo-500",
    },
    {
      icon: <MusicNoteOutlinedIcon fontSize="large" />,
      title: "Music & Fun",
      text: "Elit Aenean scelerisque vitae consequat the.",
      bg: "bg-pink-100",
      color: "text-pink-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-10 lg:px-16">

      {/* Main container */}
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* ================= LEFT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          {/* Decorative pencil */}
          <div className="absolute -left-10 -top-8 z-10 hidden text-6xl lg:block">
            ✏️
          </div>

          {/* Image shape */}
          <div className="relative mx-auto max-w-xl overflow-hidden rounded-[40%_60%_55%_45%/45%_45%_55%_55%] border-[8px] border-[#e8f6fa]">

            <img
              src="https://www.ex-coders.com/php-template/kidsa/assets/img/about/04.png"
              alt="Children learning"
              className="h-[500px] w-full object-cover"
            />

          </div>

        </motion.div>


        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Small heading */}
          <p className="mb-4 text-xl font-semibold text-orange-400">
            Our Best Activities
          </p>

          {/* Main heading */}
          <h2 className="text-4xl font-bold leading-tight text-[#38566e] md:text-5xl">
            Let Us Know About Our
            <br />
            Reading And Cultural
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Suspendisse gravida vitae
            nisi in tincidunt.
          </p>


          {/* ================= ACTIVITY CARDS ================= */}
          <div className="mt-10 grid gap-7 sm:grid-cols-2">

            {activities.map((activity, index) => (

              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -5 }}
                className="flex items-center gap-5"
              >

                {/* Icon */}
                <div
                  className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-xl ${activity.bg} ${activity.color}`}
                >
                  {activity.icon}
                </div>

                {/* Text */}
                <div>

                  <h3 className="text-xl font-bold text-[#38566e]">
                    {activity.title}
                  </h3>

                  <p className="mt-2 text-sm leading-5 text-slate-500">
                    {activity.text}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>


      {/* ================= DECORATIVE GIRAFFE ================= */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-0 hidden lg:block"
      >
        <img
          src="https://www.ex-coders.com/php-template/kidsa/assets/img/about/zebra.png"
          alt="Decorative giraffe"
          className="w-36"
        />
      </motion.div>

    </section>
  );
}

export default About;