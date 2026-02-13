import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Section03BuiltForScale() {
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
        { scale: 1.25, rotate: -2, opacity: 0.7 },
        { scale: 1, rotate: 0, opacity: 1, ease: 'none' },
        0
      );

      const lines = headline.querySelectorAll('.scale-line');
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

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        headline,
        { x: 0, opacity: 1 },
        { x: '-45vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        body,
        { x: 0, opacity: 1 },
        { x: '-30vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        bg,
        { scale: 1, x: 0 },
        { scale: 1.12, x: '6vw', ease: 'none' },
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
      id="solutions"
      className="relative w-screen h-screen overflow-hidden"
      style={{ zIndex: 30, backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <img
          src="/images/panel_texture_closeup.jpg"
          alt="Solar panel texture close-up"
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
            <span className="scale-line block">BUILT</span>
            <span className="scale-line block">FOR</span>
            <span className="scale-line block text-accent">SCALE</span>
          </h2>
        </div>

        {/* Body */}
        <div ref={bodyRef}>
          <p className="text-secondary text-sm lg:text-base leading-relaxed mb-8 max-w-md">
            Modular arrays, robust inverters, and smart monitoring—engineered to
            grow with your demand. From small residential setups to large
            commercial installations.
          </p>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#projects');
            }}
            className="btn-primary inline-flex"
          >
            View Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
