import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '55+', label: 'Districts' },
  { value: 'Commercial', label: '& Rural' },
  { value: '24/7', label: 'Support' },
];

export function Section06ProvenAcross() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const headline = headlineRef.current;
    const body = bodyRef.current;
    const statsEl = statsRef.current;

    if (!section || !bg || !headline || !body || !statsEl) return;

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
        { scale: 1.18, opacity: 0.6 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );

      const lines = headline.querySelectorAll('.proven-line');
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

      const statItems = statsEl.querySelectorAll('.stat-item');
      scrollTl.fromTo(
        statItems,
        { y: '8vh', opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.02, ease: 'none' },
        0.16
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
        statItems,
        { y: 0, opacity: 1 },
        { y: '8vh', opacity: 0, stagger: 0.01, ease: 'power2.in' },
        0.7
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

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-screen h-screen overflow-hidden"
      style={{ zIndex: 50, backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <img
          src="/images/uganda_solar_landscape.jpg"
          alt="Solar installation in Uganda landscape"
          className="w-full h-full object-cover"
        />
        <div className="vignette" />
        <div className="absolute inset-0 gradient-overlay-right" />
      </div>

      {/* Content - Right Side */}
      <div className="relative z-10 h-full flex flex-col justify-center items-end pr-6 lg:pr-[6vw] pl-6 lg:pl-[40vw]">
        {/* Headline */}
        <div ref={headlineRef} className="mb-8 lg:mb-10 text-right">
          <h2 className="headline-xl text-[clamp(32px,6vw,72px)]">
            <span className="proven-line block">PROVEN</span>
            <span className="proven-line block">ACROSS</span>
            <span className="proven-line block text-accent">UGANDA</span>
          </h2>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="max-w-md lg:max-w-lg text-right mb-10">
          <p className="text-secondary text-sm lg:text-base leading-relaxed">
            From remote villages to urban commercial sites, our systems are
            running—backed by local expertise and responsive maintenance.
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="flex gap-8 lg:gap-12 justify-end">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item text-right">
              <div className="font-display font-bold text-2xl lg:text-4xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="label-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
