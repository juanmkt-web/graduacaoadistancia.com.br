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
      <div className="absolute left-0 right-0 top-0 -translate-y-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
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
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L60 15C120 30 240 60 360 75C480 90 600 90 720 82.5C840 75 960 60 1080 52.5C1200 45 1320 45 1380 45L1440 45V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default FacultySection;
