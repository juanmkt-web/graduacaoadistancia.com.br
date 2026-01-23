import { ExternalLink } from "lucide-react";

interface Professor {
  name: string;
  image: string;
  lattesUrl: string;
}

const professors: Professor[] = [
  {
    name: "Mestra Paola Marie Vitaca Rodrigues",
    image: "https://posgraduacao2026.lovable.app/assets/paola-rodrigues-Bh7I0UvW.avif",
    lattesUrl: "http://lattes.cnpq.br/8880858445724289",
  },
  {
    name: "Mestre Sérgio Ferreira da Silva",
    image: "https://posgraduacao2026.lovable.app/assets/sergio-silva-CuvDhx8A.avif",
    lattesUrl: "http://lattes.cnpq.br/3242048483981824",
  },
  {
    name: "Doutora Vera Lúcia da Silva Farias",
    image: "https://posgraduacao2026.lovable.app/assets/vera-farias-5LS7Be6P.avif",
    lattesUrl: "http://lattes.cnpq.br/6885839820247204",
  },
  {
    name: "Mestre Maurício Ricardo Soares",
    image: "https://posgraduacao2026.lovable.app/assets/ricardo-soares-dpArQ3g8.avif",
    lattesUrl: "http://lattes.cnpq.br/8461273296060802",
  },
  {
    name: "Doutora Débora Maria Moreno Luzia",
    image: "https://posgraduacao2026.lovable.app/assets/debora-luzia-B3NmZCD7.avif",
    lattesUrl: "http://lattes.cnpq.br/4668535194933989",
  },
];

const FacultySection = () => {
  return (
    <section
      className="relative overflow-hidden pt-8 pb-10 md:pt-24 md:pb-32"
      style={{
        background:
          "linear-gradient(135deg, hsl(270 70% 18%) 0%, hsl(305 75% 35%) 25%, hsl(340 80% 45%) 70%, hsl(12 85% 55%) 100%)",
      }}
    >
      {/* Top Wave */}
      <div className="absolute left-0 right-0 top-0 h-10 md:h-16 lg:h-20 rotate-180" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full rotate-180"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Header */}
          <div className="mb-4 md:mb-14">
            <h2 className="mb-1 md:mb-6 text-2xl md:text-4xl lg:text-5xl font-bold text-white">
              CORPO DOCENTE DE EXCELÊNCIA
            </h2>
            <p className="mx-auto max-w-3xl text-xs text-white/80 md:text-base lg:text-lg">
              Nosso Corpo Docente é formado por Professores Mestres e Doutores com vasta experiência acadêmica e
              profissional, prontos para orientar sua jornada de aprendizado com metodologias inovadoras e conteúdo
              atualizado.
            </p>
          </div>

          {/* Professors Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
            {professors.map((professor) => (
              <div
                key={professor.name}
                className="professor-card flex flex-col items-center text-center cursor-pointer group"
              >
                {/* Photo Container */}
                <div className="relative mb-3 md:mb-4 overflow-hidden rounded-lg">
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(25,133,252,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={professor.image}
                    alt={professor.name}
                    className="w-full h-40 md:h-56 lg:h-64 object-cover object-top rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Name */}
                <h3 className="mb-1 text-center text-sm font-bold leading-tight text-white md:text-base">
                  {professor.name}
                </h3>

                {/* Lattes Link */}
                <a
                  href={professor.lattesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs md:text-sm font-medium text-blue-400 underline underline-offset-2 transition-colors hover:text-blue-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  Currículo Lattes
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-10 md:h-16 lg:h-20" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#1E2842"
          />
        </svg>
      </div>
    </section>
  );
};

export default FacultySection;
