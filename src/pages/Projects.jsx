import ProjectGrid from '../components/ProjectGrid';

export default function Projects() {
  return (
    <div className="min-h-screen text-white font-sans px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 magic-text-glow p-10">
          Mis proyectos
        </h2>
        <ProjectGrid />
      </div>
    </div>
  );
}
