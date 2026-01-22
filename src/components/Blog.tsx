import { Eye, MessageCircle, Heart } from "lucide-react";

const Blog = () => {
  return (
    <section className="blog-section bg-white">
      {/* Wave Top */}
      <div className="wave-top-blog">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="hsl(var(--gradient-end))"
          />
        </svg>
      </div>

      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <h2 className="blog-title text-foreground">BLOG DE INFORMAÇÕES</h2>
          <p className="blog-description text-muted-foreground">
            Dicas de carreira, tendências de mercado e conteúdos exclusivos para impulsionar seu desenvolvimento profissional.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="posts-grid">
          <a
            href="#"
            className="post-card"
          >
            <div className="post-content">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=500&fit=crop"
                alt="Mitos e Verdades sobre o Ensino a Distância no Brasil"
                className="post-image"
              />
              <div className="post-gradient-overlay bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="post-inner">
                <div>
                  <p className="post-author-name text-white">Profª. Débora</p>
                  <p className="post-meta text-white/70">26 de dez. de 2025 · 8 min de leitura</p>
                </div>
                <div>
                  <h3 className="post-title text-white">
                    Mitos e Verdades sobre o Ensino a Distância no Brasil
                  </h3>
                  <div className="post-stats-container">
                    <div className="post-stats-left">
                      <span className="post-stat text-white/80">
                        <Eye className="w-3 h-3" />
                        6821
                      </span>
                      <span className="post-stat text-white/80">
                        <MessageCircle className="w-3 h-3" />
                        0
                      </span>
                    </div>
                    <span className="post-stat text-white/80">
                      <Heart className="w-3 h-3" />
                      418
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="wave-bottom-blog">
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

export default Blog;
