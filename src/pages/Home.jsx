import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Services from "../components/Services";
import Trainers from "../components/Trainers";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Services featured />

      <Trainers />

      <Testimonials />

      <Contact />

      <Footer />
    </>
  );
}

export default Home;