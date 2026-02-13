import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { projectArticles } from '@/data/projects';

export function Section08Insights() {
  const sectionRef = useRef<HTMLElement>(null);
  const goToProject = (slug: string) => {
    const path = `/projects/${slug}`;
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      className="relative w-full py-20 lg:py-32"
      style={{ zIndex: 80, backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="px-6 lg:px-[6vw]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 lg:mb-16">
          <h2 className="contact-lead mb-4 sm:mb-0">
            Projects
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors duration-200"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projectArticles.map((article) => (
            <a
              key={article.id}
              href={`/projects/${article.slug}`}
              className="article-card group card-hover cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                goToProject(article.slug);
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-5 aspect-video">
                <img
                  src={article.image}
                  alt={article.title}
                  className="card-image w-full h-full object-cover transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, var(--bg-primary)/60, transparent)' }}
                />
              </div>

              {/* Content */}
              <div>
                <span className="label-mono text-accent mb-3 block">
                  {article.category}
                </span>
                <h3 className="font-display font-semibold text-2xl lg:text-3xl text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-secondary text-lg leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:text-accent transition-colors duration-200">
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
