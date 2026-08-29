import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import TrainersPage from "./pages/TrainersPage";
import PricingPage from "./pages/PricingPage";
import GalleryPage from "./pages/GalleryPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/trainers" element={<TrainersPage />} />
      <Route path="/pricing" element={<PricingPage />}/>
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;