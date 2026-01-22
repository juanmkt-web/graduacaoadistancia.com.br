import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Qual a duração dos Cursos de Graduação?",
    answer:
      "Nossos Cursos de Graduação têm duração a partir de 4 Semestres, dependendo da modalidade e área escolhida...",
  },
];

const FAQ = () => {
  return (
    <section className="faq-section py-12 md:py-24 bg-muted">
      <div className="faq-container container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Tire suas dúvidas sobre a Graduação da FASUL
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl px-6 border-none shadow-md"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:no-underline py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base pb-5">
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

export default FAQ;
