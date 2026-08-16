import { motion } from "framer-motion";

const services = [
  {
    title: "Play & Learn",
    description: "Fun activities that help children learn new things.",
    icon: "🎨",
  },
  {
    title: "Healthy Food",
    description: "Nutritious meals for healthy and happy children.",
    icon: "🍎",
  },
  {
    title: "Safe Environment",
    description: "A safe and friendly place for every child.",
    icon: "🛡️",
  },
];

function Services() {
  return (
    <section className="bg-[#f7f0e6] px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12 text-center">
          <p className="mb-3 font-medium text-orange-400">
            ✦ Our Services
          </p>

          <h2 className="text-4xl font-bold text-slate-700 md:text-5xl">
            What We Provide
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            We provide a safe, creative and enjoyable environment
            where children can learn and grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white p-8 text-center shadow-lg"
            >

              <div className="mb-5 text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-700">
                {service.title}
              </h3>

              <p className="mt-3 text-slate-500">
                {service.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;