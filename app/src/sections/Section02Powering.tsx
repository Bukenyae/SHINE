import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Section02Powering() {
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
        { scale: 1.18, x: '12vw', opacity: 0.6 },
        { scale: 1, x: 0, opacity: 1, ease: 'none' },
        0
      );

      const lines = headline.querySelectorAll('.power-line');
      scrollTl.fromTo(
        lines,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.03, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        body,
        { y: '10vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.12
      );

      // SETTLE (30% - 70%) - hold

      // EXIT (70% - 100%)
      scrollTl.fromTo(
        headline,
        { x: 0, opacity: 1 },
        { x: '40vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        body,
        { x: 0, opacity: 1 },
        { x: '30vw', opacity: 0, ease: 'power2.in' },
        0.72
      );

      scrollTl.fromTo(
        bg,
        { scale: 1, y: 0 },
        { scale: 1.1, y: '-5vh', ease: 'none' },
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
      id="about"
      className="relative w-screen h-screen overflow-hidden"
      style={{ zIndex: 20, backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <img
          src="/images/powering_nation_sunset.jpg"
          alt="Solar array at sunset"
          className="w-full h-full object-cover"
        />
        <div className="vignette" />
        <div className="absolute inset-0 gradient-overlay-right" />
      </div>

      {/* Content - Right Side */}
      <div className="relative z-10 h-full flex flex-col justify-center items-end pr-6 lg:pr-[6vw] pl-6 lg:pl-[40vw]">
        {/* Headline */}
        <div ref={headlineRef} className="mb-8 lg:mb-10 text-right">
          <h2 className="headline-xl text-[clamp(36px,7vw,80px)]">
            <span className="power-line block">POWERING</span>
            <span className="power-line block text-accent">UGANDA'S</span>
            <span className="power-line block">FUTURE</span>
          </h2>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="max-w-md lg:max-w-lg text-right">
          <p className="text-secondary text-sm lg:text-base leading-relaxed mb-8">
            From rural households to city grids, we design, install, and maintain
            solar systems that keep communities running—day after day. Our work
            has impacted people in over 55 districts across Uganda.
          </p>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#projects');
            }}
            className="btn-outline inline-flex"
          >
            See Our Impact
          </a>
        </div>
      </div>
    </section>
  );
}
