import { useEffect } from 'react';

import { Section03About } from '@/sections/Section03About';
import { SiteFooter } from '@/components/SiteFooter';

export function AboutPage() {
  useEffect(() => {
    // Ensure route entry always lands at top of About page content.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const goHome = () => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="about-page-wrap">
      <Section03About onBackHome={goHome} />
      <div className="px-6 lg:px-[6vw] pb-16">
        <SiteFooter className="mt-12" />
      </div>
    </div>
  );
}
