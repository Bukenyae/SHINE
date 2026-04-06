import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Battery, ChevronLeft, ChevronRight, DollarSign, Shield, Wifi } from 'lucide-react';
import {
  getListingSignals,
  getPrimaryMetricBadges,
  getSchoolCardSignals,
} from '@/data/projects';
import { MetricBadgeTooltip } from '@/components/MetricBadgeTooltip';
import {
  ecosystemModes,
  partnerViews,
  railTitles,
  type ModeKey,
  type PartnerMode,
  type StoryBasePath,
} from '@/sections/ecosystemContent';

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
  const [partnerMode, setPartnerMode] = useState<PartnerMode>('suppliers');
  const activeMode = ecosystemModes[mode];
  const activePartnerView = mode === 'partners' ? partnerViews[partnerMode] : null;
  const activeArticles = activePartnerView?.articles ?? activeMode.articles;
  const activeBasePath = activePartnerView?.basePath ?? activeMode.basePath;
  const activeLabel = activePartnerView?.label ?? activeMode.label;
  const activeHelper = activePartnerView?.helper ?? activeMode.helper;
  const activeRailTitles = activePartnerView?.railTitles ?? railTitles[mode];
  const rows = useMemo(() => chunk(activeArticles, 4), [activeArticles]);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [rowNavState, setRowNavState] = useState<Record<number, RowNavState>>({});

  const goToStory = (basePath: StoryBasePath, slug: string) => {
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
    rowRefs.current = [];
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
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="contact-lead mb-3">{activeMode.label}</h2>
              <p className="text-secondary max-w-2xl text-base lg:text-lg">{activeHelper}</p>
            </div>
            {mode === 'partners' ? (
              <div className="inline-flex w-fit rounded-full border border-[rgba(244,246,250,0.16)] bg-[rgba(244,246,250,0.04)] p-1">
                {(['suppliers', 'financiers'] as PartnerMode[]).map((view) => (
                  <button
                    key={view}
                    type="button"
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      partnerMode === view
                        ? 'bg-[rgba(244,246,250,0.14)] text-primary'
                        : 'text-secondary hover:text-primary'
                    }`}
                    onClick={() => setPartnerMode(view)}
                  >
                    {partnerViews[view].label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {rows.map((row, rowIndex) => (
            <div key={`${mode}-${activeLabel}-row-${rowIndex}`}>
              <div className="flex items-end justify-between mb-5">
                <h3 className="text-primary font-display font-semibold text-2xl lg:text-3xl">
                  {activeRailTitles[rowIndex] ?? `${activeLabel} listings`}
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
                    const schoolSignals = mode === 'schools' ? getSchoolCardSignals(article) : null;

                    return (
                      <a
                        key={article.slug}
                        href={`${activeBasePath}/${article.slug}`}
                        className="article-card group card-hover cursor-pointer min-w-[280px] max-w-[320px] flex-1"
                        onClick={(e) => {
                          e.preventDefault();
                          goToStory(activeBasePath, article.slug);
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
