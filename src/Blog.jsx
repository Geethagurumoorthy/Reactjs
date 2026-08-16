import { motion } from "framer-motion";

const posts = [
  {
    title: "Why Play Is Important For Children",
    date: "15 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Creative Activities For Kids",
    date: "10 Aug 2026",
    image:
       "https://www.ex-coders.com/php-template/kidsa/assets/img/about/03.jpg",
  },
  {
    title: "Helping Children Learn At Home",
    date: "05 Aug 2026",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
  },
];

function Blog() {
  return (
    <section
      id="blog"
      className="bg-white px-6 py-24 lg:px-12"
    >

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-bold text-[#f5a05a]">
            Latest News
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-[#36566d] md:text-5xl">
            From Our Blog
          </h2>

        </div>


        <div className="mt-14 grid gap-8 md:grid-cols-3">

          {posts.map((post, index) => (

            <motion.article
              key={post.title}
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
              className="overflow-hidden rounded-[30px] bg-[#f8f1e7]"
            >

              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-7">

                <p className="text-sm font-bold text-[#f5a05a]">
                  {post.date}
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-[#36566d]">
                  {post.title}
                </h3>

                <button
                  onClick={() =>
                    alert(`Opening: ${post.title}`)
                  }
                  className="mt-5 font-bold text-[#36566d] hover:text-[#f5a05a]"
                >
                  Read More →
                </button>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Blog;