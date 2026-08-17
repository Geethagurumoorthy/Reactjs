import { motion } from "framer-motion";

function Hero({ homePage }) {
  const homeData = {
    1: {
      smallTitle: "Kindergarten & Baby Care",
      title: "Kids’ Promising",
      orangeText: "Tomorrow",
      lastText: "Ahead",
      description:
        "Suspendisse non blandit sapien Nunc eleifend, enim et porta porta eros risus tincidunt diam, vel sodales.",
      image:
        "https://www.ex-coders.com/php-template/kidsa/assets/img/hero/01.png",
    },

    2: {
      smallTitle: "Learning & Growing",
      title: "We Prepare Your",
      orangeText: "Child",
      lastText: "For Life",
      description:
        "We create a friendly learning environment where every child can learn, play and grow with confidence.",
      image:
        "https://www.ex-coders.com/php-template/kidsa/assets/img/hero/02.png",
    },

    3: {
      smallTitle: "Fun Learning",
      title: "Learn To Play",
      orangeText: "Learn",
      lastText: "With Confidence",
      description:
        "Our fun activities encourage creativity, confidence and curiosity in every child.",
      image:
        "https://www.ex-coders.com/php-template/kidsa/assets/img/about/01.jpg",
    },

    4: {
      smallTitle: "Best Preschool",
      title: "Free Learning On",
      orangeText: "First",
      lastText: "Trial Day",
      description:
        "Give your child a wonderful beginning with our safe, caring and creative preschool environment.",
      image:
        "https://www.ex-coders.com/php-template/kidsa/assets/img/hero/03.png",
    },
  };

  const currentHome = homeData[homePage] || homeData[1];

  return (
    <section className="relative overflow-hidden bg-[#f7f0e6] px-5 py-12 sm:px-6 sm:py-16 md:min-h-[650px] md:py-20">

      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-8">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          key={`text-${homePage}`}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-1 text-center md:text-left"
        >
          {/* Small heading */}
          <p className="mb-4 text-base font-medium text-orange-400 sm:text-lg">
            🎈 {currentHome.smallTitle} ✦
          </p>

          {/* Main heading */}
          <h1 className="text-4xl font-bold leading-[1.15] text-slate-700 sm:text-5xl md:text-6xl">
            {currentHome.title}

            <br />

            <span className="text-orange-400">
              {currentHome.orangeText}
            </span>{" "}

            <span>{currentHome.lastText}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8 md:mx-0">
            {currentHome.description}
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">

            <button
              className="
                rounded-xl
                bg-orange-400
                px-6
                py-3.5
                font-semibold
                text-white
                shadow-md
                transition
                duration-300
                hover:-translate-y-1
                hover:bg-orange-500
                hover:shadow-lg
              "
            >
              Discover More →
            </button>

            <button
              className="
                rounded-xl
                border
                border-slate-300
                bg-white
                px-6
                py-3.5
                font-semibold
                text-slate-700
                transition
                duration-300
                hover:-translate-y-1
                hover:border-orange-400
                hover:text-orange-400
              "
            >
              Contact Us
            </button>

          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          key={`image-${homePage}`}
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            order-2
            flex
            justify-center
            md:justify-end
          "
        >
          <img
            src={currentHome.image}
            alt={currentHome.smallTitle}
            className="
              h-auto
              max-h-[420px]
              w-full
              max-w-[330px]
              object-contain
              sm:max-w-[400px]
              md:max-h-[600px]
              md:max-w-[550px]
            "
          />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;