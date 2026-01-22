import { ExternalLink } from "lucide-react";

const Faculty = () => {
  return (
    <section className="faculty-section gradient-animated">
      {/* Overlay */}
      <div className="faculty-overlay bg-black/20"></div>

      {/* Wave Top */}
      <div className="wave-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="faculty-container">
        <div className="faculty-content-wrapper">
          {/* Header */}
          <div className="faculty-header">
            <h2 className="faculty-title text-white">
              CORPO DOCENTE DE EXCELÊNCIA
            </h2>
            <p className="faculty-description text-white/80">
              Nosso corpo docente é formado por professores mestres e doutores com vasta experiência acadêmica e profissional,
              prontos para orientar sua jornada de aprendizado com metodologias inovadoras e conteúdo atualizado.
            </p>
          </div>

          {/* Professor Card */}
          <div className="professors-grid">
            <a
              href="http://lattes.cnpq.br/7654321098765432"
              target="_blank"
              rel="noopener noreferrer"
              className="professor-card"
            >
              <div className="professor-image-container">
                <div className="professor-image-overlay bg-gradient-to-t from-black/50 to-transparent" />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
                  alt="Doutora Débora Maria Moreno Luzia"
                  className="professor-image"
                />
              </div>
              <p className="professor-name text-white">Doutora Débora Maria Moreno Luzia</p>
              <span className="lattes-link text-primary-foreground/80 hover:text-primary-foreground">
                Currículo Lattes
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="wave-bottom-faculty">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
};

export default Faculty;
