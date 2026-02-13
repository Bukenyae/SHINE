import type { CSSProperties, JSX } from 'react';

const schools = [
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
};

export function Section10Schools() {
  const goToProject = (slug: string) => {
    const path = `/projects/${slug}`;
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="schools"
      className="school-section relative w-full py-20 lg:py-28"
      style={{ zIndex: 70, backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="px-6 lg:px-[6vw]">
        <div className="school-header text-center mb-10 lg:mb-14">
          <h2 className="contact-lead mb-4">
            Leading schools succeed with Shine.
          </h2>
          <a href="#ecosystem" className="btn-primary inline-flex">
            Customer stories
          </a>
        </div>

        <div className="school-grid">
          {schools.map((school) => (
            <a
              key={school.name}
              href={`/projects/${school.slug}`}
              className="school-badge"
              onClick={(e) => {
                e.preventDefault();
                goToProject(school.slug);
              }}
              style={
                {
                  '--badge-color': school.color,
                } as CSSProperties
              }
            >
              <span className="school-badge-mark">
                {badgeIcons[school.icon]}
              </span>
              <span className="school-badge-name">{school.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
