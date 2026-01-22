import { Zap, Clock, Calendar, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Zap,
    title: "Conclusão acelerada a partir de",
    highlight: "2 anos",
  },
  {
    icon: Clock,
    title: "Inclusos na sua formação",
    highlight: "10 Cursos de IA",
  },
  {
    icon: Calendar,
    title: "Graduações",
    highlight: "EAD e Semipresenciais",
  },
  {
    icon: GraduationCap,
    title: "Instituição com",
    highlight: "Nota Máxima no MEC!",
  },
];

const backgroundStyle = {
  backgroundImage: `
    radial-gradient(ellipse at 12% 88%, rgba(12, 96, 124, .65) 0, rgba(12, 96, 124, .25) 32%, rgba(4, 16, 41, 0) 60%),
    radial-gradient(ellipse at 94% 20%, rgba(103, 41, 166, .65) 0, rgba(103, 41, 166, .25) 32%, rgba(4, 16, 41, 0) 56%),
    linear-gradient(180deg, #050d21 0, #040b1a 55%, #020711 100%)
  `,
};

const Benefits = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div
          className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl"
          style={backgroundStyle}
        >
          <div className="px-6 py-6 md:px-20 lg:px-28 md:py-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
              {/* Left side - Main Title */}
              <div className="animate-fade-in">
                <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2 md:mb-6 leading-tight">
                  A GRADUAÇÃO QUE<span className="text-cyan-light"> TE PREPARA </span>
                  <br />
                  PARA O FUTURO!
                </h2>
                <p className="text-sm md:text-lg text-white/80 leading-relaxed">
                  Conclua sua Faculdade <strong className="text-white">A partir de 2 anos </strong>
                  com a excelência de uma
                  <strong className="text-white"> Instituição Nota 5 no MEC.</strong>, Garanta seu diferencial
                  competitivo com <strong className="text-white">10 cursos exclusivos de IA</strong> inclusos e a
                  flexibilidade que você precisa para estudar.
                </p>
              </div>

              {/* Right side - Benefits List */}
              <div
                className="space-y-2 md:space-y-6 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-light/30 bg-cyan-light">
                      <benefit.icon className="h-5 w-5 md:h-6 md:w-6 text-cyan-light-foreground" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white text-sm md:text-lg leading-tight">
                        {benefit.title} <strong className="font-bold">{benefit.highlight}</strong>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="pt-3 md:pt-8">
                  <a
                    href="https://www.fasuleducacional.edu.br/posgraduacao/cursos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="default"
                      className="w-full lg:w-auto bg-cyan-light hover:bg-cyan-light/90 text-cyan-light-foreground font-bold text-sm md:text-lg px-6 md:px-12 py-4 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                      COMECE SUA GRADUAÇÃO AGORA!
                      <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
