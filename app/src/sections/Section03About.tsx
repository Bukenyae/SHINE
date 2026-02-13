import { Building2, Home, Users } from 'lucide-react';

const partners = [
  { name: 'GIZ', url: 'https://www.giz.de/', logoSrc: '/images/giz.png', showName: false },
  { name: 'Omnivoltaic', url: 'https://www.omnivoltaic.com/', logoSrc: '/images/Omnivoltaic.jpeg' },
  { name: 'Innovex', url: 'https://innovex.org/', logoSrc: '/images/Innovex.png', showName: false },
  {
    name: 'Harvard Innovation Labs',
    url: 'https://innovationlabs.harvard.edu/',
    logoSrc: '/images/Harvard Innovation Labs.png',
  },
  { name: 'UNCDF', url: 'https://www.uncdf.org/', logoSrc: '/images/UNCDF.png', showName: false },
  {
    name: 'African Management Institute',
    url: 'https://www.africanmanagers.com/',
    logoSrc: '/images/Africa Management Institute.png',
  },
  { name: 'EnDev', url: 'https://endev.info/', logoSrc: '/images/Endev.jpeg', showName: false },
  {
    name: 'Stiftung Solarenergie',
    url: 'https://stiftung-solarenergie.org/',
    logoSrc: '/images/Stiftung.png',
  },
  { name: 'CREEC', url: 'https://www.creec.or.ug/', logoSrc: '/images/CREEC.jpeg', showName: false },
  { name: 'SoloGrid', url: 'https://www.sologrid.com/', logoSrc: '' },
];

const teamMembers = [
  {
    initial: 'J',
    name: 'Josephine Namusaanya',
    linkedinUrl: 'https://www.linkedin.com/in/josephine-namusaanya/',
    imageSrc: '/images/Josephine.jpeg',
  },
  {
    initial: 'F',
    name: 'Frank Neil Yiga',
    linkedinUrl: 'https://www.linkedin.com/in/frank-neil-yiga/',
    imageSrc: '/images/Frank.jpg',
  },
  {
    initial: 'E',
    name: 'Emmanuel Bukenya',
    linkedinUrl: 'https://www.linkedin.com/in/emmanuel-bukenya/',
    imageSrc: '/images/Emma.jpg',
  },
  {
    initial: 'W',
    name: 'Dr. William Muhairwe',
    linkedinUrl: 'https://www.linkedin.com/',
    imageSrc: '/images/Dr. Williams.jpg',
  },
];

const timelineEntries = [
  {
    year: 2026,
    note: 'Brought SHINE to life-a first-of-its-kind school operating system that merges artificial intelligence with renewable solar power.',
  },
  {
    year: 2025,
    note: 'Grounded our design in reality by partnering with 100+ beta testers to solve critical energy and hardware challenges in the classroom.',
  },
  { year: 2024, note: 'Milestone highlight to be added.' },
  { year: 2023, note: 'Milestone highlight to be added.' },
  { year: 2022, note: 'Milestone highlight to be added.' },
  { year: 2021, note: 'Milestone highlight to be added.' },
  {
    year: 2020,
    note: 'UNCDF RECF grant supported last-mile SHS distribution. Signify Foundation (Netherlands) + Stiftung Solarenergie (Germany) delivered Health Center II & III solar installations as a COVID-19 response across 3 districts and 9 HCs.',
  },
  {
    year: 2019,
    note: 'GIZ ENDEV program scaled SHS distribution across 20 districts around Uganda (2018-2019 phase).',
  },
  {
    year: 2018,
    note: 'GIZ ENDEV rollout continued. ARMPASS Technical Services (UNRA bridge sub-contractor) began electrifying off-grid work offices and staff residences (4 sites, ongoing). Compassion International CDC projects electrified off-grid offices in Mbarara, Isingiro, and Kamwenge.',
  },
  {
    year: 2017,
    note: 'Compassion International CDC projects launched for off-grid office electrification in Mbarara, Isingiro, and Kamwenge (2017-2018).',
  },
  { year: 2016, note: 'Implemented the first Solar Village in Kasozi, Luwero District.' },
  {
    year: 2015,
    note: 'Through the Community Energy Entrepreneurship (CEE) project, we trained 45 youth resellers, sold 500 solar products, and impacted 15,000 people.',
  },
];

const mediaStories = [
  {
    title: 'Harvard Climate Entrepreneurs Circle Feature',
    description: 'Anuel Energy featured by Harvard Innovation Labs and Climate Rising.',
    imageSrc: '/images/062920_LLXGeo_LaunchPR-1200x800-1.jpg',
    articleUrl:
      'https://innovationlabs.harvard.edu/articles/harvard-climate-entrepreneurs-circle-and-climate-rising-podcast',
  },
  {
    title: 'Neil Frank Yiga EMERGES WINNER AMONG THE 1000 AFRICAN ENTREPRENEURS',
    description: 'Featured in Sun Connect.',
    imageSrc: '/images/IMG_0236-scaled.jpg',
    articleUrl:
      'https://sun-connect.org/frank-yiga-ceo-anuel-energy-ltd-about-collaboration-and-competition-between-entrepreneurs/#:~:text=Frank%20Neil%20Yiga%20is%20the,to%20the%20last%20mile%20customers.',
  },
  {
    title: 'Media Story Placeholder',
    description: 'Story details to be added.',
    imageSrc: '',
    articleUrl: '',
  },
  {
    title: 'Media Story Placeholder',
    description: 'Story details to be added.',
    imageSrc: '',
    articleUrl: '',
  },
  {
    title: 'Media Story Placeholder',
    description: 'Story details to be added.',
    imageSrc: '',
    articleUrl: '',
  },
  {
    title: 'Media Story Placeholder',
    description: 'Story details to be added.',
    imageSrc: '',
    articleUrl: '',
  },
];

type Section03AboutProps = {
  onBackHome?: () => void;
};

export function Section03About({ onBackHome }: Section03AboutProps) {
  return (
    <section id="about" className="about-section relative w-full" style={{ zIndex: 70 }}>
      <div className="about-section-back-row">
        <button type="button" className="about-back-home-btn" onClick={onBackHome}>
          {'<--- Back Home'}
        </button>
      </div>

      <div className="about-team-statement-row">
        <div className="about-team-statement-copy">
          <p className="label-mono">About Us</p>
          <h2 className="about-title">
            We believe every community should have the power to grow. That’s why we build smart,
            solar-driven tools designed to help people thrive independently.
          </h2>
          <h3 className="about-subtitle">Team</h3>
          <p className="about-description about-team-statement-description">
            With over 30 years of experience, we have seen the energy sector from every angle,
            from the research labs of CREEC and the global scale of the World Bank to the front
            lines of private sector energy. We have spent the last 10 years building Anuel Energy
            and investing in the region&apos;s most promising solar startups. This is not just work
            to us; it is a decade of learning exactly what breaks and what sticks. We have taken
            those hard-earned insights and baked them into a combined AI and solar product stack
            that is built for one thing: making communities truly resilient.
          </p>
        </div>
      </div>

      <div className="about-shell">
        <div className="about-content-col">
          <div className="about-hero-wrap">
            <figure className="about-hero-frame">
              <img
                src="/images/About%20Us%20Hero.jpg"
                alt="About us hero image"
                className="about-hero-image"
                loading="lazy"
              />
            </figure>
          </div>

          <div className="about-intro-card">
            <div className="about-copy">
              <p className="about-description">
                <strong>Our main product is SHINE:</strong><br />
                A school operating system built to run a modern, AI-powered school when the power
                grid is unreliable. By merging smart management software with built-in solar
                sustainability, we are making sure that a school's ability to teach is not
                dictated by the local utility company.
              </p>
              <figure className="about-inline-image-wrap">
                <img
                  src="/images/Frank%20Pressentation.jpg"
                  alt="Frank presenting"
                  className="about-inline-image"
                  loading="lazy"
                />
              </figure>
              <p className="about-description">
                <strong>Leaving no one behind</strong><br />
                Of course, software only works if the lights are on. That is why we are still on
                the ground every day, installing custom solar setups for the entire community. We
                do not believe in one size fits all. Whether it is a family home, a school
                community, a local clinic, or a neighborhood church, we design and install the
                specific hardware each building needs to stay powered. When the whole village has
                energy, the whole village grows.
              </p>
              <div className="about-achievements" aria-label="Company achievements">
                <span className="about-badge about-badge-households">
                  <span className="about-badge-top">
                    <Home className="about-badge-icon" aria-hidden="true" />
                    <span className="about-badge-count">7,500</span>
                  </span>
                  <span className="about-badge-label">Household Installations</span>
                </span>
                <span className="about-badge about-badge-institutions">
                  <span className="about-badge-top">
                    <Building2 className="about-badge-icon" aria-hidden="true" />
                    <span className="about-badge-count">30+</span>
                  </span>
                  <span className="about-badge-label">Institutions</span>
                </span>
                <span className="about-badge about-badge-people">
                  <span className="about-badge-top">
                    <Users className="about-badge-icon" aria-hidden="true" />
                    <span className="about-badge-count">75,000</span>
                  </span>
                  <span className="about-badge-label">People Impacted</span>
                </span>
              </div>
              <p className="about-description">
                <strong>Where it all started</strong><br />
                This all traces back to 2016, when we launched the Solar Village concept. At the
                time, we saw that isolated donations were not moving the needle on poverty. We
                realized that to truly change things, we had to saturate entire geographic areas
                with clean energy all at once. That shift, from providing a few lights to total
                energy independence, is what laid the foundation for everything we are building
                today.
              </p>
            </div>
          </div>

          <section className="about-media-section" aria-label="Media coverage">
            <h3 className="about-subtitle">Media</h3>
            <div className="about-media-grid">
              {mediaStories.map((story, index) =>
                story.articleUrl ? (
                  <a
                    key={`${story.title}-${index}`}
                    href={story.articleUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="about-media-card about-media-card-link"
                    aria-label={`${story.title} article`}
                  >
                    <div className="about-media-image-wrap">
                      <img src={story.imageSrc} alt={story.title} className="about-media-image" loading="lazy" />
                    </div>
                    <div className="about-media-copy">
                      <h4 className="about-media-title">{story.title}</h4>
                      <p className="about-media-description">{story.description}</p>
                    </div>
                  </a>
                ) : (
                  <article key={`${story.title}-${index}`} className="about-media-card about-media-card-placeholder">
                    <div className="about-media-image-wrap about-media-image-placeholder">
                      <span>Coming Soon</span>
                    </div>
                    <div className="about-media-copy">
                      <h4 className="about-media-title">{story.title}</h4>
                      <p className="about-media-description">{story.description}</p>
                    </div>
                  </article>
                ),
              )}
            </div>
          </section>
        </div>

        <aside className="about-timeline-wrap" aria-label="Company story timeline">
          <section className="about-team-rail" aria-label="Team portraits">
            <div className="about-team-grid">
              {teamMembers.map((member) => (
                <a
                  key={member.name}
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="about-team-card-link"
                  aria-label={`${member.name} LinkedIn profile`}
                >
                  <figure className="about-team-card">
                    <div
                      className="about-team-photo"
                      role="img"
                      aria-label={
                        member.imageSrc ? `${member.name} portrait` : `${member.name} portrait placeholder`
                      }
                    >
                      {member.imageSrc ? (
                        <img
                          src={member.imageSrc}
                          alt={member.name}
                          className="about-team-image"
                          loading="lazy"
                        />
                      ) : (
                        <span>{member.initial}</span>
                      )}
                    </div>
                    <figcaption className="about-team-name-row">
                      <span className="about-team-name">{member.name}</span>
                      <img
                        src="/images/in-logo/LI-In-Bug.png"
                        alt="LinkedIn"
                        className="about-team-linkedin-logo"
                        loading="lazy"
                      />
                    </figcaption>
                  </figure>
                </a>
              ))}
            </div>
          </section>

          <div className="about-timeline-head">
            <h3>Our Story. 2015 TO 2026</h3>
          </div>

          <div className="about-timeline-col">
            <div className="about-timeline">
              {timelineEntries.map((entry) => (
                <article key={entry.year} className="about-timeline-row">
                  <time className="about-timeline-year">{entry.year}</time>
                  <div className="about-timeline-marker" aria-hidden="true">
                    <span className="about-timeline-dot" />
                  </div>
                  <div className="about-timeline-note">{entry.note}</div>
                </article>
              ))}
            </div>
          </div>

          <section className="about-partners-right" aria-label="Our partners">
            <h3 className="about-subtitle">Proud of the company we keep</h3>
            <div className="about-partners-grid-right">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noreferrer"
                  className="about-partner-card-right"
                  title={partner.name}
                >
                  <span
                    className="about-partner-favicon"
                    aria-hidden="true"
                  >
                    {partner.logoSrc ? (
                      <img src={partner.logoSrc} alt={`${partner.name} logo`} className="about-partner-logo" loading="lazy" />
                    ) : (
                      <span className="about-partner-fallback">SG</span>
                    )}
                  </span>
                  {partner.showName === false ? null : (
                    <span className="about-partner-name-right">{partner.name}</span>
                  )}
                </a>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </section>
  );
}
