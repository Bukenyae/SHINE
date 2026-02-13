import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { ThemeProvider } from './components/ThemeProvider';
import { Navigation } from './components/Navigation';
import { Section04EndToEnd } from './sections/Section04EndToEnd';
import { Section02Solutions } from './sections/Section02Solutions';
import { Section10Ecosystem } from './sections/Section10Ecosystem';
import { Section09Contact } from './sections/Section09Contact';
import { ProjectStoryPage } from './pages/ProjectStoryPage';
import { AboutPage } from './pages/AboutPage';
import {
  getProjectBySlug,
  getSupplierBySlug,
  getFinancierBySlug,
  projectArticles,
  supplierArticles,
  financierArticles,
} from './data/projects';

gsap.registerPlugin(ScrollTrigger);

function AppContent() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const isProjectPage = pathname.startsWith('/projects/');
  const isSupplierPage = pathname.startsWith('/suppliers/');
  const isFinancierPage = pathname.startsWith('/financiers/');
  const isAboutPage = pathname === '/about';
  const slug = useMemo(() => {
    if (isProjectPage) return pathname.replace('/projects/', '');
    if (isSupplierPage) return pathname.replace('/suppliers/', '');
    if (isFinancierPage) return pathname.replace('/financiers/', '');
    return '';
  }, [pathname, isProjectPage, isSupplierPage, isFinancierPage]);

  const { article, collection, basePath, relatedTitle } = useMemo(() => {
    if (isSupplierPage) {
      return {
        article: slug ? getSupplierBySlug(slug) : undefined,
        collection: supplierArticles,
        basePath: '/suppliers',
        relatedTitle: 'More Supplier Stories',
      };
    }
    if (isFinancierPage) {
      return {
        article: slug ? getFinancierBySlug(slug) : undefined,
        collection: financierArticles,
        basePath: '/financiers',
        relatedTitle: 'More Financier Stories',
      };
    }
    return {
      article: slug ? getProjectBySlug(slug) : undefined,
      collection: projectArticles,
      basePath: '/projects',
      relatedTitle: 'More Project Stories',
    };
  }, [isSupplierPage, isFinancierPage, slug]);

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Global scroll snap for pinned sections
  useLayoutEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      const existingSnap = ScrollTrigger.getById('global-snap');
      existingSnap?.kill();
      return;
    }

    // Wait for all sections to mount and create their ScrollTriggers
    const timer = setTimeout(() => {
      const existingSnap = ScrollTrigger.getById('global-snap');
      existingSnap?.kill();

      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start);

      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      // Build ranges and snap targets from pinned sections
      const pinnedRanges = pinned.map((st) => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center:
          (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      // Create global snap
      ScrollTrigger.create({
        id: 'global-snap',
        snap: {
          snapTo: (value: number) => {
            // Check if within any pinned range (with small buffer)
            const inPinned = pinnedRanges.some(
              (r) => value >= r.start - 0.02 && value <= r.end + 0.02
            );
            if (!inPinned) return value; // flowing section: free scroll

            // Find nearest pinned center
            const target = pinnedRanges.reduce(
              (closest, r) =>
                Math.abs(r.center - value) < Math.abs(closest - value)
                  ? r.center
                  : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      const existingSnap = ScrollTrigger.getById('global-snap');
      existingSnap?.kill();
    };
  }, []);

  // Cleanup all ScrollTriggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0C0E]">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {isProjectPage || isSupplierPage || isFinancierPage ? (
          <ProjectStoryPage
            article={article ?? collection[0]}
            collection={collection}
            relatedTitle={relatedTitle}
            basePath={basePath as '/projects' | '/suppliers' | '/financiers'}
          />
        ) : isAboutPage ? (
          <AboutPage />
        ) : (
          <>
            {/* Pinned Sections (z-index stacking) */}
            <Section04EndToEnd />
            <Section02Solutions />

            {/* Flowing Sections */}
            <Section10Ecosystem />
            <Section09Contact />
          </>
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
