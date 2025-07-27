import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const proyectos = [
  {
    id: 'noticias',
    titulo: 'Web - Noticias',
    descripcion: 'Portal informativo con secciones de Economía, Cultura y Deportes.',
    imagen: '/web1.png',
    link: 'https://noticiaas.vercel.app/',
  },
  {
    id: 'King',
    titulo: 'KINGKONG 2.0 - GAME',
    descripcion: 'Juego interactivo que desafía tu rapidez mental y percepción visual.',
    imagen:'/descarga.png',
    link: 'https://king-kong-4hmd.vercel.app/',
  },
  {
    id: 'Tateti',
    titulo: 'TA TE TI - GAME',
    descripcion: 'Versión arcade del clásico TATETI con diseño futurista.',
    imagen: '/Captura.PNG',
    link: 'https://tateti-game-five.vercel.app/',
  },
  {
    id: 'Banda',
    titulo: 'La Banda',
    descripcion: 'Página ficticia sobre una joya de River Plate.',
    imagen: '/ba.PNG',
    link: 'https://la-banda-gamma.vercel.app/',
  },
  {
    id: 'Toros',
    titulo: 'Toros Wok - Comida Asiática',
    descripcion: 'Panel interactivo con gráficos, filtros y métricas visuales.',
    imagen: '/Toros.PNG',
    link: 'https://toroswok-santiskrrs-projects.vercel.app/',
  },
];

export default function ProjectGrid() {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.project-card');
      if (cards && cards.length > 0) {
        cards.forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.6,
            ease: 'power3.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reset',
            },
          });
        });
      }
    }, gridRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e, index) => {
    const card = document.querySelector(`#card-${index}`);
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12"
    >
      {proyectos.map((p, index) => (
        <div
  key={p.id}
  id={`card-${index}`}
  onMouseMove={(e) => handleMouseMove(e, index)}
  className="project-card relative scale-[0.95] bg-black border border-[#1D2233] rounded-xl transform transition hover:scale-[1.03] overflow-hidden group"
  style={{
    backgroundImage: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), #006f8b1f, transparent 90%)`,
    backgroundBlendMode: 'screen',
    transition: 'background-position 0.2s ease',
  }}
>
  {/* 👉 Barrido de luz */}
  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[linear-gradient(110deg,transparent,#006f8b1f,transparent)]" />

  {/* 👉 Contenido real */}
  <div className="relative z-10">
    <img
      src={p.imagen}
      alt={p.titulo}
      className="w-full aspect-[3/2] object-cover rounded-t-xl"
    />
    <div className="p-6 space-y-4">
      <h3 className="text-xl font-semibold text-[#E0F8F8]">{p.titulo}</h3>
      <p className="text-gray-300">{p.descripcion}</p>
      <div className="flex gap-3">
        <Link to={`/projects/${p.id}`}>
          <button className="px-4 py-2 bg-gradient-to-r from-[#13D6A3] to-[#00FFC3] text-black rounded-full shadow-md hover:brightness-110">
            Ver proyecto
          </button>
        </Link>
        <a href={p.link} target="_blank" rel="noopener noreferrer">
          <button className="px-4 py-2 border border-[#00FFC3] text-[#00FFC3] rounded-full hover:bg-[#00FFC3]/10">
            Ir al sitio
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

      ))}
    </div>
  );
}