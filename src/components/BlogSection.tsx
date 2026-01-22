import { Eye, MessageSquare, Heart } from "lucide-react";

import blog1 from "@/assets/blog-1.webp";
import blog2 from "@/assets/blog-2.webp";
import blog3 from "@/assets/blog-3.webp";
import blog4 from "@/assets/blog-4.webp";

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
    <section
      className="relative py-16 md:py-24"
      style={{
        background: "linear-gradient(180deg, #050d21 0%, #020711 100%)",
      }}
    >
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
            fill="white"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-12 md:pt-20">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            BLOG DE INFORMAÇÕES
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Dicas de carreira, tendências de mercado e tudo o que você precisa saber para
            tomar as melhores decisões para o seu futuro profissional.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[450px]">
                {/* Background Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  {/* Top - Author Info */}
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {post.author}
                    </p>
                    <p className="text-white/70 text-xs">
                      {post.date} · {post.readTime}
                    </p>
                  </div>

                  {/* Bottom - Title and Stats */}
                  <div>
                    <h3 className="text-white font-bold text-base md:text-lg leading-tight mb-4 line-clamp-3">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-white/80 text-xs">
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
                      <span className="flex items-center gap-1 text-red-400">
                        <Heart className="w-4 h-4 fill-current" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
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
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default BlogSection;
