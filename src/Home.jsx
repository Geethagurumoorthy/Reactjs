import { motion } from "framer-motion";

function Home() {
  return (
    <main className="overflow-hidden bg-[#f8f0e5]">

      {/* HERO */}
      <section className="relative px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <p className="mb-4 text-base font-semibold text-orange-400 sm:text-lg">
              ✦ Kindergarten & Baby Care
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#35536b] sm:text-5xl md:text-6xl lg:text-7xl">

              Kids' Promising{" "}

              <span className="text-orange-400">
                Tomorrow
              </span>

              {" "}Ahead

            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg lg:mx-0">

              Suspendisse non blandit sapien. Nunc eleifend,
              enim et porta porta eros risus tincidunt diam,
              vel sodales.

            </p>


            {/* BUTTONS */}
            <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

              <button
                className="rounded-full bg-orange-400 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500"
              >
                Discover More →
              </button>

              <button
                className="rounded-full border-2 border-orange-400 px-7 py-3.5 font-semibold text-orange-400 transition hover:bg-orange-400 hover:text-white"
              >
                Learn More
              </button>

            </div>

          </motion.div>


          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto flex w-full max-w-lg justify-center lg:max-w-none"
          >

            {/* Background */}
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e7f2] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px]">
            </div>


            {/* Child */}
            <img
              src="/child.png"
              alt="Happy child"
              className="relative z-10 w-full max-w-[350px] object-contain sm:max-w-[450px] lg:max-w-[600px]"
            />

          </motion.div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="bg-white px-5 py-14 sm:px-8 sm:py-20">

        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: "🛡️",
              title: "Safe Environment",
              text: "Children learn in a secure environment.",
            },
            {
              icon: "🍎",
              title: "Healthy Food",
              text: "Healthy and nutritious food for children.",
            },
            {
              icon: "😊",
              title: "Happy Learning",
              text: "Fun activities make learning enjoyable.",
            },
            {
              icon: "👩‍🏫",
              title: "Expert Teachers",
              text: "Teachers support every child's development.",
            },
          ].map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-orange-100 bg-white p-6 text-center shadow-sm sm:p-8"
            >

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-3xl sm:h-20 sm:w-20 sm:text-4xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-[#35536b] sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* ABOUT */}
      <section className="bg-[#f8f0e5] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <img
              src="https://www.ex-coders.com/php-template/kidsa/assets/img/about/about-01.jpg"
              alt="Children learning"
              className="mx-auto w-full max-w-xl rounded-[35px] object-cover shadow-lg sm:rounded-[45px]"
            />

          </motion.div>


          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            <p className="mb-4 font-semibold text-orange-400">
              ✦ Our Best Activities
            </p>

            <h2 className="text-3xl font-bold leading-tight text-[#35536b] sm:text-4xl md:text-5xl">

              Let Us Know About Our
              Reading And Cultural

            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-500 lg:mx-0">
              Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.
              Suspendisse gravida vitae nisi in tincidunt.
            </p>


            {/* ACTIVITIES */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">

              {[
                ["🔤", "Early Learning", "Fun learning activities."],
                ["🎨", "Creative Arts", "Explore creativity."],
                ["🧠", "Smart Learning", "Build knowledge."],
                ["🎵", "Music & Fun", "Music and games."],
              ].map(([icon, title, text]) => (

                <div
                  key={title}
                  className="flex items-center gap-4 text-left"
                >

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-2xl sm:h-16 sm:w-16">
                    {icon}
                  </div>

                  <div>
                    <h3 className="font-bold text-[#35536b]">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {text}
                    </p>
                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}

export default Home;