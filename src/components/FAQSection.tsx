import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração dos Cursos de Graduação?",
    answer:
      "Nossos Cursos de Graduação têm duração a partir de 4 Semestres, dependendo da modalidade e área escolhida. Os Cursos Tecnológicos geralmente são mais curtos, enquanto Bacharelados e Licenciaturas podem ter durações maiores.",
  },
  {
    question: "O Diploma é reconhecido pelo MEC?",
    answer:
      "Sim! A FASUL é uma Instituição com nota 5 no MEC, a nota máxima de avaliação. Todos os nossos Diplomas são reconhecidos nacionalmente e têm a mesma validade de Cursos presenciais.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer:
      "Oferecemos diversas formas de pagamento: boleto bancário, cartão de crédito (com parcelamento, ou a vista), PIX e débito automático.",
  },
  {
    question: "Posso transferir meu Curso de outra Instituição?",
    answer:
      "Sim, aceitamos transferências de outras Instituições de ensino superior. As disciplinas Cursadas podem ser aproveitadas mediante análise curricular, reduzindo o tempo de conclusão do Curso.",
  },
  {
    question: "Quais são as modalidades disponíveis?",
    answer:
      "Oferecemos modalidades EaD e semipresencial, proporcionando flexibilidade para atender às diferentes necessidades dos nossos alunos. Escolha a opção que melhor se adapta à sua rotina!",
  },
];

const FAQSection = () => {
  return (
    <section className="relative py-8 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#1E2842] mb-1 md:mb-4">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-gray-600 text-xs md:text-lg text-center">Tire suas dúvidas sobre a Graduação da FASUL</p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="flex flex-col gap-1.5 md:gap-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-4 md:px-6 data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-[#1E2842] font-semibold text-xs md:text-base py-3 md:py-5 hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-xs md:text-base pb-3 md:pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
