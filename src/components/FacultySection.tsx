import { ExternalLink } from "lucide-react";

// Placeholder images - these would need to be replaced with actual professor images
import afonsoSouza from "@/assets/afonso-souza.png";
import bernardo from "@/assets/bernardo.png";
import brenoTakana from "@/assets/breno-takana.png";
import brunaCabezuca from "@/assets/bruna-cabezuca.png";
import carlosSoares from "@/assets/carlos-soares.png";

interface Professor {
  name: string;
  image: string;
  lattesUrl: string;
}

const professors: Professor[] = [
  {
    name: "Mestra Paola Marie Vitaca Rodrigues",
    image: afonsoSouza,
    lattesUrl: "http://lattes.cnpq.br/8880858445724289",
  },
  {
    name: "Mestre Sérgio Ferreira da Silva",
    image: bernardo,
    lattesUrl: "http://lattes.cnpq.br/3242048483981824",
  },
  {
    name: "Doutora Vera Lúcia da Silva Farias",
    image: brenoTakana,
    lattesUrl: "http://lattes.cnpq.br/6885839820247204",
  },
  {
    name: "Mestre Maurício Ricardo Soares",
    image: brunaCabezuca,
    lattesUrl: "http://lattes.cnpq.br/8461273296060802",
  },
  {
    name: "Doutora Débora Maria Moreno Luzia",
    image: carlosSoares,
    lattesUrl: "http://lattes.cnpq.br/4668535194933989",
  },
];

const FacultySection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#050d21] overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-12 md:pt-20">
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 0% 0%, rgba(75, 35, 120, 0.9) 0%, rgba(75, 35, 120, 0.4) 35%, transparent 60%),
              radial-gradient(ellipse at 100% 100%, rgba(230, 80, 100, 0.8) 0%, rgba(200, 60, 120, 0.4) 35%, transparent 60%),
              radial-gradient(ellipse at 50% 50%, rgba(168, 23, 131, 0.7) 0%, rgba(140, 30, 110, 0.3) 40%, transparent 70%),
              linear-gradient(135deg, hsl(270, 70%, 18%) 0%, hsl(305, 75%, 35%) 35%, hsl(340, 80%, 45%) 65%, hsl(12, 85%, 55%) 100%)
            `
          }}
        >
          <div className="px-6 py-8 md:px-12 lg:px-20 md:py-16">
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                CORPO DOCENTE DE <span className="text-cyan-light">EXCELÊNCIA</span>
              </h2>
              <p className="text-sm md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                Nosso corpo docente é formado por professores mestres e doutores com vasta experiência acadêmica e
                profissional, prontos para orientar sua jornada de aprendizado com metodologias inovadoras e conteúdo
                atualizado.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {professors.map((professor, index) => (
                <div
                  key={professor.name}
                  className="group text-center animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="relative mb-3 md:mb-4">
                    <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden border-3 border-cyan-light/30 group-hover:border-cyan-light transition-all duration-300 shadow-lg">
                      <img
                        src={professor.image}
                        alt={professor.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-white text-xs md:text-sm font-semibold mb-2 leading-tight px-1">
                    {professor.name}
                  </h3>
                  <a
                    href={professor.lattesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-light hover:text-cyan-light/80 text-xs md:text-sm font-medium transition-colors"
                  >
                    Currículo Lattes <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default FacultySection;
