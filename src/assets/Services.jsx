import { motion } from "framer-motion";

function Services() {
  return (
    <section className="px-6 py-24">

      <div className="mx-auto max-w-7xl">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {[
            "Web Development",
            "UI/UX Design",
            "Data Analytics"
          ].map((service, index) => (

            <motion.div
              key={service}
              whileHover={{
                scale: 1.05,
                rotate: 1
              }}
              className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 p-8"
            >

              <div className="mb-5 text-5xl">
                {["💻", "🎨", "📊"][index]}
              </div>

              <h3 className="text-2xl font-bold">
                {service}
              </h3>

              <p className="mt-4 text-slate-400">
                Professional solutions designed for modern
                businesses and developers.
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;