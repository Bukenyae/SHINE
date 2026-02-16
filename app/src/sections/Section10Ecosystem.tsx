import { ArrowRight } from 'lucide-react';
import {
  projectArticles,
  supplierArticles,
  financierArticles,
  type ProjectArticle,
} from '@/data/projects';

export type ModeKey = 'schools' | 'suppliers' | 'financiers';

type EcosystemMode = {
  key: ModeKey;
  label: string;
  helper: string;
  basePath: '/projects' | '/suppliers' | '/financiers';
  articles: ProjectArticle[];
};

const modes: Record<ModeKey, EcosystemMode> = {
  schools: {
    key: 'schools',
    label: 'Schools',
    helper: 'Browse real school transitions to reliable solar power.',
    basePath: '/projects',
    articles: projectArticles,
  },
  suppliers: {
    key: 'suppliers',
    label: 'Energy Partners',
    helper: 'Explore suppliers supporting SHINE deployments end-to-end.',
    basePath: '/suppliers',
    articles: supplierArticles,
  },
  financiers: {
    key: 'financiers',
    label: 'Financiers',
    helper: 'See finance partners helping schools adopt solar infrastructure.',
    basePath: '/financiers',
    articles: financierArticles,
  },
};

const railTitles: Record<ModeKey, string[]> = {
  schools: [
    'Popular school transitions',
    'Reliable campuses in Uganda',
    'Recently deployed systems',
  ],
  suppliers: ['Core equipment partners', 'Deployment infrastructure vendors', 'Monitoring and service partners'],
  financiers: ['Funding partners by focus', 'Blended finance and leasing models', 'Capital partners expanding access'],
};

const chunk = <T,>(items: T[], size: number) => {
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
};

type Props = {
  mode: ModeKey;
};

export function Section10Ecosystem({ mode }: Props) {
  const activeMode = modes[mode];
  const rows = chunk(activeMode.articles, 4);

  const goToStory = (basePath: EcosystemMode['basePath'], slug: string) => {
    const path = `${basePath}/${slug}`;
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <section
      id="ecosystem"
      className="ecosystem-section relative w-full pt-32 pb-20 lg:pt-44 lg:pb-28"
      style={{ zIndex: 80, backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="px-6 lg:px-[6vw]">
        <div className="mb-10 lg:mb-14">
          <h2 className="contact-lead mb-3">{activeMode.label}</h2>
          <p className="text-secondary text-base lg:text-lg max-w-2xl">{activeMode.helper}</p>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {rows.map((row, rowIndex) => (
            <div key={`${activeMode.key}-row-${rowIndex}`}>
              <div className="flex items-end justify-between mb-5">
                <h3 className="text-primary font-display font-semibold text-2xl lg:text-3xl">
                  {railTitles[activeMode.key][rowIndex] ?? `${activeMode.label} listings`}
                </h3>
              </div>

              <div className="flex gap-5 overflow-x-auto pb-2">
                {row.map((article) => (
                  <a
                    key={article.slug}
                    href={`${activeMode.basePath}/${article.slug}`}
                    className="article-card group card-hover cursor-pointer min-w-[280px] max-w-[320px] flex-1"
                    onClick={(e) => {
                      e.preventDefault();
                      goToStory(activeMode.basePath, article.slug);
                    }}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-5 aspect-[4/3]">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="card-image w-full h-full object-cover transition-transform duration-500"
                      />
                    </div>
                    <span className="label-mono text-accent mb-2 block">{article.location}</span>
                    <h3 className="font-display font-semibold text-xl lg:text-2xl text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-secondary text-base leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:text-accent transition-colors duration-200">
                      View story
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
