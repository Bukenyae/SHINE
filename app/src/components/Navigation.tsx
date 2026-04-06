import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
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
  const [isOpen, setIsOpen] = useState(false);
  const mobileLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clearSheetScrollLocks = () => {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('padding-right');
    document.body.style.removeProperty('pointer-events');
    document.documentElement.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('padding-right');
    document.documentElement.style.removeProperty('pointer-events');
  };

  useEffect(() => {
    if (!isOpen) clearSheetScrollLocks();
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);

    const performScroll = () => {
      if (!href.startsWith('#')) {
        if (window.location.pathname !== href) {
          window.history.pushState({}, '', href);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

      if (window.location.pathname === '/') return;

      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    };

    // Let the sheet close first so scroll + pointer interactions stay responsive.
    setTimeout(performScroll, 120);
  };

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
          {/* Left - Brand Logo + Name */}
          <a
            href="/"
            className="hidden lg:flex items-center"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname !== '/') {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="/images/Anuel%20logo%203.jpg"
              alt="Anuel logo"
              className="h-10 w-10 rounded-md object-cover"
            />
            <span className="nav-brand-text ml-3 font-display font-semibold text-base text-primary">
              Anuel Energy
            </span>
          </a>

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

          {/* Mobile Menu */}
          <Sheet
            modal={false}
            open={isOpen}
            onOpenChange={(open) => {
              setIsOpen(open);
              if (!open) {
                // Clear any stale lock after close animation tick.
                window.setTimeout(clearSheetScrollLocks, 0);
              }
            }}
          >
            <SheetTrigger asChild className="col-start-3 justify-self-end lg:hidden">
              <button
                className={`p-2 transition-colors ${
                  isScrolled ? 'text-[#F4F6FA]' : 'text-primary'
                }`}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="mobile-sheet w-[62vw] min-w-[220px] max-w-[280px] sm:w-80 p-0 backdrop-blur-md border-l [&>[data-slot=sheet-close]]:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-[rgba(244,246,250,0.1)]">
                  <span className="mobile-menu-text font-display font-bold text-lg">
                    Anuel<span className="text-accent">.</span>Energy
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mobile-menu-text p-2"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="flex flex-col p-6 gap-1">
                  {mobileLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="mobile-menu-link rounded-md px-3 py-3 text-base font-medium transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto p-6 space-y-4">
                  <div className="flex items-center justify-center">
                    <ThemeToggle />
                  </div>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('#contact');
                    }}
                    className="btn-primary w-full justify-center"
                  >
                    Download App
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
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
