import { motion } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SpeedIcon from "@mui/icons-material/Speed";

const Features = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "React Development",
    description: "Build powerful and reusable React components."
  },
  {
    icon: <DesignServicesIcon fontSize="large" />,
    title: "Modern UI",
    description: "Create beautiful interfaces using Tailwind CSS."
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: "Fast Performance",
    description: "Build responsive and optimized applications."
  }
];

function Features() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-slate-400">
            Everything you need to build a modern website.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {Features.map((Features, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg"
            >

              <div className="mb-5 text-cyan-400">
                {Features.icon}
              </div>

              <h3 className="text-2xl font-semibold">
                {Features.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {Features.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;