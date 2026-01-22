import { ExternalLink } from "lucide-react";

interface Professor {
  name: string;
  image: string;
  lattesUrl: string;
}

const professors: Professor[] = [
  {
    name: "Doutora Débora Maria Moreno Luzia",
    image: "https://posgraduacao2026.lovable.app/assets/debora-luzia-B3NmZCD7.avif",
    lattesUrl: "http://lattes.cnpq.br/4668535194933989",
  },
  {
    name: "Mestre Maurício Ricardo Soares",
    image: "https://posgraduacao2026.lovable.app/assets/ricardo-soares-dpArQ3g8.avif",
    lattesUrl: "http://lattes.cnpq.br/8461273296060802",
  },
  {
    name: "Doutora Vera Lúcia da Silva Farias",
    image: "https://posgraduacao2026.lovable.app/assets/vera-farias-5LS7Be6P.avif",
    lattesUrl: "http://lattes.cnpq.br/6885839820247204",
  },
  {
    name: "Mestre Sérgio Ferreira da Silva",
    image: "https://posgraduacao2026.lovable.app/assets/sergio-silva-CuvDhx8A.avif",
    lattesUrl: "http://lattes.cnpq.br/3242048483981824",
  },
  {
    name: "Mestra Paola Marie Vitaca Rodrigues",
    image: "https://posgraduacao2026.lovable.app/assets/paola-rodrigues-Bh7I0UvW.avif",
    lattesUrl: "http://lattes.cnpq.br/8880858445724289",
  },
];

const FacultySection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a4da3] to-[#062d6e] py-16 md:py-24">
      {/* Top Wave */}
      <div className="absolute left-0 right-0 top-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-12 md:pt-16">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-3xl font-extrabold uppercase tracking-tight text-white md:text-4xl lg:text-5xl">
              CORPO DOCENTE DE EXCELÊNCIA
            </h2>
            <p className="mx-auto max-w-3xl text-base text-white/80 md:text-lg">
              Nosso corpo docente é formado por Professores Mestres e Doutores, com experiência prática e
              atuação acadêmica, garantindo ensino de qualidade, orientação completa e aprendizado
              aplicado à sua carreira.
            </p>
          </div>

          {/* Professors Grid */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 md:gap-8">
            {professors.map((professor, index) => (
              <div
                key={professor.name}
                className="flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Photo */}
                <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-xl bg-white/10 shadow-xl md:h-40 md:w-40 lg:h-44 lg:w-44">
                  <img
                    src={professor.image}
                    alt={professor.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                {/* Name */}
                <h3 className="mb-2 text-sm font-bold text-white md:text-base">
                  {professor.name}
                </h3>

                {/* Lattes Link */}
                <a
                  href={professor.lattesUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-cyan-light hover:text-cyan-light/80 transition-colors md:text-sm"
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
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
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
