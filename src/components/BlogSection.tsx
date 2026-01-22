import { Eye, MessageSquare, Heart } from "lucide-react";

// Using existing course images as placeholders for blog posts
import blog1 from "@/assets/curso-administracao.jpg";
import blog2 from "@/assets/curso-gestao.jpg";
import blog3 from "@/assets/curso-marketing.jpg";
import blog4 from "@/assets/curso-pedagogia.jpg";

interface BlogPost {
  title: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  comments: number;
  likes: number;
  url: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Mitos e Verdades sobre o Ensino a Distância da FASUL: Como funciona e suas vantagens para sua carreira?",
    image: blog1,
    author: "Profª. Débora",
    date: "26 de dez. de 2025",
    readTime: "8 min de leitura",
    views: 6821,
    comments: 0,
    likes: 418,
    url: "https://www.fasulmg.com.br/post/mitos-e-verdades-sobre-o-ensino-a-distancia-da-fasul-como-funciona-e-suas-vantagens-para-sua-carreira/",
  },
  {
    title: "Guia Completo do Vestibular ao Diploma e Suas Oportunidades de Carreira",
    image: blog2,
    author: "Prof. Maurício",
    date: "26 de dez. de 2025",
    readTime: "11 min de leitura",
    views: 7534,
    comments: 0,
    likes: 502,
    url: "https://www.fasulmg.com.br/post/guia-completo-do-vestibular-ao-diploma-e-suas-oportunidades-de-carreira/",
  },
  {
    title: "Não Estude no Escuro: Por Que Saber QUEM São Seus Professores Define o Valor do Seu Diploma FASUL",
    image: blog3,
    author: "Profª. Vera Lúcia",
    date: "26 de dez. de 2025",
    readTime: "5 min de leitura",
    views: 4987,
    comments: 0,
    likes: 311,
    url: "https://www.fasulmg.com.br/post/nao-estude-no-escuro-por-que-saber-quem-sao-seus-professores-define-o-valor-do-seu-diploma-fasul/",
  },
  {
    title: "A Escolha Inteligente para o Seu Futuro com Nota Máxima no MEC e Preço Fixo no EaD",
    image: blog4,
    author: "Prof. Maurício",
    date: "26 de dez. de 2025",
    readTime: "6 min de leitura",
    views: 6210,
    comments: 0,
    likes: 387,
    url: "https://www.fasulmg.com.br/post/a-escolha-inteligente-para-o-seu-futuro-com-nota-maxima-no-mec-e-preco-fixo-no-ead/",
  },
];

const BlogSection = () => {
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
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1130.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[#050d21]"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-12 md:pt-20">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#050d21] mb-4 leading-tight">
            BLOG DE <span className="text-cyan-light">INFORMAÇÕES</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dicas de carreira, tendências de mercado e conteúdos exclusivos para impulsionar seu desenvolvimento
            profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <div className="mb-3">
                    <p className="text-cyan-light font-semibold text-sm">{post.author}</p>
                    <p className="text-gray-500 text-xs">
                      {post.date} · {post.readTime}
                    </p>
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-[#050d21] font-bold text-sm md:text-base leading-tight mb-4 group-hover:text-cyan-light transition-colors line-clamp-3">
                      {post.title}
                    </h3>

                    <div className="flex items-center justify-between text-gray-500 text-xs mt-auto">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-red-500">
                        <Heart className="w-4 h-4 fill-current" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </a>
          ))}
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
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1130.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[#050d21]"
          />
        </svg>
      </div>
    </section>
  );
};

export default BlogSection;
