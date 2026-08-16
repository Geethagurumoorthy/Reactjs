import { motion } from "framer-motion";

import SecurityIcon from "@mui/icons-material/Security";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GroupsIcon from "@mui/icons-material/Groups";

const features = [
  {
    icon: SecurityIcon,
    title: "Safe Environment",
    text: "Children learn in a secure and comfortable environment.",
  },
  {
    icon: RestaurantIcon,
    title: "Healthy Food",
    text: "Healthy and nutritious food for growing children.",
  },
  {
    icon: EmojiEmotionsIcon,
    title: "Happy Learning",
    text: "Fun activities make learning enjoyable every day.",
  },
  {
    icon: GroupsIcon,
    title: "Expert Teachers",
    text: "Our teachers support every child's development.",
  },
];

function Features() {
  return (
    <section className="bg-white px-6 py-24 lg:px-12">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl border border-[#eee6db] p-7 text-center transition hover:shadow-xl"
              >

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff0e3]">

                  <Icon
                    sx={{
                      fontSize: 40,
                      color: "#f5a05a",
                    }}
                  />

                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#36566d]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-6 text-[#60778a]">
                  {item.text}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Features;