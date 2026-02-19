import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Battery, ChevronLeft, ChevronRight, DollarSign, Shield, Wifi } from 'lucide-react';
import {
  projectArticles,
  supplierArticles,
  financierArticles,
  getListingSignals,
  getPrimaryMetricBadges,
  getSchoolCardSignals,
  type ProjectArticle,
} from '@/data/projects';
import { MetricBadgeTooltip } from '@/components/MetricBadgeTooltip';

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

type RowNavState = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
};

export function Section10Ecosystem({ mode }: Props) {
  const activeMode = modes[mode];
  const rows = useMemo(() => chunk(activeMode.articles, 4), [activeMode.articles]);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [rowNavState, setRowNavState] = useState<Record<number, RowNavState>>({});

  const goToStory = (basePath: EcosystemMode['basePath'], slug: string) => {
    const path = `${basePath}/${slug}`;
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const scrollRow = (rowIndex: number, direction: 'left' | 'right') => {
    const rowElement = rowRefs.current[rowIndex];
    if (!rowElement) return;

    const delta = rowElement.clientWidth * 0.9;
    rowElement.scrollBy({
      left: direction === 'left' ? -delta : delta,
      behavior: 'smooth',
    });
  };

  const updateRowScrollState = (rowIndex: number) => {
    const rowElement = rowRefs.current[rowIndex];
    if (!rowElement) return;

    const maxScrollLeft = rowElement.scrollWidth - rowElement.clientWidth;
    const canScrollLeft = rowElement.scrollLeft > 4;
    const canScrollRight = rowElement.scrollLeft < maxScrollLeft - 4;

    setRowNavState((prev) => {
      const current = prev[rowIndex];
      if (
        current &&
        current.canScrollLeft === canScrollLeft &&
        current.canScrollRight === canScrollRight
      ) {
        return prev;
      }

      return {
        ...prev,
        [rowIndex]: { canScrollLeft, canScrollRight },
      };
    });
  };

  useEffect(() => {
    rows.forEach((_, rowIndex) => updateRowScrollState(rowIndex));

    const onResize = () => {
      rows.forEach((_, rowIndex) => updateRowScrollState(rowIndex));
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [rows]);

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
                <div className="hidden md:flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Scroll row left"
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(244,246,250,0.2)] bg-[rgba(11,12,14,0.08)] text-primary transition-all hover:bg-[rgba(244,246,250,0.12)] ${
                      rowNavState[rowIndex]?.canScrollLeft === false ? 'opacity-40' : 'opacity-100'
                    }`}
                    onClick={() => scrollRow(rowIndex, 'left')}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Scroll row right"
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(244,246,250,0.2)] bg-[rgba(11,12,14,0.08)] text-primary transition-all hover:bg-[rgba(244,246,250,0.12)] ${
                      rowNavState[rowIndex]?.canScrollRight === false ? 'opacity-40' : 'opacity-100'
                    }`}
                    onClick={() => scrollRow(rowIndex, 'right')}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div
                ref={(element) => {
                  rowRefs.current[rowIndex] = element;
                  if (element) {
                    window.requestAnimationFrame(() => updateRowScrollState(rowIndex));
                  }
                }}
                className="flex gap-5 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onScroll={() => updateRowScrollState(rowIndex)}
              >
                {row.map((article) => (
                  (() => {
                    const listingSignals = getListingSignals(article);
                    const schoolSignals = activeMode.key === 'schools' ? getSchoolCardSignals(article) : null;

                    return (
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
                          {schoolSignals ? (
                            <div className="absolute right-3 top-3 flex max-w-[86%] flex-wrap items-center justify-end gap-2">
                              {getPrimaryMetricBadges(article).map((badge) => (
                                <MetricBadgeTooltip
                                  key={`${article.slug}-${badge.key}`}
                                  label={`${badge.key} metric`}
                                  value={badge.value}
                                  tooltip={badge.tooltip}
                                  className="inline-flex items-center gap-1 rounded-full bg-[rgba(11,12,14,0.68)] px-2.5 py-1 text-[11px] font-semibold text-white outline-none ring-offset-0 focus-visible:ring-1 focus-visible:ring-white"
                                  icon={
                                    badge.key === 'resilience' ? (
                                      <Shield className="h-3.5 w-3.5" />
                                    ) : badge.key === 'storage' ? (
                                      <Battery className="h-3.5 w-3.5" />
                                    ) : badge.key === 'savings' ? (
                                      <DollarSign className="h-3.5 w-3.5" />
                                    ) : (
                                      <Wifi className="h-3.5 w-3.5" />
                                    )
                                  }
                                />
                              ))}
                            </div>
                          ) : null}
                        </div>

                        {!schoolSignals ? (
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <span className="label-mono text-accent block">{article.location}</span>
                            <span className="rounded-full border border-[rgba(244,246,250,0.18)] bg-[rgba(244,246,250,0.06)] px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-primary">
                              {listingSignals.status}
                            </span>
                          </div>
                        ) : null}

                        <h3 className="font-display font-semibold text-xl lg:text-2xl text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                          {article.title}
                        </h3>
                        <p className="text-secondary text-base leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>

                        {schoolSignals ? (
                          <div className="mb-4 grid grid-cols-1 gap-1">
                            <p className="text-[13px] text-secondary">
                              <span className="text-primary">District:</span> {schoolSignals.district}
                            </p>
                            <p className="text-[13px] text-secondary">
                              <span className="text-primary">Buildings:</span> {schoolSignals.buildings} buildings
                            </p>
                            <p className="text-[13px] text-secondary">
                              <span className="text-primary">Students:</span> {schoolSignals.students} students / pupils
                            </p>
                          </div>
                        ) : (
                          <div className="mb-4 space-y-1">
                            <p className="text-[13px] text-secondary">
                              <span className="text-primary">Scale:</span> {listingSignals.scale}
                            </p>
                            <p className="text-[13px] text-secondary">
                              <span className="text-primary">Reliability:</span> {listingSignals.reliability}
                            </p>
                          </div>
                        )}

                        <span className="inline-flex items-center gap-2 text-sm text-primary group-hover:text-accent transition-colors duration-200">
                          View story
                          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </span>
                      </a>
                    );
                  })()
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
