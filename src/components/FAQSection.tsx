import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqItems = [{
  question: "Qual a duração dos Cursos de Graduação?",
  answer: "Nossos Cursos de Graduação têm duração a partir de 4 Semestres, dependendo da modalidade e área escolhida. Os cursos tecnológicos geralmente são mais curtos, enquanto bacharelados e licenciaturas podem ter durações maiores."
}, {
  question: "O diploma é reconhecido pelo MEC?",
  answer: "Sim! A FASUL é uma Instituição com nota 5 no MEC, a nota máxima de avaliação. Todos os nossos diplomas são reconhecidos nacionalmente e têm a mesma validade de Cursos presenciais."
}, {
  question: "Quais são as formas de pagamento disponíveis?",
  answer: "Oferecemos diversas formas de pagamento: boleto bancário, cartão de crédito (com parcelamento, ou a vista), PIX e débito automático."
}, {
  question: "Posso transferir meu Curso de outra instituição?",
  answer: "Sim, aceitamos transferências de outras instituições de ensino superior. As disciplinas Cursadas podem ser aproveitadas mediante análise curricular, reduzindo o tempo de conclusão do Curso."
}, {
  question: "Quais são as modalidades disponíveis?",
  answer: "Oferecemos modalidades EaD e semipresencial, proporcionando flexibilidade para atender às diferentes necessidades dos nossos alunos. Escolha a opção que melhor se adapta à sua rotina!"
}];
const FAQSection = () => {
  return <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <AccordionTrigger className="text-left text-[#050d21] font-semibold text-sm md:text-base py-5 hover:text-cyan-light transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-sm md:text-base pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQSection;