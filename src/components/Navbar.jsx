import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
className="fixed top-0 w-full z-50 bg-gradient #585858, #0f0f0f backdrop-blur-md border-b border-[#1B1F2A] text-[#DCE7EA] px-6 py-4 flex justify-between items-center">
  <h1 className="text-lg font-semibold tracking-wide">MiPortfolio</h1>
  <ul className="flex gap-6 text-sm">
     <li><Link to="/" className="hover:underline">Inicio</Link></li>
        <li><Link to="/projects" className="hover:underline">Proyectos</Link></li>
        <li><Link to="/contact" className="hover:underline">Contacto</Link></li>
  </ul>

    </motion.nav>
  );
}
