import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { ArrowLeft } from 'lucide-react';
import { type ProjectArticle } from '@/data/projects';
import { SiteFooter } from '@/components/SiteFooter';

type Props = {
  article: ProjectArticle;
  basePath?: string;
};

type LeadFormState = {
  location: string;
  studentCount: string;
  powerSource: string;
  budgetRange: string;
  interest: string;
};

const initialLeadForm: LeadFormState = {
  location: '',
  studentCount: '',
  powerSource: '',
  budgetRange: '',
  interest: '',
};

function trackPipelineEvent(event: string, payload: Record<string, string>) {
  try {
    const key = 'shine_pipeline_events';
    const current = localStorage.getItem(key);
    const parsed = current ? JSON.parse(current) : [];
    const next = [
      {
        event,
        payload,
        createdAt: new Date().toISOString(),
      },
      ...parsed,
    ].slice(0, 200);
    localStorage.setItem(key, JSON.stringify(next));
  } catch {
    // Tracking fallback intentionally silent in browsers with storage restrictions.
  }
}

export function ProjectStoryPage({
  article,
  basePath = '/projects',
}: Props) {
  const [form, setForm] = useState<LeadFormState>(initialLeadForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const galleryGridImages = [...article.galleryImages, ...article.galleryImages].slice(0, 6);
  const isSchoolStory = basePath === '/projects';

  const authenticityLabel = useMemo(() => {
    if (!isSchoolStory) return '';
    if (article.timeline.toLowerCase().includes('ongoing')) return 'Verified Ongoing SHINE Deployment';
    return 'Verified SHINE School Transition';
  }, [article.timeline, isSchoolStory]);

  useEffect(() => {
    // Force top-of-page landing on every story entry/change.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [basePath, article.slug]);

  const goHome = () => {
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  const updateForm = (field: keyof LeadFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submitLead = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackPipelineEvent('bring_shine_lead_submitted', {
      storySlug: article.slug,
      ...form,
    });
    setIsSubmitted(true);
    setForm(initialLeadForm);
  };

  const setInterest = (interest: string) => {
    updateForm('interest', interest);
    trackPipelineEvent('story_cta_clicked', {
      storySlug: article.slug,
      cta: interest,
    });
  };

  return (
    <section
      id="project-story"
      className="relative w-full py-20 lg:py-28"
      style={{ zIndex: 80, backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="px-6 lg:px-[6vw]">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors duration-200 mb-8"
          onClick={(e) => {
            e.preventDefault();
            goHome();
          }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </a>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,2fr)_360px] gap-10 xl:gap-12">
          <div className="project-story-main mb-16 xl:mb-0">
            <span className="label-mono text-accent mb-4 block">{article.category}</span>
            <h1 className="font-display font-semibold text-4xl lg:text-6xl text-primary leading-tight mb-6">
              {article.title}
            </h1>

            {isSchoolStory ? (
              <div className="mb-8 rounded-2xl border border-[rgba(244,246,250,0.16)] bg-[rgba(244,246,250,0.04)] px-5 py-4">
                <p className="label-mono text-accent mb-2">School authenticity</p>
                <p className="text-primary font-semibold text-base lg:text-lg mb-1">{authenticityLabel}</p>
                <p className="text-secondary text-sm">{article.location} · {article.timeline}</p>
              </div>
            ) : null}

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-8">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[320px] lg:h-[620px] object-cover"
                />
              </div>
              <div className="grid grid-cols-2 grid-rows-3 gap-3">
                {galleryGridImages.map((image, index) => (
                  <div key={`${article.slug}-gallery-${index}`} className="overflow-hidden rounded-2xl">
                    <img
                      src={image}
                      alt={`${article.title} gallery ${index + 1}`}
                      className="w-full h-[110px] sm:h-[130px] lg:h-[198px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="project-story-meta mb-8">
              <p className="text-secondary text-base lg:text-lg"><strong className="text-primary">Location:</strong> {article.location}</p>
              <p className="text-secondary text-base lg:text-lg"><strong className="text-primary">Timeline:</strong> {article.timeline}</p>
              <p className="text-secondary text-base lg:text-lg"><strong className="text-primary">Outcome:</strong> {article.impact}</p>
            </div>

            <div className="project-story-copy">
              {article.story.map((paragraph, index) => (
                <p key={`${article.slug}-${index}`} className="text-secondary text-lg lg:text-2xl leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {isSchoolStory ? (
            <aside className="xl:sticky xl:top-32 h-fit rounded-2xl border border-[rgba(244,246,250,0.16)] bg-[rgba(11,12,14,0.72)] p-5 lg:p-6">
              <p className="label-mono text-accent mb-2">Booking Counter</p>
              <h2 className="font-display font-semibold text-2xl text-primary mb-2">Bring SHINE to My School</h2>
              <p className="text-secondary text-sm mb-5">Book your solar transition entry point. Every request becomes a deployment pipeline lead.</p>

              <div className="grid grid-cols-1 gap-2 mb-5">
                <button
                  type="button"
                  className="btn-primary w-full justify-center"
                  onClick={() => setInterest('Book Assessment')}
                >
                  Book Assessment
                </button>
                <button
                  type="button"
                  className="btn-outline w-full justify-center"
                  onClick={() => setInterest('Get Cost Estimate')}
                >
                  Get Cost Estimate
                </button>
                <button
                  type="button"
                  className="btn-outline w-full justify-center"
                  onClick={() => setInterest('Talk to SHINE Advisor')}
                >
                  Talk to SHINE Advisor
                </button>
              </div>

              <form className="space-y-3" onSubmit={submitLead}>
                <div>
                  <label htmlFor="lead-location" className="block text-xs uppercase tracking-[0.12em] text-secondary mb-1">Location</label>
                  <input
                    id="lead-location"
                    required
                    value={form.location}
                    onChange={(e) => updateForm('location', e.target.value)}
                    className="w-full rounded-md border border-[rgba(244,246,250,0.22)] bg-[rgba(244,246,250,0.05)] px-3 py-2 text-sm text-primary placeholder:text-secondary/70"
                    placeholder="District / City"
                  />
                </div>
                <div>
                  <label htmlFor="lead-students" className="block text-xs uppercase tracking-[0.12em] text-secondary mb-1">Student count</label>
                  <input
                    id="lead-students"
                    required
                    value={form.studentCount}
                    onChange={(e) => updateForm('studentCount', e.target.value)}
                    className="w-full rounded-md border border-[rgba(244,246,250,0.22)] bg-[rgba(244,246,250,0.05)] px-3 py-2 text-sm text-primary placeholder:text-secondary/70"
                    placeholder="e.g. 850"
                  />
                </div>
                <div>
                  <label htmlFor="lead-power" className="block text-xs uppercase tracking-[0.12em] text-secondary mb-1">Current power source</label>
                  <input
                    id="lead-power"
                    required
                    value={form.powerSource}
                    onChange={(e) => updateForm('powerSource', e.target.value)}
                    className="w-full rounded-md border border-[rgba(244,246,250,0.22)] bg-[rgba(244,246,250,0.05)] px-3 py-2 text-sm text-primary placeholder:text-secondary/70"
                    placeholder="Grid, diesel, mixed, none"
                  />
                </div>
                <div>
                  <label htmlFor="lead-budget" className="block text-xs uppercase tracking-[0.12em] text-secondary mb-1">Budget range</label>
                  <input
                    id="lead-budget"
                    required
                    value={form.budgetRange}
                    onChange={(e) => updateForm('budgetRange', e.target.value)}
                    className="w-full rounded-md border border-[rgba(244,246,250,0.22)] bg-[rgba(244,246,250,0.05)] px-3 py-2 text-sm text-primary placeholder:text-secondary/70"
                    placeholder="USD range"
                  />
                </div>
                <input type="hidden" value={form.interest} readOnly />
                <button type="submit" className="btn-primary w-full justify-center">Submit Request</button>
              </form>

              {isSubmitted ? (
                <p className="text-sm text-accent mt-3">
                  Request captured. SHINE team can now route this into assessment and deployment planning.
                </p>
              ) : null}
            </aside>
          ) : null}
        </div>

        <SiteFooter className="mt-10" />
      </div>
    </section>
  );
}
