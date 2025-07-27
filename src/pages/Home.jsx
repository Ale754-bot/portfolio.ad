import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function Home() {
  const sobreMiRef = useRef(null);
  const estaVisible = useInView(sobreMiRef, { once: true });

  return (
    <div className="relative min-h-screen px-6 pt-32 pb-20 font-sans text-[#E0F8F8] overflow-hidden">

    

      {/* 🪐 Hero principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Bienvenidos</h1>
        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
          Todo lo que fui aprendiendo durante el curso aplicado en cinco proyectos web con distintos niveles de complejidad.
        </p>
        <motion.a
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          href="projects"
          className="inline-block bg-gradient-to-r from-[#13D6A3] to-[#00FFC3] text-black px-6 py-3 rounded-full shadow-lg hover:brightness-110 transition duration-300"
        >
          Explorar proyectos
        </motion.a>
      </motion.div>

      {/* 🧑‍🚀 Sección "Sobre mí" con scroll reveal */}
      <motion.div
        ref={sobreMiRef}
        initial={{ opacity: 0, y: 40 }}
        animate={estaVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto mt-24 bg-gradient #585858, #0f0f0f border border-[#1D2233] rounded-xl shadow-[0_0_25px_#00FFC320] p-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-[#00FFC3] drop-shadow-md">Sobre mí</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Me llamo Alexis, soy desarrollador web enfocado en crear experiencias visuales memorables. Mi viaje empezó con curiosidad por el HTML… y terminó explorando los límites del diseño interactivo con Next.js, Supabase y Framer Motion.
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 pl-4">
          <li>Diseño UI/UX con foco en interacción.</li>
          <li>Animaciones con Framer Motion para impacto visual.</li>
          <li>Resolución creativa de problemas técnicos.</li>
          <li>Integraciones avanzadas con Supabase y Next.js.</li>
          <li>Pasión por el aprendizaje continuo.</li>
          <li>Diseño y generación de imagenes / contenido.</li>
          
        </ul>
      </motion.div>
    </div>
  );
}
