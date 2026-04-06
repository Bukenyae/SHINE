import { useEffect } from 'react';

import { SiteFooter } from '@/components/SiteFooter';

const audienceCards = [
  {
    title: 'For Schools & Teachers',
    eyebrow: 'Teach smarter. Manage easier.',
    points: [
      'Upload lessons, notes, videos, and teaching materials in one place.',
      'Let AI organize content into themes, topics, chapters, quizzes, and recall cards.',
      'Manage checklists, reports, vendors, and school operations with less admin work.',
    ],
  },
  {
    title: 'For Students',
    eyebrow: 'Learn in a way that actually sticks.',
    points: [
      'Study with clear concept notes, recall cards, and interactive quizzes.',
      'Access materials broken into smaller, easier-to-understand learning blocks.',
      'Build stronger understanding through daily practice and repetition.',
    ],
  },
  {
    title: 'For Parents',
    eyebrow: 'Stay connected. Stay in control.',
    points: [
      'Track learning progress and stay updated on school activity.',
      'Pay fees more easily through one trusted platform.',
      'Buy essential school-related items for your child without scattered systems.',
    ],
  },
  {
    title: 'For Local Businesses',
    eyebrow: 'Reach your school community directly.',
    points: [
      'Supply schools with goods and services through a familiar digital channel.',
      'Offer useful products to students and parents inside the same ecosystem.',
      'Receive and manage payments more smoothly.',
    ],
  },
];

const featureRows = [
  {
    label: 'Learning',
    title: 'From teaching materials to better learning outcomes.',
    text: 'Teachers upload books, PDFs, notes, scripts, and videos. SchShine helps turn them into organized learning paths with concept notes, recall cards, and quizzes that are easier for students to absorb.',
  },
  {
    label: 'Payments',
    title: 'A simpler way to handle school-related payments.',
    text: 'Families can pay school fees more easily. Schools can manage collections and vendor payments more cleanly. Over time, the same platform can support recurring obligations, including infrastructure-related payments like solar repayment.',
  },
  {
    label: 'Commerce',
    title: 'One connected place for school and family needs.',
    text: 'Schools can procure supplies from trusted vendors. Students and parents can access a shop experience designed around study needs, daily life, and school community essentials.',
  },
  {
    label: 'Communication',
    title: 'A shared space for the whole school community.',
    text: 'Students, teachers, parents, and schools stay connected through messaging and updates, reducing fragmentation and making the school ecosystem feel more coordinated.',
  },
];

const differentiators = [
  'One connected platform instead of many disconnected tools.',
  'AI-assisted learning that turns teaching materials into digestible study formats.',
  'Built to support both school operations and family needs.',
  'Designed to grow with school communities over time.',
];

export function SolutionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div id="solutions" className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-36">
          <div className="max-w-4xl">
            <div className="text-sm font-medium text-slate-600">
              One place for learning, payments, shopping, and school operations
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              The digital home for everyday school life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              SchShine brings schools, teachers, students, parents, and local businesses into one connected platform, making it easier to teach, learn, pay, shop, and stay in sync.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#who-its-for"
                className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Explore the platform
              </a>
              <a
                href="#how-it-works"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Built around the real life of a school community.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              SchShine is designed to support the daily movement of learning, money, communication, and supplies across the people who make school life work.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {featureRows.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-transparent p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-28px_rgba(15,23,42,0.28)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="who-its-for">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Who it's for</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Different users. One connected experience.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              SchShine serves the full school ecosystem, with tools and experiences tailored to each group while keeping everyone connected inside the same platform.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-transparent p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_-28px_rgba(15,23,42,0.28)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{card.eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
                <div className="mt-6 space-y-4">
                  {card.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <div className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-slate-950" />
                      <p className="text-base leading-7 text-slate-600">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-schshine" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Why SchShine</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Because school life should not feel scattered.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Learning, payments, communication, and shopping often live in too many disconnected places. SchShine brings them together into one system that feels simpler for schools, more useful for families, and more connected for the wider community.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold tracking-tight">What makes SchShine different</h3>
                <div className="mt-6 space-y-5">
                  {differentiators.map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-white" />
                      <p className="text-base leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-sm">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Closing</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                One community. One system.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                SchShine helps schools run more smoothly, helps students learn more clearly, helps parents stay connected, and helps local businesses participate more directly in school life.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                It is a simpler, more connected way to power the everyday life of a school community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SiteFooter className="mt-4" />
        </div>
      </div>
    </div>
  );
}
