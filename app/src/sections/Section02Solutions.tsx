export function Section02Solutions() {
  return (
    <section
      id="solutions"
      className="relative w-full py-20 lg:py-28"
      style={{ zIndex: 20, backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="px-6 lg:px-[6vw]">
        <div className="flex flex-col items-center text-center">
          <h2 className="contact-lead mb-6">
            Solutions
          </h2>
          <p className="subtitle text-secondary mb-10 solutions-lead w-full">
            Complete control over your energy future. Deploy, track usage, and
            plan for future needs — all with a few taps on your mobile.
          </p>
          <div className="solution-image">
            <img
              src="/images/Mobile.jpg"
              alt="SHINE mobile screen"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
