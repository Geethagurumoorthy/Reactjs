import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560785496-3c9d27877182?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80",
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-white px-6 py-24 lg:px-12"
    >

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-bold text-[#f5a05a]">
            Our Gallery
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#36566d] md:text-5xl">
            Happy Moments
          </h2>

        </div>


        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {images.map((image, index) => (

            <motion.div
              key={image}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.04,
              }}
              className="overflow-hidden rounded-[25px]"
            >

              <img
                src={image}
                alt="Children activity"
                className="h-72 w-full object-cover"
              />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;