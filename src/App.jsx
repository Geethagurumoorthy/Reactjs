import { useEffect, useState } from "react";
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

  // Loader state
  const [loading, setLoading] = useState(true);

  // Selected Home page
  const [homePage, setHomePage] = useState(1);


  // Show loader for 2 seconds
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);


  return (
    <div className="min-h-screen bg-[#f7f0e6]">

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

          {/* TOP BAR */}
          <TopBar />


          {/* NAVBAR */}
          <Navbar
            onHomeChange={setHomePage}
          />


          {/* HERO */}
          <Hero
            homePage={homePage}
          />


          {/* ABOUT */}
          <About />


          {/* FEATURES */}
          <Features />


          {/* SERVICES */}
          <Services />


          {/* PROGRAMS */}
          <Programs />


          {/* TEACHERS */}
          <Teachers />


          {/* GALLERY */}
          <Gallery />


          {/* TESTIMONIALS */}
          <Testimonials />


          {/* BLOG */}
          <Blog />


          {/* CONTACT */}
          <Contact />


          {/* FOOTER */}
          <Footer />

        </motion.div>

      )}

    </div>
  );
}

export default App;