import { ArrowLeft, ArrowRight } from 'lucide-react';
import { type ProjectArticle } from '@/data/projects';

type Props = {
  article: ProjectArticle;
  collection?: ProjectArticle[];
  relatedTitle?: string;
  basePath?: string;
};

export function ProjectStoryPage({
  article,
  collection = [],
  relatedTitle = 'More Project Stories',
  basePath = '/projects',
}: Props) {
  const related = collection.filter((item) => item.slug !== article.slug).slice(0, 6);
  const galleryGridImages = [...article.galleryImages, ...article.galleryImages].slice(0, 6);
  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const goToProject = (slug: string) => {
    const path = `${basePath}/${slug}`;
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <section
      id="project-story"
      className="relative w-full py-20 lg:py-28"
      style={{ zIndex: 80, backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="px-6 lg:px-[6vw]">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors duration-200 mb-8"
          onClick={(e) => {
            e.preventDefault();
            goHome();
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </a>

        <div className="project-story-main mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-8">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-[320px] lg:h-[620px] object-cover"
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-3">
              {galleryGridImages.map((image, index) => (
                <div key={`${article.slug}-gallery-${index}`} className="overflow-hidden rounded-2xl">
                  <img
                    src={image}
                    alt={`${article.title} gallery ${index + 1}`}
                    className="w-full h-[110px] sm:h-[130px] lg:h-[198px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <span className="label-mono text-accent mb-4 block">{article.category}</span>
          <h1 className="font-display font-semibold text-4xl lg:text-6xl text-primary leading-tight mb-6">
            {article.title}
          </h1>

          <div className="project-story-meta mb-8">
            <p className="text-secondary text-base lg:text-lg"><strong className="text-primary">Location:</strong> {article.location}</p>
            <p className="text-secondary text-base lg:text-lg"><strong className="text-primary">Timeline:</strong> {article.timeline}</p>
            <p className="text-secondary text-base lg:text-lg"><strong className="text-primary">Outcome:</strong> {article.impact}</p>
          </div>

          <div className="project-story-copy">
            {article.story.map((paragraph, index) => (
              <p key={`${article.slug}-${index}`} className="text-secondary text-lg lg:text-2xl leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="project-related-wrap">
          <h2 className="contact-lead mb-8">{relatedTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {related.map((item) => (
              <a
                key={item.slug}
                href={`${basePath}/${item.slug}`}
                className="article-card group card-hover cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  goToProject(item.slug);
                }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-image w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
                <span className="label-mono text-accent mb-2 block">{item.category}</span>
                <h3 className="font-display font-semibold text-xl lg:text-2xl text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:text-accent transition-colors duration-200">
                  Read more
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
