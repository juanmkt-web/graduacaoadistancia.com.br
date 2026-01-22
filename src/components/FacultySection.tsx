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
      className="relative overflow-hidden py-16 md:py-24"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 12% 88%, rgba(12, 96, 124, .65) 0, rgba(12, 96, 124, .25) 32%, rgba(4, 16, 41, 0) 60%), radial-gradient(ellipse at 94% 20%, rgba(103, 41, 166, .65) 0, rgba(103, 41, 166, .25) 32%, rgba(4, 16, 41, 0) 56%), linear-gradient(180deg, #050d21 0, #040b1a 55%, #020711 100%)",
      }}
    >
      {/* Top Wave */}
      <div className="absolute left-0 right-0 top-0 -translate-y-[1px]" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px] md:h-[120px]"
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
          <div className="mb-10 md:mb-14">
            <h2 className="mb-4 text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
              CORPO DOCENTE DE EXCELÊNCIA
            </h2>
            <p className="mx-auto max-w-3xl text-sm text-white/80 md:text-base lg:text-lg">
              Nosso corpo docente é formado por professores mestres e doutores com vasta experiência acadêmica e
              profissional, prontos para orientar sua jornada de aprendizado com metodologias inovadoras e conteúdo
              atualizado.
            </p>
          </div>

          {/* Professors Grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-5">
            {professors.map((professor) => (
              <div key={professor.name} className="flex flex-col items-center">
                {/* Photo Container */}
                <div className="relative mb-4 aspect-[3/4] w-full max-w-[160px] overflow-hidden rounded-xl bg-white shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
                  <img
                    src={professor.image}
                    alt={professor.name}
                    className="h-full w-full object-cover object-top"
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
                  className="inline-flex items-center gap-1 text-xs text-cyan-light transition-colors hover:text-cyan-light/80 md:text-sm"
                >
                  <ExternalLink className="h-3 w-3" />
                  Currículo Lattes
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="block w-full h-[60px] md:h-[120px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default FacultySection;
