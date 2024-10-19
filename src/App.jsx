import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ContactUs from "./components/Contactus/ContactUs";
import Industrail from "./components/Solutions/Industrail";
import Residential from "./components/Solutions/Residential";
import Commercial from "./components/Solutions/Commercial";
import AgriBased from "./components/Solutions/AgriBased";
import { Loader2 } from "lucide-react";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader2 className="animate-spin" />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/industrial" element={<Industrail />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/agribased" element={<AgriBased />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
