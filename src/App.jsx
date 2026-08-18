import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Loader from "./Loader.jsx";
import TopBar from "./TopBar.jsx";
import Navbar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Programs from "./Program.jsx";
import Features from "./Features.jsx";
import Teachers from "./Teachers.jsx";
import Gallery from "./Gallery.jsx";
import Testimonials from "./Testimonial.jsx";
import Blog from "./Blog.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Services from "./Services.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [homePage, setHomePage] = useState(1);

  //Loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f7f0e6]">*/

        {/* LOADER */}
        <AnimatePresence>
{loading && <Loader />}
       </AnimatePresence>

        {/* WEBSITE */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >

            {/* ONLY ONE WAVE TOP BAR */}
            <TopBar />

            {/* NAVBAR */}
            <Navbar onHomeChange={setHomePage} />

            {/* HOME / HERO */}
            <Hero homePage={homePage} />

            {/* OTHER SECTIONS */}
            <About />
            <Features />
            <Services />
            <Programs />
            <Teachers />
            <Gallery />
            <Testimonials />
            <Blog />
            <Contact />
            <Footer />

          </motion.div>
        )}

      </div>
    </BrowserRouter>
  );
}

export default App;
/*import Register from "./Register.jsx";

function App() {
  return <Register />;
}

export default App;