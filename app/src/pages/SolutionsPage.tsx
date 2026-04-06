import { useEffect } from 'react';

import { SiteFooter } from '@/components/SiteFooter';

const schoolProblems = [
  'Unreliable grid power interrupts lessons, lighting, labs, and school administration.',
  'Diesel generators are expensive to run and difficult to budget for over time.',
  'Frequent outages create maintenance pressure and reduce confidence in daily operations.',
  'Limited power capacity makes it harder for schools to add classrooms, boarding services, or digital tools.',
];

const solarBenefits = [
  {
    title: 'Reliable Power',
    text: 'Keep classrooms, offices, lighting, and critical equipment running more consistently throughout the day.',
  },
  {
    title: 'Lower Costs Over Time',
    text: 'Reduce dependence on diesel and unstable utility spend with a system designed for long-term savings.',
  },
  {
    title: 'Built to Grow',
    text: 'Start with what the school needs now, then expand capacity as enrollment, facilities, and operations grow.',
  },
];

const energyStages = [
  {
    name: 'Starter',
    text: 'Power core lighting, administration, and essential daytime learning spaces.',
  },
  {
    name: 'Expanded',
    text: 'Add more classrooms, staff operations, and selected boarding or lab loads.',
  },
  {
    name: 'Advanced',
    text: 'Support broader campus operations with stronger storage and better load coverage.',
  },
  {
    name: 'Future-ready',
    text: 'Prepare the school for larger infrastructure growth and additional digital services.',
  },
];

const paymentPoints = [
  'Structured plans aligned to school cash flow and budget cycles.',
  'A practical path to installation without requiring a full upfront payment.',
  'Room to phase capacity over time instead of overbuilding on day one.',
];

const hoverCardClass =
  'group rounded-3xl bg-white/70 p-8 shadow-[0_12px_40px_-30px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1';

export function SolutionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div id="solutions" className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,185,66,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.06),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Solar for schools</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Powering schools with reliable, independent energy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Solar systems designed for schools, reducing costs, improving reliability, and supporting better learning environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#problem"
                className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Get started with solar
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Why energy matters</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Why energy matters for schools
            </h2>
            <div className="mt-8 space-y-4">
              {schoolProblems.map((point) => (
                <div key={point} className="flex gap-4 rounded-2xl border border-slate-200 bg-transparent px-5 py-4">
                  <div className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-[#F5B942]" />
                  <p className="text-base leading-7 text-slate-600">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solution">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">The solution</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              A solar system built for schools
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {solarBenefits.map((item) => (
              <div key={item.title} className={hoverCardClass}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 transition-colors duration-300 group-hover:text-[#D89216]">
                  Solar benefit
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-[#B87400]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Energy ladder</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Designed to grow with your school
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {energyStages.map((stage, index) => (
              <div
                key={stage.name}
                className="group relative rounded-3xl bg-transparent p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_35px_-30px_rgba(15,23,42,0.18)]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white transition-colors duration-300 group-hover:bg-[#F5B942] group-hover:text-slate-950">
                    {index + 1}
                  </div>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-[#B87400]">
                  {stage.name}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Payments</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Flexible payment designed for schools
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Solar should be practical to adopt. Structured payment options make it easier for schools to move forward with a system sized to their real needs.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.2)]">
              <div className="space-y-5">
                {paymentPoints.map((point) => (
                  <div key={point} className="flex gap-4">
                    <div className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-[#F5B942]" />
                    <p className="text-base leading-7 text-slate-600">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Proof</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Already supporting schools today
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Our current school deployment stories already show how reliable solar can support day-to-day operations across different campus needs.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.16)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Current proof</p>
                <div className="mt-3 text-6xl font-semibold tracking-tight text-slate-950">9</div>
                <p className="mt-3 text-base leading-7 text-slate-600">school deployment stories currently highlighted across the site.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.16)]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">More than energy</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              More than energy
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Energy is the first layer. Over time, schools can build on that foundation with additional tools and services that make campus operations easier and more resilient.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Next step</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Start with energy. Grow from there.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Begin with a solar system designed for the realities of school operations, then expand with confidence as your campus grows.
              </p>
              <div className="mt-8">
                <a
                  href="#problem"
                  className="inline-flex rounded-2xl bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  Get started with solar
                </a>
              </div>
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
