import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      {/* Fondo general con degradado + glow fractal */}
      <div
        className="relative min-h-screen text-white font-sans bg-fixed bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.png'), linear-gradient(to bottom right, #585858, #0f0f0f)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* ✨ Glow fractal como fondo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.18 }}
          transition={{ duration: 2 }}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        >
          <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <defs>
              <radialGradient id="fractalGlow" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#00ccff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="400" cy="300" r="350" fill="url(#fractalGlow)" />
          </svg>
        </motion.div>

        {/* CONTENIDO */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
