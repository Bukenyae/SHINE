import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Section01Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const headline = headlineRef.current;
    const sub = subRef.current;
    const cta = ctaRef.current;

    if (!section || !bg || !headline || !sub || !cta) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation on load
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      // Background entrance
      loadTl.fromTo(
        bg,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2 }
      );

      // Headline lines staggered reveal
      const lines = headline.querySelectorAll('.hero-line');
      loadTl.fromTo(
        lines,
        { y: 50, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
        {
          y: 0,
          opacity: 1,
          clipPath: 'inset(0 0 0 0)',
          duration: 0.8,
          stagger: 0.1,
        },
        '-=0.7'
      );

      // Subheadline
      loadTl.fromTo(
        sub,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      );

      // CTAs
      const buttons = cta.querySelectorAll('a');
      loadTl.fromTo(
        buttons,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        '-=0.3'
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        headline,
        { x: 0, opacity: 1 },
        { x: '-55vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        sub,
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        cta,
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        bg,
        { scale: 1, y: 0 },
        { scale: 1.12, y: '-6vh', ease: 'none' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden bg-[#0B0C0E]"
      style={{ zIndex: 70 }}
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/hero_solar_field.jpg"
          alt="Solar farm at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="vignette" />
        <div className="gradient-overlay-left" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-[6vw]">
        {/* Headline */}
        <div ref={headlineRef} className="mb-6 lg:mb-8">
          <h1 className="headline-xl text-[clamp(40px,8vw,90px)]">
            <span className="hero-line block">CLEAN</span>
            <span className="hero-line block text-accent">ENERGY</span>
            <span className="hero-line block">INFRASTRUCTURE</span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          ref={subRef}
          className="max-w-md lg:max-w-lg text-secondary text-sm lg:text-base leading-relaxed mb-8"
          style={{ opacity: 0 }}
        >
          Engineered for utilities, commercial estates, and rural electrification
          across Uganda. We design, install, and maintain solar systems that power
          communities.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap gap-4" style={{ opacity: 0 }}>
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#solutions');
            }}
            className="btn-primary"
          >
            Explore Solutions
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}
            className="btn-outline"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
}
