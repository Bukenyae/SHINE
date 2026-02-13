import { useMemo, useState, type CSSProperties, type JSX } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  projectArticles,
  supplierArticles,
  financierArticles,
  type ProjectArticle,
} from '@/data/projects';

type ModeKey = 'schools' | 'suppliers' | 'financiers';

type EcosystemMode = {
  key: ModeKey;
  label: string;
  helper: string;
  chipTone: 'light' | 'mid' | 'dark';
  basePath: '/projects' | '/suppliers' | '/financiers';
  articles: ProjectArticle[];
};

const modes: EcosystemMode[] = [
  {
    key: 'schools',
    label: 'Schools',
    helper: 'Customer schools delivering impact',
    chipTone: 'light',
    basePath: '/projects',
    articles: projectArticles,
  },
  {
    key: 'suppliers',
    label: 'Energy Partners',
    helper: 'Equipment suppliers powering deployments',
    chipTone: 'mid',
    basePath: '/suppliers',
    articles: supplierArticles,
  },
  {
    key: 'financiers',
    label: 'Financiers',
    helper: 'Finance partners expanding access',
    chipTone: 'dark',
    basePath: '/financiers',
    articles: financierArticles,
  },
];

const badgeIcons: Record<string, JSX.Element> = {
  shield: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 4l16 6v12c0 12-7 20-16 24-9-4-16-12-16-24V10l16-6z" />
      <path d="M32 18v20" />
      <path d="M22 28h20" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 18c10-4 22-4 32 0v30c-10-4-22-4-32 0V18z" />
      <path d="M44 18c4-2 8-2 12 0v30c-4-2-8-2-12 0V18z" />
      <path d="M30 18v32" />
      <path d="M18 26h8" />
      <path d="M18 34h8" />
      <path d="M14 52h36" />
      <path d="M18 52l6-4 8 4 8-4 6 4" />
    </svg>
  ),
  torch: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M26 10c2 6 12 8 12 16 0 7-5 12-6 14-2-2-8-7-8-14 0-5 2-7 2-16z" />
      <path d="M24 30h16" />
      <rect x="26" y="32" width="12" height="18" rx="3" />
      <path d="M20 52h24" />
      <path d="M18 52l6-4 8 4 8-4 6 4" />
    </svg>
  ),
  crest: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M16 10h32v18c0 14-10 24-16 26-6-2-16-12-16-26V10z" />
      <path d="M22 20h20" />
      <path d="M22 28h20" />
      <path d="M32 18v20" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  laurel: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M14 44c-8-10-7-24 4-34 7-6 14-6 14-6-7 7-7 20-1 28" />
      <path d="M50 44c8-10 7-24-4-34-7-6-14-6-14-6 7 7 7 20 1 28" />
      <path d="M24 44h16" />
      <path d="M20 18l6 4" />
      <path d="M44 18l-6 4" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  pillar: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="18" y="16" width="28" height="8" rx="3" />
      <rect x="22" y="24" width="20" height="20" rx="3" />
      <rect x="16" y="44" width="32" height="8" rx="3" />
      <path d="M26 28h12" />
      <path d="M26 34h12" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  sun: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 6v8M32 38v8M10 26h8M46 26h8M18 14l6 6M40 34l6 6M18 38l6-6M40 18l6-6" />
      <path d="M26 26h12" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  wave: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 26c7 0 7-7 14-7s7 7 14 7 7-7 14-7 7 7 14 7" />
      <path d="M8 38c7 0 7-7 14-7s7 7 14 7 7-7 14-7 7 7 14 7" />
      <path d="M18 18l5-6 5 6" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  peak: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M8 48l18-24 12 16 6-8 12 16H8z" />
      <path d="M26 24l8 10" />
      <path d="M34 18l6 8" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M36 6L20 36h10l-2 22 16-30H34l2-22z" />
      <path d="M14 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  inverter: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="16" y="12" width="32" height="30" rx="6" />
      <path d="M24 22h16" />
      <path d="M24 30h16" />
      <path d="M22 44h20" />
      <path d="M18 52l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  battery: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="16" width="36" height="30" rx="6" />
      <rect x="50" y="24" width="6" height="14" rx="2" />
      <path d="M24 26h16" />
      <path d="M24 34h16" />
      <path d="M18 52l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  tools: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M18 12l12 12-6 6-12-12 6-6z" />
      <path d="M34 18l12-6 6 6-6 12-12-12z" />
      <path d="M26 36l14 14" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  sensor: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="26" r="10" />
      <path d="M18 42c4-4 10-6 14-6s10 2 14 6" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  cable: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 20h40" />
      <path d="M12 28h40" />
      <path d="M20 36h24" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  lamp: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M24 10h16l-4 10H28l-4-10z" />
      <rect x="28" y="20" width="8" height="20" rx="2" />
      <path d="M20 42h24" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  structure: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 44l22-20 22 20" />
      <path d="M18 44v8" />
      <path d="M46 44v8" />
      <path d="M18 52l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  bank: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 24l22-12 22 12" />
      <path d="M18 26v20" />
      <path d="M28 26v20" />
      <path d="M38 26v20" />
      <path d="M48 26v20" />
      <path d="M12 46h40" />
      <path d="M18 52l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 36c20-24 36-20 40-16-4 4-8 20-28 28-10 4-12-6-12-12z" />
      <path d="M24 36l16-8" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  handshake: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M16 30l8-8 10 10-6 6-12-8z" />
      <path d="M48 30l-8-8-10 10 6 6 12-8z" />
      <path d="M24 36l8 6 8-6" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  payout: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="18" width="36" height="24" rx="6" />
      <path d="M24 30h16" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  grant: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M20 14h24v12H20z" />
      <path d="M16 26h32v14H16z" />
      <path d="M26 40v10" />
      <path d="M38 40v10" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
  schedule: (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <rect x="14" y="16" width="36" height="34" rx="6" />
      <path d="M22 12v8" />
      <path d="M42 12v8" />
      <path d="M22 28h20" />
      <path d="M18 50l8-4 6 4 6-4 8 4" />
    </svg>
  ),
};

const schoolBadges = [
  { name: 'St Kizito Primary', icon: 'shield', color: '#1d4ed8', slug: 'st-kizito-primary-247-power' },
  { name: 'Greenhill Academy', icon: 'book', color: '#0ea5e9', slug: 'greenhill-academy-generator-reduction' },
  { name: 'Lakeview Secondary', icon: 'torch', color: '#10b981', slug: 'lakeview-secondary-maintenance-uptime' },
  { name: 'Mirembe College', icon: 'crest', color: '#22c55e', slug: 'mirembe-college-storage-uptime' },
  { name: 'Kampala Heights', icon: 'laurel', color: '#84cc16', slug: 'kampala-heights-grid-tied-upgrade' },
  { name: 'Northgate School', icon: 'pillar', color: '#f59e0b', slug: 'northgate-school-remote-monitoring' },
  { name: 'Sunrise Academy', icon: 'sun', color: '#f97316', slug: 'sunrise-academy-resilience-upgrade' },
  { name: 'Riverbend Prep', icon: 'wave', color: '#ef4444', slug: 'riverbend-prep-load-optimization' },
  { name: 'Hillside Secondary', icon: 'peak', color: '#ec4899', slug: 'hillside-secondary-campus-efficiency' },
];

const supplierBadges = [
  { name: 'Aurora Solar', icon: 'bolt', color: '#0ea5e9', slug: 'aurora-solar-modules' },
  { name: 'Gridline Inverters', icon: 'inverter', color: '#14b8a6', slug: 'gridline-inverters' },
  { name: 'Lumin Storage', icon: 'battery', color: '#10b981', slug: 'lumin-battery-storage' },
  { name: 'Terra Mounting', icon: 'structure', color: '#f97316', slug: 'terra-mounting' },
  { name: 'Flux Monitoring', icon: 'sensor', color: '#f59e0b', slug: 'flux-monitoring' },
  { name: 'Volt Safety', icon: 'shield', color: '#ef4444', slug: 'volt-safety' },
  { name: 'Crest Cabling', icon: 'cable', color: '#6366f1', slug: 'crest-cabling' },
  { name: 'Helios Lighting', icon: 'lamp', color: '#eab308', slug: 'helios-lighting' },
  { name: 'Anchor Structures', icon: 'structure', color: '#22c55e', slug: 'anchor-structures' },
];

const financierBadges = [
  { name: 'Rise Credit Union', icon: 'bank', color: '#22c55e', slug: 'rise-credit-union' },
  { name: 'Equator Bank', icon: 'leaf', color: '#0ea5e9', slug: 'equator-bank-green-lines' },
  { name: 'Harbor Microfinance', icon: 'handshake', color: '#f97316', slug: 'harbor-microfinance' },
  { name: 'Summit Fintech', icon: 'schedule', color: '#f59e0b', slug: 'summit-fintech' },
  { name: 'Lumen Lease', icon: 'payout', color: '#ef4444', slug: 'lumen-lease' },
  { name: 'Northline Capital', icon: 'bank', color: '#8b5cf6', slug: 'northline-capital' },
  { name: 'Bluecrest Cooperative', icon: 'handshake', color: '#06b6d4', slug: 'bluecrest-coop' },
  { name: 'Equinox Grants', icon: 'grant', color: '#10b981', slug: 'equinox-grants' },
  { name: 'Nova Pay', icon: 'payout', color: '#ec4899', slug: 'nova-pay' },
];

export function Section10Ecosystem() {
  const [mode, setMode] = useState<ModeKey>('schools');
  const activeMode = useMemo(() => modes.find((item) => item.key === mode) ?? modes[0], [mode]);
  const badgeSet = useMemo(() => {
    if (mode === 'suppliers') return supplierBadges;
    if (mode === 'financiers') return financierBadges;
    return schoolBadges;
  }, [mode]);

  const goToStory = (basePath: EcosystemMode['basePath'], slug: string) => {
    const path = `${basePath}/${slug}`;
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="ecosystem"
      className="ecosystem-section relative w-full py-20 lg:py-32"
      style={{ zIndex: 80, backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="px-6 lg:px-[6vw]">
        <div className="flex flex-col gap-6 mb-10 lg:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="contact-lead mb-2">Ecosystem Partners</h2>
              <p className="text-secondary text-base lg:text-lg">{activeMode.helper}</p>
            </div>
            <div className="ecosystem-toggle-row">
              {modes.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={`ecosystem-toggle ${item.chipTone} ${
                    mode === item.key ? 'active' : ''
                  }`}
                  onClick={() => setMode(item.key)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="school-grid">
          {badgeSet.map((badge) => (
            <a
              key={badge.name}
              href={`${activeMode.basePath}/${badge.slug}`}
              className="school-badge"
              onClick={(e) => {
                e.preventDefault();
                goToStory(activeMode.basePath, badge.slug);
              }}
              style={
                {
                  '--badge-color': badge.color,
                } as CSSProperties
              }
            >
              <span className="school-badge-mark">{badgeIcons[badge.icon]}</span>
              <span className="school-badge-name">{badge.name}</span>
            </a>
          ))}
        </div>

        <div className="ecosystem-stories mt-14 lg:mt-20">
          <div className="flex items-end justify-between mb-8">
            <h3 className="contact-lead">{activeMode.label} stories</h3>
            <span className="text-secondary text-sm">Read more</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activeMode.articles.slice(0, 6).map((article) => (
              <a
                key={article.slug}
                href={`${activeMode.basePath}/${article.slug}`}
                className="article-card group card-hover cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  goToStory(activeMode.basePath, article.slug);
                }}
              >
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
                <span className="label-mono text-accent mb-3 block">{article.category}</span>
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
