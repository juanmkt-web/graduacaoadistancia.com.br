import { ExternalLink } from "lucide-react";
import deboraImage from "@/assets/flavia-oliveira.png";

const professors = [
  {
    name: "Doutora Débora Maria Moreno Luzia",
    image: deboraImage,
    lattesUrl: "http://lattes.cnpq.br/",
  },
];

const Faculty = () => {
  return (
    <section className="faculty-section gradient-animated bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]">
      <div className="faculty-overlay bg-black/20" />
      
      {/* Wave Top */}
      <div className="wave-top">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="white"/>
        </svg>
      </div>

      <div className="faculty-container">
        <div className="faculty-content-wrapper">
          {/* Header */}
          <div className="faculty-header">
            <h2 className="faculty-title text-white">CORPO DOCENTE DE EXCELÊNCIA</h2>
            <p className="faculty-description text-white/90">
              Nosso corpo docente é formado por professores mestres e doutores com vasta experiência acadêmica e profissional,
              prontos para orientar sua jornada de aprendizado com metodologias inovadoras e conteúdo atualizado.
            </p>
          </div>

          {/* Professors Grid */}
          <div className="professors-grid">
            {professors.map((professor, index) => (
              <a
                key={index}
                href={professor.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="professor-card group"
              >
                <div className="professor-image-container">
                  <div className="professor-image-overlay bg-primary/30" />
                  <img
                    src={professor.image}
                    alt={professor.name}
                    className="professor-image"
                  />
                </div>
                <h3 className="professor-name text-white">{professor.name}</h3>
                <span className="lattes-link text-white/80 hover:text-white">
                  Currículo Lattes
                  <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="wave-bottom-faculty">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Faculty;
