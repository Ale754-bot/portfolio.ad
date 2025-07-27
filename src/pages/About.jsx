import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-20 px-8 max-w-3xl mx-auto text-white"
    >
      <h1 className="text-3xl font-bold mb-4 text-blue-400">Sobre mí</h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-gray-300 mb-6"
      >
        Me llamo River, soy desarrollador web enfocado en crear experiencias visuales memorables. Mi viaje empezó con curiosidad por el HTML… y terminó explorando los límites del diseño interactivo con Next.js, Supabase y Framer Motion. Mi estilo mezcla elegancia con efectos dinámicos y estética sci-fi.
      </motion.p>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-blueish p-6 rounded shadow-lg"
      >
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>🎨 Diseño UI/UX con foco en interacción</li>
          <li>⚡ Animaciones con Framer Motion para impacto visual</li>
          <li>🧠 Resolución creativa de problemas técnicos</li>
          <li>🕹 Integraciones avanzadas en proyectos con Supabase y Next.js</li>
          <li>🌌 Estilo visual inspirado en lo futurista y lo oscuro</li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
