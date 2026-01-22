import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração dos Cursos de Graduação?",
    answer:
      "Nossos Cursos de Graduação têm duração a partir de 4 Semestres, dependendo da modalidade e área escolhida. Os cursos tecnológicos geralmente são mais curtos, enquanto bacharelados e licenciaturas podem ter durações maiores.",
  },
  {
    question: "O diploma é reconhecido pelo MEC?",
    answer:
      "Sim! A FASUL é uma Instituição com nota 5 no MEC, a nota máxima de avaliação. Todos os nossos diplomas são reconhecidos nacionalmente e têm a mesma validade de Cursos presenciais.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Oferecemos diversas formas de pagamento: boleto bancário, cartão de crédito (com parcelamento, ou a vista), PIX e débito automático.",
  },
  {
    question: "Posso transferir meu Curso de outra instituição?",
    answer:
      "Sim, aceitamos transferências de outras instituições de ensino superior. As disciplinas Cursadas podem ser aproveitadas mediante análise curricular, reduzindo o tempo de conclusão do Curso.",
  },
  {
    question: "Quais são as modalidades disponíveis?",
    answer:
      "Oferecemos modalidades EaD e semipresencial, proporcionando flexibilidade para atender às diferentes necessidades dos nossos alunos. Escolha a opção que melhor se adapta à sua rotina!",
  },
];

const FAQSection = () => {
  return (
    <section className="relative bg-white py-16 md:py-24">
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
            fill="#020711"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-12 md:pt-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="inline-block text-2xl md:text-4xl lg:text-5xl font-black text-white bg-[#1e73be] px-6 py-2 mb-4 tracking-tight">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Tire suas dúvidas sobre a Graduação da FASUL
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left text-gray-800 font-medium text-base md:text-lg py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
            fill="#1e73be"
          />
        </svg>
      </div>
    </section>
  );
};

export default FAQSection;
