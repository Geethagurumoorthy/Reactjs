import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";

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
  // Which home page is selected?
  const [homePage, setHomePage] = useState(1);

  return (
    <div className="min-h-screen bg-[#f7f0e6]">

      {/* Navbar sends the selected Home number here */}
      <Navbar onHomeChange={setHomePage} />

      {/* Hero receives the selected Home number */}
      <Hero homePage={homePage} />

      <About />
      <Features />
      <Services />
      <Teachers />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;

