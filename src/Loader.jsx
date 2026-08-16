import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8f1e7]"
    >
      <div className="text-center">

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-6xl"
        >
          🌈
        </motion.div>

        <h1 className="mt-4 text-4xl font-extrabold text-[#36566d]">
          Kidsa
        </h1>

        <p className="mt-2 text-[#f5a05a]">
          Kindergarten & Baby Care
        </p>

        <div className="mx-auto mt-6 h-2 w-40 overflow-hidden rounded-full bg-gray-200">

          <motion.div
            className="h-full rounded-full bg-[#f5a05a]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8 }}
          />

        </div>

      </div>
    </motion.div>
  );
}

export default Loader;