import { cn } from '@/lib/utils';

type SiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className }: SiteFooterProps) {
  const navigateTo = (href: string) => {
    if (href.startsWith('#')) {
      const scrollToHash = () => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      if (window.location.pathname === '/') {
        scrollToHash();
        return;
      }

      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(scrollToHash, 120);
      return;
    }

    if (window.location.pathname !== href) {
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }, 0);
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <footer
      className={cn('mt-20 pt-10 border-t', className)}
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <img
            src="/images/Anuel%20logo%203.jpg"
            alt="Anuel logo"
            className="footer-logo mb-3"
          />
          <span className="font-display font-bold text-xl text-primary">
            Anuel<span className="text-accent">.</span>Energy
          </span>
          <p className="text-secondary text-sm mt-2">
            Powering Uganda&apos;s future with clean energy.
          </p>
        </div>

        <div className="flex flex-wrap gap-6">
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#solutions');
            }}
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Solutions
          </a>
          <a
            href="#ecosystem"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#ecosystem');
            }}
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Ecosystem
          </a>
          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/about');
            }}
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#contact');
            }}
            className="text-sm text-secondary hover:text-primary transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="text-secondary text-sm">
          © {new Date().getFullYear()} Anuel Energy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
