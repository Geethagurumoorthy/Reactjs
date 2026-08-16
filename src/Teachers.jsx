import { motion } from "framer-motion";

const teachers = [
  {
    image:
      "https://www.ex-coders.com/php-template/kidsa/assets/img/team/01.jpg",
    name: "Sarah Johnson",
    role: "Senior Teacher",
  },
  {
    image:
      "https://www.ex-coders.com/php-template/kidsa/assets/img/team/02.jpg",
    name: "David Wilson",
    role: "Art Teacher",
  },
  {
    image:
      "https://www.ex-coders.com/php-template/kidsa/assets/img/team/03.jpg",
    name: "Emily Brown",
    role: "English Teacher",
  },
  {
    image:
      "https://www.ex-coders.com/php-template/kidsa/assets/img/team/04.jpg",
    name: "Michael Smith",
    role: "Math Teacher",
  },
];

function Teachers() {
  return (
    <section className="bg-[#f7f0e6] px-6 py-20">

      {/* Main Container */}
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >

          <p className="mb-3 text-lg font-medium text-orange-400">
            ✦ Our Teachers
          </p>

          <h2 className="text-4xl font-bold text-slate-700 md:text-5xl">
            Meet Our Wonderful Teachers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Our caring teachers help children learn, play and grow
            in a friendly environment.
          </p>

        </motion.div>


        {/* ================= TEACHER CARDS ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {teachers.map((teacher, index) => (

            <motion.div
              key={teacher.name}

              /* Entry animation */
              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}

              /* Hover animation */
              whileHover={{
                y: -10,
                scale: 1.03,
              }}

              className="
                overflow-hidden
                rounded-3xl
                bg-white
                shadow-lg
                transition-shadow
                duration-300
                hover:shadow-2xl
              "
            >

              {/* ================= IMAGE ================= */}

              <div className="overflow-hidden">

                <motion.img
                  src={teacher.image}
                  alt={teacher.name}

                  whileHover={{
                    scale: 1.08,
                  }}

                  transition={{
                    duration: 0.4,
                  }}

                  className="
                    h-72
                    w-full
                    object-cover
                  "
                />

              </div>


              {/* ================= DETAILS ================= */}

              <div className="p-6 text-center">

                <h3 className="text-xl font-bold text-slate-700">
                  {teacher.name}
                </h3>

                <p className="mt-2 font-medium text-orange-400">
                  {teacher.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Teachers;