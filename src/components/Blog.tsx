import { Eye, MessageCircle, Heart } from "lucide-react";
import deboraImage from "@/assets/flavia-oliveira.png";

const posts = [
  {
    id: 1,
    title: "Mitos e Verdades sobre o Ensino a Distância no Brasil",
    author: "Profª. Débora",
    date: "26 de dez. de 2025",
    readTime: "8 min de leitura",
    image: deboraImage,
    views: 6821,
    comments: 0,
    likes: 418,
    url: "#",
  },
];

const Blog = () => {
  return (
    <section className="blog-section bg-white">
      {/* Wave Top */}
      <div className="wave-top-blog">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="hsl(var(--primary))"/>
        </svg>
      </div>

      <div className="blog-container pt-12 md:pt-24">
        {/* Header */}
        <div className="blog-header">
          <h2 className="blog-title text-foreground">BLOG DE INFORMAÇÕES</h2>
          <p className="blog-description text-muted-foreground">
            Dicas de carreira, tendências de mercado e conteúdos exclusivos para impulsionar seu desenvolvimento profissional.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="posts-grid">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              className="post-card group"
            >
              <div className="post-content">
                <img
                  src={post.image}
                  alt={post.title}
                  className="post-image"
                />
                <div className="post-gradient-overlay bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="post-inner">
                  {/* Author Info */}
                  <div>
                    <p className="post-author-name text-white">{post.author}</p>
                    <p className="post-meta text-white/70">{post.date} · {post.readTime}</p>
                  </div>

                  {/* Post Info */}
                  <div>
                    <h3 className="post-title text-white">{post.title}</h3>
                    
                    <div className="post-stats-container">
                      <div className="post-stats-left">
                        <span className="post-stat text-white/80">
                          <Eye className="w-4 h-4" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="post-stat text-white/80">
                          <MessageCircle className="w-4 h-4" />
                          {post.comments}
                        </span>
                      </div>
                      <span className="post-stat text-white/80">
                        <Heart className="w-4 h-4" />
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

      {/* Wave Bottom */}
      <div className="wave-bottom-blog">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="hsl(var(--primary))"/>
        </svg>
      </div>
    </section>
  );
};

export default Blog;
