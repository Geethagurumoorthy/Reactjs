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
      image: "https://www.ex-coders.com/php-template/kidsa/assets/img/hero/01.png",
    },

    2: {
      smallTitle: "Learning & Growing",
      title: "We Prepare Your",
      orangeText: "Child",
      lastText: "For Life",
      description:
        "We create a friendly learning environment where every child can learn, play and grow with confidence.",
      image: "https://www.ex-coders.com/php-template/kidsa/assets/img/hero/02.png",
    },

    3: {
      smallTitle: "Fun Learning",
      title: "Learn To Play",
      orangeText: "Learn",
      lastText: "With Confidence",
      description:
        "Our fun activities encourage creativity, confidence and curiosity in every child.",
      image: "https://www.ex-coders.com/php-template/kidsa/assets/img/about/01.jpg",
    },

    4: {
      smallTitle: "Best Preschool",
      title: "Free Learning On",
      orangeText: "First",
      lastText: "Trial Day",
      description:
        "Give your child a wonderful beginning with our safe, caring and creative preschool environment.",
      image: "https://www.ex-coders.com/php-template/kidsa/assets/img/hero/03.png",
    },

  };


  // Get selected Home data
  const currentHome = homeData[homePage];


  return (

    <section className="
      min-h-[650px]
      bg-[#f7f0e6]
      px-6
      py-20
    ">

      <div className="
        mx-auto
        grid
        max-w-7xl
        items-center
        gap-10
        md:grid-cols-2
      ">

        {/* LEFT CONTENT */}

        <motion.div
          key={homePage}
          initial={{
            opacity: 0,
            x: -80
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6
          }}
        >

          <p className="
            mb-5
            text-lg
            text-orange-400
          ">
            🎈 {currentHome.smallTitle} ✦
          </p>


          <h1 className="
            text-5xl
            font-bold
            leading-tight
            text-slate-700
            md:text-6xl
          ">

            {currentHome.title}

            <br />

            <span className="text-orange-400">
              {currentHome.orangeText}
            </span>

            {" "}

            {currentHome.lastText}

          </h1>


          <p className="
            mt-6
            max-w-xl
            text-lg
            leading-8
            text-slate-500
          ">
            {currentHome.description}
          </p>


          <div className="mt-8 flex gap-4">

            <button className="
              rounded-xl
              bg-orange-400
              px-7
              py-4
              font-semibold
              text-white
              hover:bg-orange-500
            ">
              Discover More →
            </button>

            <button className="
              rounded-xl
              border
              border-slate-300
              px-7
              py-4
              font-semibold
              text-slate-700
            ">
              Contact Us
            </button>

          </div>

        </motion.div>


        {/* CHILD IMAGE */}

        <motion.div
          key={`child-${homePage}`}
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.7
          }}
          className="flex justify-center"
        >

          <img
            src={currentHome.image}
            alt="Child"
            className="
              max-h-[600px]
              w-auto
              object-contain
            "
          />

        </motion.div>

      </div>

    </section>

  );
}

export default Hero;