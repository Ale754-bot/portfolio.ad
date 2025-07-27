import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLayoutEffect, useRef, useState } from 'react';



const data = {
  noticias: {
    titulo: 'Web - Noticias',
    descripcion: 'Este fue mi primer acercamiento al desarrollo web. Se trata de una página de noticias variadas (economía, finanzas, deportes, etc.) construida únicamente con HTML y CSS. Fue un proyecto fundamental para familiarizarme con las etiquetas, la estructura de una web y el uso del CSS para dar estilo y diseño visual. Más allá del contenido, lo que más me entusiasmó fue descubrir cómo podía combinar el código con el diseño. Desde el inicio supe que quería que cada proyecto tuviera una estética cuidada, elegante y bien presentada. Gracias a mi experiencia previa en diseño gráfico, pude aplicar conceptos visuales para crear una web sencilla pero visualmente armoniosa.',
    historia: 
    'Estructura básica de una web (HTML). Estilos con CSS. Primeros pasos con diseño responsive. Importancia del diseño visual en la experiencia del usuario',
    tecnologias: ['HTML', 'CSS'],
    imagen: '/public/web1.png',
    galeria: ['/web1.PNG', '/web2.PNG', '/1.PNG', '/2.PNG', '/3.PNG'],
    link: 'https://noticiaas.vercel.app/',
  },
  King: {
    titulo: 'KINGKONG 2.0 - GAME',
    descripcion: 'Este proyecto marcó un salto significativo en mi aprendizaje, ya que fue el primero que desarrollé usando React junto con Vite, lo cual me permitió estructurar el código en componentes reutilizables y comenzar a trabajar de manera más ordenada y profesional. KINGKONG es un juego interactivo en el que el usuario debe contar del 1 en adelante, reemplazando los múltiplos de 3 con “King”, los de 5 con “Kong” y "KingKong" cuando el númereo es múltiplo de ambos. Fue también el primer proyecto que subí a GitHub, lo que me introdujo al mundo del control de versiones y la publicación de proyectos reales. Usé Visual Studio Code como entorno de desarrollo, herramienta que adopté desde el comienzo del curso. La estética jugó un rol fundamental: diseñé personalmente la imagen de fondo y definí una paleta vibrante de celestes y magentas. Incorporé UIverse y ReactBits para agregar componentes visuales interactivos y efectos que enriquecen la experiencia del usuario.',
    historia: 'Introducción a React y manejo de estados. Uso de let, const, if, etc, para lógica de juego. Integración de componentes visuales externos (UIverse - ReactBits). Publicación de proyecto en GitHub. Estilización visual personalizada y coherente',
    tecnologias: ['React+Vite','JSX - CSS', 'UIverse', 'ReactBits', 'Github'],
    imagen: '/public/descarga.png',
    galeria: ['/FONDO2.jpg', '/King.png', '/ww.PNG'],
    link: 'https://king-kong-4hmd.vercel.app/',
  },
  Tateti: {
    titulo: 'TA TE TI - GAME',
    descripcion: 'Este fue un gran salto en la calidad visual y técnica de mis proyectos. Desarrollé una versión del clásico juego del tatetí con React + Vite, aplicando lógica de turnos, validación de ganadores y reinicio del juego. Además, implementé estilos avanzados con Tailwind CSS y animaciones suaves con Framer Motion, logrando un diseño visual de estilo arcade futurista con estética neón. Gracias a la estructura de componentes de React y al trabajo con const, map, condicionales e interacción con el DOM, pude resolver la lógica del juego de manera clara y escalable. Como en el proyecto anterior, utilicé GitHub y Vercel para versionar y publicar el proyecto, manteniendo buenas prácticas desde el entorno de desarrollo en Visual Studio Code.',
    historia: 'Diseño responsive avanzado con Tailwind. Animaciones con Framer Motion. Estructuración de lógica de juego en React. Buenas prácticas con Vite y GitHub. Enfoque visual y técnico unificado',
    tecnologias: ['', 'React', 'TailwindCSS'],
    imagen: '/Captura.PNG',
    galeria: ['/T1.PNG', '/T2.PNG', '/T3.PNG'],
    link: 'https://tateti-game-five.vercel.app/',
  },
  Banda: {
    titulo: 'La Banda',
    descripcion: '“La Banda” es una página web creativa y ficticia que narra la historia de Lionel Maradelli, una figura inventada que fusiona a Maradona y Messi, una joya de River Plate. Fue una idea original que nació desde mi propia pasión por el club, y la desarrollé completamente desde cero, cuidando cada aspecto visual y narrativo. La página está diseñada con una estética moderna, con paleta de colores alineada al estilo del club, combinando rojos profundos, negros y blancos. Incluye una carta de jugador al estilo FIFA, imágenes y videos generados por IA y animaciones suaves para lograr un resultado atractivo, impactante y visualmente profesional.',
    historia: 'Este proyecto marcó un antes y un después en mi proceso de formación. Ya familiarizado con herramientas como React y Tailwind, comencé a entender cómo construir experiencias más completas, dinámicas y expresivas. Aprendí a organizar mejor el código, distribuir contenido, y aplicar animaciones de forma estratégica con Framer Motion, sumando dinamismo sin perder elegancia. Además, exploré por primera vez el uso de inteligencia artificial para generar contenido multimedia, lo que me permitió combinar diseño, narrativa y tecnología de una forma muy creativa.',
    tecnologias: ['TailwindCSS', 'Framer Motion', 'GitHub', 'Vercel', 'IA'],
    imagen: '/public/ba.PNG',
    galeria: ['/b1.PNG', '/b2.PNG', '/b3.PNG', '/M1.png', '/M2.png', '/M3.png', '/AURA.png', '/M5.png', '/CARTALIONEL.png'],
    link: 'https://la-banda-gamma.vercel.app/',
  },
  Toros: {
    titulo: 'Toros Wok - Comida Asiática',
    descripcion: 'Toros Wok fue sin dudas el proyecto más importante y desafiante que realicé hasta ahora. No solo por la magnitud del trabajo, sino por todo lo que me permitió poner en práctica y aprender. Se trató de una página web de gastronomía asiática, con distintas rutas para comida china, coreana, japonesa y una página de inicio con platos destacados y promociones especiales.',
    historia:
      'Este fue un proyecto grupal, donde aprendí también a trabajar en equipo, organizándonos para desarrollar partes distintas del sitio y luego unirlas correctamente. A mí me tocó hacer la página de inicio y la sección de comida china, y desde el principio tuve una visión muy clara: quería que el diseño se sintiera impactante, moderno y muy visual, como una verdadera experiencia para el usuario. Durante el desarrollo, reforcé y profundicé muchísimo mis conocimientos en: React y Vite para el armado del proyecto y la estructura de rutas. Tailwind CSS para lograr estilos complejos y totalmente personalizados. Framer Motion, que me permitió agregar animaciones suaves y profesionales. GIFs superpuestos, imágenes generadas con IA, efectos visuales de fuego y humo para ambientar una cocina real. Creación de un carrito de compras funcional, con lógica para agregar, restar, eliminar productos, y visualizar todo antes de hacer el pedido. Integración con WhatsApp API para que el pedido pueda enviarse directo con un mensaje personalizado. Uso de pop-ups, banners animados y contenido dinámico para promociones. Desarrollo con archivos data.js, y luego migración a TypeScript (.tsx), lo cual fue un gran paso en la mejora del código. Supabase como base de datos para gestionar todos los platos y precios de manera real. Además, trabajé mucho la parte creativa: inventé postres ficticios fusión chino-argentina, generé imágenes de chefs ficticios con IA para dar identidad a cada país, y armé un banner promocional que se puede agregar directamente al carrito con un solo clic. Este proyecto me enseñó a combinar diseño, funcionalidad y lógica de programación en un mismo entorno, utilizando todas las herramientas que aprendí a lo largo del curso. Pero, sobre todo, me demostró que soy capaz de crear una aplicación completa, visualmente atractiva, profesional y funcional. Fue el broche de oro de una etapa de muchísimo crecimiento personal y profesional.',
    tecnologias: ['Framer Motion', 'JSX','TSX', 'TailwindCSS', 'Supabase', 'Gifs', 'IA', 'API', 'Github', 'Vercel' ],
    imagen: '/public/Toros.PNG',
    galeria: ['/Toros3.PNG', '/Toros2.PNG', '/dragon.png', '/chefs.png', '/CARRO.PNG', '/PEDIDO.PNG'],
    link: 'https://toroswok-santiskrrs-projects.vercel.app/',
  },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const proyecto = data[id];
  const detailRef = useRef(null);
  const [imagenModal, setImagenModal] = useState(null);
  const [imagenIndex, setImagenIndex] = useState(null);



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(detailRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, detailRef);
    return () => ctx.revert();
  }, []);

  if (!proyecto) {
    return (
      <div className="min-h-screen px-6 py-12 bg-black text-gray-300 font-sans">
        <div className="text-center pt-24">Proyecto no encontrado.</div>
      </div>
    );
  }

return (
  <>
    <div className="min-h-screen px-6 pt-32 pb-12 bg-black text-[#E0F8F8] font-sans">
      <div
        ref={detailRef}
        className="max-w-4xl mx-auto bg-black border border-[#1D2233] rounded-xl overflow-hidden relative"
      >
        <img
          src={proyecto.imagen}
          alt={proyecto.titulo}
          className="w-full aspect-[3/2] object-cover rounded-t-xl"
        />

        <div className="p-8 space-y-6 relative z-10">
          <h1 className="text-4xl font-bold">{proyecto.titulo}</h1>

          <p className="text-gray-300 leading-relaxed">
            <strong className="text-[#00FFC3]">Resumen:</strong> {proyecto.descripcion}
          </p>

          <p className="text-gray-300 leading-relaxed">
            <strong className="text-[#00FFC3]">Aprendizajes:</strong> {proyecto.historia}
          </p>

          <div>
            <h2 className="text-xl font-semibold text-[#00FFC3] mb-2">Tecnologías usadas</h2>
            <ul className="flex flex-wrap gap-3">
              {proyecto.tecnologias.map((tech, i) => (
                <li
                  key={i}
                  className="px-4 py-2 bg-[#00FFC3] text-black rounded-full text-sm"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {proyecto.galeria?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-[#00FFC3] mb-2">Galería</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {proyecto.galeria.map((src, i) => (
                  <div
                    key={i}
                    className="bg-black rounded-md border border-[#1D2233] shadow-md flex items-center justify-center h-[220px] sm:h-[260px] md:h-[300px] cursor-pointer"
                    onClick={() => setImagenIndex(i)}
                  >
                    <img
                      src={src}
                      alt={`preview-${i}`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6">
            <Link to="/projects">
              <button className="px-5 py-2 bg-gradient-to-r from-[#13D6A3] to-[#00FFC3] text-black rounded-full shadow-md hover:brightness-110">
                ← Volver
              </button>
            </Link>
            <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
              <button className="px-5 py-2 border border-[#00FFC3] text-[#00FFC3] rounded-full hover:bg-[#00FFC3]/10">
                Ir al sitio
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    {imagenIndex !== null && (
  <motion.div
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="relative max-w-4xl w-full p-4 text-center"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="absolute top-4 right-4 text-[#00FFC3] text-2xl font-bold hover:scale-110 transition-transform"
        onClick={() => setImagenIndex(null)}
      >
        ✕
      </button>

      <motion.img
        src={proyecto.galeria[imagenIndex]}
        alt={`imagen ampliada ${imagenIndex}`}
        className="max-w-full max-h-[80vh] object-contain rounded-md mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      />

      <div className="flex justify-center gap-6 mt-6 text-[#00FFC3]">
        <button
          disabled={imagenIndex === 0}
          onClick={() => setImagenIndex(imagenIndex - 1)}
          className="bg-[#00FFC3]/20 hover:bg-[#00FFC3]/40 rounded-full p-2 transition-transform hover:scale-105 disabled:opacity-20"
        >
          <svg width="24" height="24" fill="#00FFC3" viewBox="0 0 24 24">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>

        <button
          disabled={imagenIndex === proyecto.galeria.length - 1}
          onClick={() => setImagenIndex(imagenIndex + 1)}
          className="bg-[#00FFC3]/20 hover:bg-[#00FFC3]/40 rounded-full p-2 transition-transform hover:scale-105 disabled:opacity-20"
        >
          <svg width="24" height="24" fill="#00FFC3" viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </motion.div>
  </motion.div>
)}


  </>
);

}