import { motion } from "framer-motion";

function Home() {
  return (
    <main className="overflow-hidden bg-[#f8f0e5]">

      {/* HERO SECTION */}
      <section className="relative min-h-[700px] px-6 py-20">

        {/* Decorative Balloon */}
        <div className="absolute left-10 top-32 hidden md:block">
          <img
            src="https://www.ex-coders.com/php-template/kidsa/assets/img/shape/hero-shape-01.png"
            alt=""
            className="w-28"
          />
        </div>

        {/* Decorative Bee */}
        <div className="absolute right-10 top-40 hidden md:block">
          <img
            src="https://www.ex-coders.com/php-template/kidsa/assets/img/shape/hero-shape-02.png"
            alt=""
            className="w-24"
          />
        </div>


        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >

            <p className="mb-5 text-lg font-semibold text-orange-400">
              ✦ Kindergarten & Baby Care
            </p>

            <h1 className="text-5xl font-bold leading-tight text-[#35536b] md:text-7xl">

              Kids' Promising

              <br />

              <span className="text-orange-400">
                Tomorrow
              </span>

              {" "}
              Ahead

            </h1>


            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-500">

              Suspendisse non blandit sapien Nunc eleifend,
              enim et porta porta eros risus tincidunt diam,
              vel sodales.

            </p>


            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-4">

              <button className="rounded-full bg-orange-400 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-500">

                Discover More →

              </button>


              <button className="rounded-full border-2 border-orange-400 px-8 py-4 font-semibold text-orange-400 transition hover:bg-orange-400 hover:text-white">

                Learn More

              </button>

            </div>

          </motion.div>


          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            {/* Background Shape */}
            <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-[45%] bg-[#e9e7f2]"></div>


            {/* Child */}
            <img
              src="/child.png"
              alt="Happy child"
              className="relative z-10 w-full max-w-[600px] object-contain"
            />


            {/* Small Bee */}
            <div className="absolute right-0 top-24 z-20">

              <span className="text-5xl">
                🐝
              </span>

            </div>


            {/* Book Icon */}
            <div className="absolute left-10 top-16 z-20 text-6xl">
              📖
            </div>

          </motion.div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="bg-white px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-sm"
          >

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl">
              🛡️
            </div>

            <h3 className="text-xl font-bold text-[#35536b]">
              Safe Environment
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Children learn in a secure and comfortable environment.
            </p>

          </motion.div>


          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-sm"
          >

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl">
              🍴
            </div>

            <h3 className="text-xl font-bold text-[#35536b]">
              Healthy Food
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Healthy and nutritious food for growing children.
            </p>

          </motion.div>


          {/* Card 3 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-sm"
          >

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl">
              😊
            </div>

            <h3 className="text-xl font-bold text-[#35536b]">
              Happy Learning
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Fun activities make learning enjoyable every day.
            </p>

          </motion.div>


          {/* Card 4 */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-orange-100 bg-white p-8 text-center shadow-sm"
          >

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-50 text-4xl">
              👩‍🏫
            </div>

            <h3 className="text-xl font-bold text-[#35536b]">
              Expert Teachers
            </h3>

            <p className="mt-4 leading-7 text-slate-500">
              Our teachers support every child's development.
            </p>

          </motion.div>

        </div>

      </section>


      {/* ABOUT / ACTIVITIES */}
      <section className="bg-[#f8f0e5] px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <img
              src="https://www.ex-coders.com/php-template/kidsa/assets/img/about/about-01.jpg"
              alt="Children learning"
              className="w-full rounded-[40px] object-cover shadow-lg"
            />

          </motion.div>


          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <p className="mb-4 font-semibold text-orange-400">
              ✦ Our Best Activities
            </p>

            <h2 className="text-4xl font-bold leading-tight text-[#35536b] md:text-5xl">

              Let Us Know About Our
              Reading And Cultural

            </h2>

            <p className="mt-6 leading-8 text-slate-500">

              Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos.
              Suspendisse gravida vitae nisi in tincidunt.

            </p>


            <div className="mt-8 grid gap-6 sm:grid-cols-2">

              <div className="flex gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-3xl">
                  🔤
                </div>

                <div>
                  <h3 className="font-bold text-[#35536b]">
                    Early Learning
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Fun learning activities for children.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-3xl">
                  🎨
                </div>

                <div>
                  <h3 className="font-bold text-[#35536b]">
                    Creative Arts
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Helping children explore creativity.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-3xl">
                  🧠
                </div>

                <div>
                  <h3 className="font-bold text-[#35536b]">
                    Smart Learning
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Building knowledge through activities.
                  </p>
                </div>

              </div>


              <div className="flex gap-4">

                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-pink-100 text-3xl">
                  🎵
                </div>

                <div>
                  <h3 className="font-bold text-[#35536b]">
                    Music & Fun
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Music and games for happy learning.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}

export default Home;