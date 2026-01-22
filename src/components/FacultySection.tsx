import { ExternalLink } from "lucide-react";

// Placeholder images - will be replaced with actual professor images
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
    name: "Doutora Débora Maria Moreno Luzia",
    image: afonsoSouza, // Replace with doutora-debora.avif when available
    lattesUrl: "http://lattes.cnpq.br/4668535194933989",
  },
  {
    name: "Mestre Maurício Ricardo Soares",
    image: bernardo, // Replace with mestre-mauricio.avif when available
    lattesUrl: "http://lattes.cnpq.br/8461273296060802",
  },
  {
    name: "Doutora Vera Lúcia da Silva Farias",
    image: brenoTakana, // Replace with doutora-vera.avif when available
    lattesUrl: "http://lattes.cnpq.br/6885839820247204",
  },
  {
    name: "Mestre Sérgio Ferreira da Silva",
    image: brunaCabezuca, // Replace with mestre-sergio.avif when available
    lattesUrl: "http://lattes.cnpq.br/3242048483981824",
  },
  {
    name: "Mestra Paola Marie Vitaca Rodrigues",
    image: carlosSoares, // Replace with mestra-paola.avif when available
    lattesUrl: "http://lattes.cnpq.br/8880858445724289",
  },
];

const FacultySection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
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
        <div 
          className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 0% 100%, rgba(0, 80, 180, 0.9) 0%, rgba(0, 60, 140, 0.5) 40%, transparent 70%),
              radial-gradient(ellipse at 100% 0%, rgba(30, 144, 255, 0.7) 0%, rgba(0, 100, 200, 0.3) 40%, transparent 70%),
              linear-gradient(135deg, #003366 0%, #0056b3 35%, #0078d4 65%, #1e90ff 100%)
            `
          }}
        >
          <div className="px-6 py-8 md:px-12 lg:px-20 md:py-16">
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                CORPO DOCENTE DE EXCELÊNCIA
              </h2>
              <p className="text-sm md:text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                Nosso corpo docente é formado por Professores Mestres e Doutores, com experiência prática e
                atuação acadêmica, garantindo ensino de qualidade, orientação completa e aprendizado
                aplicado à sua carreira.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {professors.map((professor, index) => (
                <div
                  key={professor.name}
                  className="group text-center animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="relative mb-4 md:mb-5">
                    <div className="w-32 h-40 md:w-40 md:h-52 lg:w-44 lg:h-56 mx-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-b from-gray-100 to-gray-200">
                      <img
                        src={professor.image}
                        alt={professor.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-white text-sm md:text-base font-bold mb-2 leading-tight px-1">
                    {professor.name}
                  </h3>
                  <a
                    href={professor.lattesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-xs md:text-sm font-semibold transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Currículo Lattes
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
