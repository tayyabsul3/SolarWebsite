import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Loader2 } from "lucide-react";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

// Main components for different routes
const Home = React.lazy(() => import("./components/Home/Home"));
const About = React.lazy(() => import("./components/About/About"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const ContactUs = React.lazy(() => import("./components/Contactus/ContactUs"));
const Industrail = React.lazy(() =>
  import("./components/Solutions/Industrail")
);
const Residential = React.lazy(() =>
  import("./components/Solutions/Residential")
);
const Commercial = React.lazy(() =>
  import("./components/Solutions/Commercial")
);
const AgriBased = React.lazy(() => import("./components/Solutions/AgriBased"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="h-screen w-full flex justify-center items-center">
            <span class="loader"></span>
          </div>
        }
      >
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
