import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Section07ReadyWhen() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;

    if (!section || !bg || !headline || !body) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl.fromTo(
        bg,
        { scale: 1.22, y: '10vh', opacity: 0.6 },
        { scale: 1, y: 0, opacity: 1, ease: 'none' },
        0
      );

      const lines = headline.querySelectorAll('.ready-line');
      scrollTl.fromTo(
        lines,
        { x: '-70vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.03, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        body,
        { y: '12vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.12
      );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%) - lift up
      scrollTl.fromTo(
        headline,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        body,
        { y: 0, opacity: 1 },
        { y: '-14vh', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        bg,
        { scale: 1 },
        { scale: 1.08, ease: 'none' },
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
      className="relative w-screen h-screen overflow-hidden"
      style={{ zIndex: 60, backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <img
          src="/images/golden_hour_field.jpg"
          alt="Solar field at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="vignette" />
        <div className="absolute inset-0 gradient-overlay-left" />
      </div>

      {/* Content - Left Side */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-[6vw] max-w-2xl">
        {/* Headline */}
        <div ref={headlineRef} className="mb-8 lg:mb-10">
          <h2 className="headline-xl text-[clamp(36px,7vw,80px)]">
            <span className="ready-line block text-accent">READY</span>
            <span className="ready-line block">WHEN</span>
            <span className="ready-line block">YOU ARE</span>
          </h2>
        </div>

        {/* Body */}
        <div ref={bodyRef}>
          <p className="text-secondary text-sm lg:text-base leading-relaxed mb-8 max-w-md">
            Tell us what you're powering. We'll design a system that fits your
            site, your budget, and your timeline.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="btn-primary inline-flex"
            >
              Request a Quote
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="btn-outline inline-flex"
            >
              Speak with an Engineer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
