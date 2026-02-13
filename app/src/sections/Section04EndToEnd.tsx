import { useRef } from 'react';

const services = ['Assess', 'Design', 'Finance', 'Install', 'Maintain'];

export function Section04EndToEnd() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen min-h-[100svh] overflow-hidden pt-20 lg:pt-24"
      style={{ zIndex: 10, backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <img
          src="/images/technician_installation.jpg"
          alt="Technician installing solar panels"
          className="w-full h-full object-cover"
        />
        <div className="vignette" />
      </div>

      {/* Content - Right Side */}
      <div className="relative z-10 min-h-[calc(100svh-5rem)] flex flex-col justify-center items-end pr-6 lg:pr-[6vw] pl-6 lg:pl-[40vw]">
        {/* Headline */}
        <div ref={headlineRef} className="hero-headline-block mb-8 lg:mb-10 text-right">
          <h2 className="headline-xl hero-end-title text-[clamp(32px,6vw,72px)]">
            <span className="end-line block hero-headline-secondary">END-TO-END</span>
            <span className="end-line block hero-headline-secondary">
              <span className="hero-end-energy">ENERGY</span>
              <span className="hero-end-delivery"> DELIVERY</span>
            </span>
          </h2>
        </div>

        {/* Body */}
        <div ref={bodyRef} className="max-w-md lg:max-w-lg text-right mb-8" />

        {/* Service Chips */}
        <div ref={chipsRef} className="hero-chip-row">
          {services.map((service) => (
            <span key={service} className="service-chip chip-cycle">
              {service}
            </span>
          ))}
        </div>
        {/* Bottom Center Statement */}
        <p className="hero-bottom-statement">
          Helping schools transition to solar.
        </p>
        <div className="hero-scroll-cue" aria-hidden="true" />
      </div>
    </section>
  );
}
