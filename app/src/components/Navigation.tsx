import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export type ListingMode = 'schools' | 'partners';

type NavigationProps = {
  isHomePage: boolean;
  isSolutionsPage: boolean;
  activeMode: ListingMode;
  onModeChange: (mode: ListingMode) => void;
};

const listingTabs: Array<{ label: string; mode: ListingMode }> = [
  { label: 'Schools', mode: 'schools' },
  { label: 'Partners', mode: 'partners' },
];

export function Navigation({
  isHomePage,
  isSolutionsPage,
  activeMode,
  onModeChange,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goHome = (mode?: ListingMode) => {
    if (mode) onModeChange(mode);
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const goToSolutions = () => {
    if (window.location.pathname !== '/solutions') {
      window.history.pushState({}, '', '/solutions');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'nav-scrolled bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[rgba(244,246,250,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-10">
        <div className="grid grid-cols-3 items-center h-16 lg:h-20">
          {/* Center - Logo */}
          <a
            href="#"
            className="nav-logo sch-shine-mark col-start-2 font-display text-primary justify-self-center"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname !== '/') {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="sch-shine-tag" aria-label="School abbreviation">
              Sch
            </span>
            <span className="sch-shine-word">SHINE</span>
          </a>

          {/* Right - Theme Toggle */}
          <div className="hidden lg:flex items-center justify-end gap-6">
            <ThemeToggle />
          </div>

          {/* Mobile About */}
          <button
            type="button"
            className={`col-start-3 justify-self-end p-2 transition-colors lg:hidden ${
              isScrolled ? 'text-[#F4F6FA]' : 'text-primary'
            }`}
            aria-label="Go to About Us page"
            onClick={() => {
              if (window.location.pathname !== '/about') {
                window.history.pushState({}, '', '/about');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {isHomePage || isSolutionsPage ? (
          <div className="flex items-center justify-center gap-2 lg:gap-3 pb-3 lg:pb-4">
            {listingTabs.slice(0, 1).map((tab) => (
              <button
                key={tab.mode}
                type="button"
                className={`nav-mode-tab px-1 lg:px-2 h-8 text-xs lg:text-sm font-medium transition-colors duration-200 ${
                  isHomePage && activeMode === tab.mode ? 'nav-mode-tab-active' : ''
                }`}
                onClick={() => goHome(tab.mode)}
              >
                {tab.label}
              </button>
            ))}
            <button
              type="button"
              className={`nav-mode-tab px-1 lg:px-2 h-8 text-xs lg:text-sm font-medium transition-colors duration-200 ${
                isSolutionsPage ? 'nav-mode-tab-active' : ''
              }`}
              onClick={goToSolutions}
            >
              Solutions
            </button>
            {listingTabs.slice(1).map((tab) => (
              <button
                key={tab.mode}
                type="button"
                className={`nav-mode-tab px-1 lg:px-2 h-8 text-xs lg:text-sm font-medium transition-colors duration-200 ${
                  isHomePage && activeMode === tab.mode ? 'nav-mode-tab-active' : ''
                }`}
                onClick={() => goHome(tab.mode)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
