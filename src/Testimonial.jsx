import { motion } from "framer-motion";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "Priya",
    role: "Parent",
    text: "The teachers are very caring and my child loves coming to school every day.",
  },
  {
    name: "David",
    role: "Parent",
    text: "A wonderful environment where children can learn and have fun together.",
  },
  {
    name: "Anita",
    role: "Parent",
    text: "The activities are creative and the teachers give individual attention.",
  },
];

function Testimonials() {
  return (
    <section className="bg-[#f8f1e7] px-6 py-24 lg:px-12">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-bold text-[#f5a05a]">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#36566d] md:text-5xl">
            What Parents Say
          </h2>

        </div>


        <div className="mt-14 grid gap-7 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{
                opacity: 0,
                y: 50,
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
              className="rounded-[30px] bg-white p-8 shadow-md"
            >

              <FormatQuoteIcon
                sx={{
                  fontSize: 50,
                  color: "#f5a05a",
                }}
              />

              <p className="mt-4 leading-7 text-[#60778a]">
                {item.text}
              </p>

              <div className="mt-5 flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    sx={{
                      fontSize: 20,
                      color: "#f5a05a",
                    }}
                  />
                ))}

              </div>

              <h3 className="mt-5 font-extrabold text-[#36566d]">
                {item.name}
              </h3>

              <p className="text-sm text-[#f5a05a]">
                {item.role}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;