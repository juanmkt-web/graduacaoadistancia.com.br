import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a duração dos Cursos de Graduação?",
    answer: "Nossos Cursos de Graduação têm duração a partir de 4 Semestres, dependendo da modalidade e área escolhida...",
  },
];

const FAQ = () => {
  return (
    <section className="faq-section relative overflow-hidden py-8 md:py-24 gradient-animated bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]">
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            PERGUNTAS FREQUENTES
          </h2>
          <p className="text-sm md:text-lg text-white/90">
            Tire suas dúvidas sobre a Graduação da FASUL
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl px-4 md:px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-white text-left text-sm md:text-lg font-semibold py-4 md:py-6 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/80 text-sm md:text-base pb-4 md:pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
