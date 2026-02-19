export type ListingSignals = {
  status: string;
  scale: string;
  reliability: string;
};

export type SchoolCardSignals = {
  district: string;
  buildings: number;
  students: number;
  solarTransitionPct: number;
  hasInternet: boolean;
};

export type SchoolMetrics = {
  resilienceScore: number;
  storage: { kwh: number; autonomyHours: number; chemistry?: string };
  savings: { generatorReductionPct?: number; annualDieselSavingsUsd?: number };
  connectivity: { enabled: boolean; provider?: string; uptimePct?: number };
  monitoring?: { enabled: boolean; features?: string[] };
  carbon?: { tonsCo2AvoidedPerYear?: number };
  deployment?: { durationWeeks?: number };
  students?: { count?: number };
};

export type PrimaryMetricBadge = {
  key: 'resilience' | 'storage' | 'savings' | 'connectivity';
  value: string;
  tooltip: string;
};

export type ProjectArticle = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  galleryImages: [string, string, string];
  location: string;
  timeline: string;
  impact: string;
  listingSignals?: ListingSignals;
  metrics?: SchoolMetrics;
  story: string[];
};

export const projectArticles: ProjectArticle[] = [
  {
    id: 1,
    slug: 'st-kizito-primary-247-power',
    title: 'St. Kizito Primary: From blackout-prone to 24/7 power',
    excerpt:
      'Assessment to commissioning in 6 weeks, delivering reliable power for classrooms, labs, and staff housing.',
    category: 'Project',
    image: '/images/insights_thumb_01.jpg',
    galleryImages: [
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_01.jpg',
    ],
    location: 'Kampala, Uganda',
    timeline: '6 weeks',
    impact: 'Reliable power for classrooms, labs, and staff housing',
    metrics: {
      resilienceScore: 92,
      storage: { kwh: 132, autonomyHours: 9, chemistry: 'Lithium' },
      savings: { generatorReductionPct: 74, annualDieselSavingsUsd: 18200 },
      connectivity: { enabled: true, provider: 'Starlink', uptimePct: 99 },
      monitoring: { enabled: true, features: ['AI fault alerts', 'Load forecasting', 'Remote diagnostics'] },
      carbon: { tonsCo2AvoidedPerYear: 49 },
      deployment: { durationWeeks: 6 },
      students: { count: 820 },
    },
    story: [
      'St. Kizito Primary relied on inconsistent grid supply and diesel backup, which disrupted class schedules and increased operating cost. The school requested a system that could stabilize daily operations and reduce fuel spend.',
      'Shine executed a full site assessment, load mapping, and phased installation plan. The team sized generation and storage around peak school usage to keep classrooms and computer labs online during outages.',
      'After commissioning, the school shifted from reactive power management to predictable service. Administrators now use the mobile dashboard to monitor usage, track performance, and plan maintenance windows without interrupting instruction.',
    ],
  },
  {
    id: 2,
    slug: 'greenhill-academy-generator-reduction',
    title: 'Greenhill Academy: Cutting generator spend by 68%',
    excerpt:
      'A hybrid system with smart load management kept the campus online during peak demand.',
    category: 'Project',
    image: '/images/insights_thumb_02.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_02.jpg',
    ],
    location: 'Wakiso, Uganda',
    timeline: '8 weeks',
    impact: 'Generator fuel cost reduced by 68% in the first term',
    metrics: {
      resilienceScore: 90,
      storage: { kwh: 148, autonomyHours: 8, chemistry: 'Lithium' },
      savings: { generatorReductionPct: 68, annualDieselSavingsUsd: 21400 },
      connectivity: { enabled: true, provider: 'MTN Fiber', uptimePct: 98 },
      monitoring: { enabled: true, features: ['Threshold alerts', 'Usage trend AI', 'Monthly risk reports'] },
      carbon: { tonsCo2AvoidedPerYear: 57 },
      deployment: { durationWeeks: 8 },
      students: { count: 960 },
    },
    story: [
      'Greenhill Academy faced high generator costs due to frequent evening usage and poor load prioritization. The objective was to reduce diesel dependence while keeping boarding and security systems stable.',
      'Shine deployed a hybrid architecture with load controls that prioritize critical facilities first. The installation sequence minimized disruption to campus routines and exams.',
      'The result was a measurable drop in generator runtime and cost. School operations gained better continuity, and facilities teams can now track load behavior from a single mobile view.',
    ],
  },
  {
    id: 3,
    slug: 'lakeview-secondary-maintenance-uptime',
    title: 'Lakeview Secondary: Maintenance that prevents downtime',
    excerpt:
      'Proactive monitoring and quarterly service visits reduced outages to near-zero.',
    category: 'Project',
    image: '/images/insights_thumb_03.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
    ],
    location: 'Mukono, Uganda',
    timeline: 'Ongoing service contract',
    impact: 'Outages reduced to near-zero through preventive service',
    metrics: {
      resilienceScore: 88,
      storage: { kwh: 116, autonomyHours: 7, chemistry: 'Lithium' },
      savings: { annualDieselSavingsUsd: 12600 },
      connectivity: { enabled: true, provider: 'Airtel Business', uptimePct: 98 },
      monitoring: { enabled: true, features: ['Predictive maintenance', 'AI anomaly detection', 'Incident routing'] },
      carbon: { tonsCo2AvoidedPerYear: 38 },
      deployment: { durationWeeks: 7 },
      students: { count: 700 },
    },
    story: [
      'Lakeview Secondary had a functioning system but inconsistent maintenance, causing avoidable interruptions. The school needed a disciplined support model rather than ad-hoc repairs.',
      'Shine implemented remote monitoring, alert thresholds, and scheduled preventive visits. Maintenance tasks were standardized and tracked through the same workflow used for installation projects.',
      'With predictable servicing, the school now avoids sudden failures during high-demand periods. Staff can review maintenance history and upcoming actions directly in the app.',
    ],
  },
  {
    id: 4,
    slug: 'mirembe-college-storage-uptime',
    title: 'Mirembe College: Storage sized for real-world uptime',
    excerpt:
      'Right-sized batteries secured overnight power for dorms and study halls.',
    category: 'Project',
    image: '/images/insights_thumb_01.jpg',
    galleryImages: [
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_01.jpg',
    ],
    location: 'Jinja, Uganda',
    timeline: '5 weeks',
    impact: 'Overnight continuity for dorms and study halls',
    metrics: {
      resilienceScore: 89,
      storage: { kwh: 156, autonomyHours: 10, chemistry: 'Lithium' },
      savings: { generatorReductionPct: 61, annualDieselSavingsUsd: 16400 },
      connectivity: { enabled: true, provider: 'Roke', uptimePct: 97 },
      monitoring: { enabled: true, features: ['Battery health AI', 'Forecast models', 'Remote uptime board'] },
      carbon: { tonsCo2AvoidedPerYear: 53 },
      deployment: { durationWeeks: 5 },
      students: { count: 890 },
    },
    story: [
      'Mirembe College required stronger overnight reliability for boarding facilities and evening study sessions. Previous storage assumptions did not match real usage patterns.',
      'Shine re-sized battery capacity using measured load profiles and future growth assumptions. The design balanced resilience targets with practical cost control.',
      'The updated system now supports key nighttime loads consistently. College leadership also gained better forecasting for future expansion using operational data from the dashboard.',
    ],
  },
  {
    id: 5,
    slug: 'kampala-heights-grid-tied-upgrade',
    title: 'Kampala Heights: A grid-tied upgrade done in 10 days',
    excerpt:
      'Fast installation with minimal disruption and measurable savings in month one.',
    category: 'Project',
    image: '/images/insights_thumb_02.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_02.jpg',
    ],
    location: 'Kampala, Uganda',
    timeline: '10 days',
    impact: 'Month-one savings with minimal campus disruption',
    metrics: {
      resilienceScore: 85,
      storage: { kwh: 102, autonomyHours: 6, chemistry: 'Lithium' },
      savings: { generatorReductionPct: 52, annualDieselSavingsUsd: 11900 },
      connectivity: { enabled: true, provider: 'MTN Fiber', uptimePct: 98 },
      monitoring: { enabled: true, features: ['Install QA telemetry', 'Live load map'] },
      carbon: { tonsCo2AvoidedPerYear: 34 },
      deployment: { durationWeeks: 2 },
      students: { count: 640 },
    },
    story: [
      'Kampala Heights wanted to modernize quickly without pausing normal operations. The schedule was tight, so execution quality and sequencing were critical.',
      'Shine planned installation windows around class and administration cycles. The team completed procurement, deployment, and commissioning in a compressed timeline.',
      'The school achieved immediate savings and improved power stability without major interruptions. The rapid rollout became a model for subsequent campus upgrades.',
    ],
  },
  {
    id: 6,
    slug: 'northgate-school-remote-monitoring',
    title: 'Northgate School: Remote monitoring, local response',
    excerpt:
      'Automated alerts cut response time and simplified monthly reporting.',
    category: 'Project',
    image: '/images/insights_thumb_03.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
    ],
    location: 'Entebbe, Uganda',
    timeline: '4 weeks + ongoing support',
    impact: 'Faster incident response and cleaner reporting workflows',
    metrics: {
      resilienceScore: 86,
      storage: { kwh: 94, autonomyHours: 5, chemistry: 'Lithium' },
      savings: { annualDieselSavingsUsd: 9800 },
      connectivity: { enabled: true, provider: 'Airtel Business', uptimePct: 97 },
      monitoring: { enabled: true, features: ['Auto incident alerts', 'Remote ticketing', 'Monthly reliability AI'] },
      carbon: { tonsCo2AvoidedPerYear: 29 },
      deployment: { durationWeeks: 4 },
      students: { count: 510 },
    },
    story: [
      'Northgate School needed faster issue detection and better reporting for leadership reviews. Manual checks made it difficult to identify faults early.',
      'Shine configured automated alerts and response workflows tied to local field teams. Data collection and reporting were standardized into a monthly cadence.',
      'Response times improved, and reporting quality became consistent across facilities. Administrators now have clearer visibility into performance and maintenance status.',
    ],
  },
  {
    id: 7,
    slug: 'sunrise-academy-resilience-upgrade',
    title: 'Sunrise Academy: Resilience upgrade for exam seasons',
    excerpt:
      'Targeted backup design kept labs and lighting stable during high-stakes exam weeks.',
    category: 'Project',
    image: '/images/insights_thumb_01.jpg',
    galleryImages: [
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_01.jpg',
    ],
    location: 'Kampala, Uganda',
    timeline: '5 weeks',
    impact: 'Reliable exam-period power with fewer disruptions',
    metrics: {
      resilienceScore: 87,
      storage: { kwh: 128, autonomyHours: 8, chemistry: 'Lithium' },
      savings: { generatorReductionPct: 57, annualDieselSavingsUsd: 14200 },
      connectivity: { enabled: false },
      monitoring: { enabled: true, features: ['Critical load priority AI', 'Exam season risk alerts'] },
      carbon: { tonsCo2AvoidedPerYear: 41 },
      deployment: { durationWeeks: 5 },
      students: { count: 760 },
    },
    story: [
      'Sunrise Academy experienced repeated disruptions during evening revision and exam preparation. Leadership needed a power setup focused on continuity during critical periods rather than blanket overbuild.',
      'Shine mapped priority circuits and staged deployment to protect labs, classroom lighting, and admin systems first. The rollout was timed around school schedules to avoid interrupting lessons.',
      'The academy now operates with stronger reliability during peak academic windows. Staff monitor uptime and service events through a single mobile workflow.',
    ],
  },
  {
    id: 8,
    slug: 'riverbend-prep-load-optimization',
    title: 'Riverbend Prep: Load optimization that cut waste',
    excerpt:
      'Usage profiling and control rules reduced avoidable daytime consumption.',
    category: 'Project',
    image: '/images/insights_thumb_02.jpg',
    galleryImages: [
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
    ],
    location: 'Mukono, Uganda',
    timeline: '4 weeks',
    impact: 'Lower daily energy waste and clearer usage visibility',
    metrics: {
      resilienceScore: 82,
      storage: { kwh: 84, autonomyHours: 5, chemistry: 'Lithium' },
      savings: { generatorReductionPct: 44, annualDieselSavingsUsd: 8600 },
      connectivity: { enabled: false },
      monitoring: { enabled: true, features: ['Load baseline AI', 'Policy compliance alerts'] },
      carbon: { tonsCo2AvoidedPerYear: 23 },
      deployment: { durationWeeks: 4 },
      students: { count: 480 },
    },
    story: [
      'Riverbend Prep had sufficient generation but inconsistent load behavior that drove unnecessary consumption. The objective was to reduce waste without affecting teaching quality.',
      'Shine introduced usage baselines, priority schedules, and simple control policies for high-draw systems. The school team received a clear operating playbook tied to the app dashboard.',
      'After optimization, administrators gained better control over when and how energy was consumed. The school now plans upgrades with measured data instead of guesswork.',
    ],
  },
  {
    id: 9,
    slug: 'hillside-secondary-campus-efficiency',
    title: 'Hillside Secondary: Campus efficiency with phased rollout',
    excerpt:
      'A phased upgrade improved power quality while protecting ongoing school operations.',
    category: 'Project',
    image: '/images/insights_thumb_03.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
    ],
    location: 'Wakiso, Uganda',
    timeline: '7 weeks',
    impact: 'Improved power quality and smoother campus operations',
    metrics: {
      resilienceScore: 88,
      storage: { kwh: 138, autonomyHours: 7, chemistry: 'Lithium' },
      savings: { generatorReductionPct: 59, annualDieselSavingsUsd: 17100 },
      connectivity: { enabled: true, provider: 'Starlink', uptimePct: 99 },
      monitoring: { enabled: true, features: ['Phased rollout intelligence', 'Power quality analytics'] },
      carbon: { tonsCo2AvoidedPerYear: 46 },
      deployment: { durationWeeks: 7 },
      students: { count: 840 },
    },
    story: [
      'Hillside Secondary needed better power quality across classrooms and boarding blocks but could not pause campus activity. The project required sequencing that worked with daily operations.',
      'Shine split implementation into practical phases with clear handover checkpoints. Critical loads were stabilized first, then expanded to broader campus systems.',
      'The school now runs with fewer power-related interruptions and stronger operational predictability. Facilities teams use project history and live metrics to guide maintenance decisions.',
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projectArticles.find((article) => article.slug === slug);
}

export const supplierArticles: ProjectArticle[] = [
  {
    id: 1,
    slug: 'aurora-solar-modules',
    title: 'Aurora Solar: Modules engineered for school rooftops',
    excerpt:
      'High-efficiency panels paired with long-life warranties for campus durability.',
    category: 'Supplier',
    image: '/images/insights_thumb_01.jpg',
    galleryImages: [
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_01.jpg',
    ],
    location: 'Kampala, Uganda',
    timeline: 'Ongoing supply partner',
    impact: 'Higher output per roof area across deployments',
    story: [
      'Aurora Solar supplies the core PV modules used across school installations. The focus is on durability and predictable output in high-heat conditions.',
      'Shine works with Aurora on panel sizing and batch testing before deployment, ensuring installations are consistent across campuses.',
      'The partnership helps schools get reliable performance without frequent replacements or unexpected downtime.',
    ],
  },
  {
    id: 2,
    slug: 'gridline-inverters',
    title: 'Gridline Inverters: Stable conversion for mixed loads',
    excerpt:
      'Inverters tuned for classrooms, labs, and dormitory usage profiles.',
    category: 'Supplier',
    image: '/images/insights_thumb_02.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_02.jpg',
    ],
    location: 'Wakiso, Uganda',
    timeline: 'Multi-year partnership',
    impact: 'Cleaner power delivery and reduced equipment stress',
    story: [
      'Gridline provides inverter systems built for fluctuating school load patterns, including lab equipment and evening boarding demand.',
      'Shine integrates monitoring and alert thresholds to catch anomalies early and prevent downstream equipment issues.',
      'The result is more stable power conversion and fewer service interruptions.',
    ],
  },
  {
    id: 3,
    slug: 'lumin-battery-storage',
    title: 'Lumin Storage: Battery systems sized for overnight needs',
    excerpt:
      'Storage configurations that align with real boarding schedules.',
    category: 'Supplier',
    image: '/images/insights_thumb_03.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
    ],
    location: 'Mukono, Uganda',
    timeline: 'Ongoing supply partner',
    impact: 'Improved nighttime continuity for dorms and study halls',
    story: [
      'Lumin Storage supplies modular battery units that scale with school size and overnight load requirements.',
      'Shine pairs storage capacity with usage profiles to avoid overbuild and reduce cost per campus.',
      'Schools gain consistent overnight power without excessive maintenance overhead.',
    ],
  },
  {
    id: 4,
    slug: 'terra-mounting',
    title: 'Terra Mounting: Rapid installs with roof-safe hardware',
    excerpt:
      'Mounting systems designed to reduce roof penetration and speeds installs.',
    category: 'Supplier',
    image: '/images/insights_thumb_01.jpg',
    galleryImages: [
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_01.jpg',
    ],
    location: 'Jinja, Uganda',
    timeline: 'Ongoing supply partner',
    impact: 'Faster installs with fewer structural risks',
    story: [
      'Terra Mounting provides standardized rails and fasteners that shorten installation time without compromising safety.',
      'Shine uses these systems to keep deployment schedules tight, particularly during term time.',
      'This improves project predictability and reduces on-site disruption.',
    ],
  },
  {
    id: 5,
    slug: 'flux-monitoring',
    title: 'Flux Monitoring: Sensors that power real-time alerts',
    excerpt:
      'Telemetry hardware that feeds the SHINE dashboard.',
    category: 'Supplier',
    image: '/images/insights_thumb_02.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_02.jpg',
    ],
    location: 'Kampala, Uganda',
    timeline: 'Ongoing supply partner',
    impact: 'Faster fault detection and reporting accuracy',
    story: [
      'Flux Monitoring supplies sensors that enable automatic alerts and health status updates.',
      'Shine integrates this data into the app so school teams can monitor performance without manual checks.',
      'Reporting quality improves, and issues are detected earlier.',
    ],
  },
  {
    id: 6,
    slug: 'volt-safety',
    title: 'Volt Safety: Protection hardware for safer campuses',
    excerpt:
      'Circuit protection and grounding kits for education sites.',
    category: 'Supplier',
    image: '/images/insights_thumb_03.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
    ],
    location: 'Entebbe, Uganda',
    timeline: 'Ongoing supply partner',
    impact: 'Reduced electrical incidents and safer maintenance',
    story: [
      'Volt Safety provides protective equipment and grounding systems tailored for school environments.',
      'Shine bundles these components into every installation to meet safety standards consistently.',
      'The partnership reduces risk and makes maintenance safer for on-site teams.',
    ],
  },
  {
    id: 7,
    slug: 'crest-cabling',
    title: 'Crest Cabling: Efficient wiring for complex campuses',
    excerpt:
      'Cable systems optimized for multi-building layouts.',
    category: 'Supplier',
    image: '/images/insights_thumb_01.jpg',
    galleryImages: [
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_01.jpg',
    ],
    location: 'Wakiso, Uganda',
    timeline: 'Ongoing supply partner',
    impact: 'Cleaner installs across larger campuses',
    story: [
      'Crest Cabling supports complex campus layouts with standardized run lengths and labeling.',
      'Shine uses this to simplify future maintenance and reduce installation complexity.',
      'The result is a cleaner, more reliable wiring system across school sites.',
    ],
  },
  {
    id: 8,
    slug: 'helios-lighting',
    title: 'Helios Lighting: LED retrofits for efficiency',
    excerpt:
      'Low-draw lighting retrofits that extend storage capacity.',
    category: 'Supplier',
    image: '/images/insights_thumb_02.jpg',
    galleryImages: [
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
    ],
    location: 'Mukono, Uganda',
    timeline: 'Ongoing supply partner',
    impact: 'Lower consumption and longer battery runtime',
    story: [
      'Helios Lighting provides efficient LED fixtures that reduce baseline campus consumption.',
      'Shine pairs lighting upgrades with storage planning to extend overnight runtime.',
      'Schools see better illumination and lower energy draw.',
    ],
  },
  {
    id: 9,
    slug: 'anchor-structures',
    title: 'Anchor Structures: Solar carports for shared spaces',
    excerpt:
      'Structural systems that double as shaded campus areas.',
    category: 'Supplier',
    image: '/images/insights_thumb_03.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
    ],
    location: 'Kampala, Uganda',
    timeline: 'Ongoing supply partner',
    impact: 'Added generation with multi-use campus space',
    story: [
      'Anchor Structures enables solar carport installations where rooftops are limited.',
      'Shine deploys these structures to add capacity and create shaded campus zones.',
      'Schools gain both energy and functional outdoor space.',
    ],
  },
];

export const financierArticles: ProjectArticle[] = [
  {
    id: 1,
    slug: 'rise-credit-union',
    title: 'Rise Credit Union: Term financing for school upgrades',
    excerpt:
      'Affordable term loans structured around predictable tuition cycles.',
    category: 'Financier',
    image: '/images/insights_thumb_01.jpg',
    galleryImages: [
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_01.jpg',
    ],
    location: 'Kampala, Uganda',
    timeline: 'Ongoing finance partner',
    impact: 'Expanded access to financing for mid-sized schools',
    story: [
      'Rise Credit Union provides structured term financing aligned with school revenue cycles.',
      'Shine coordinates project milestones with disbursement schedules to keep projects on track.',
      'Schools gain predictable payment plans without sacrificing installation timelines.',
    ],
  },
  {
    id: 2,
    slug: 'equator-bank-green-lines',
    title: 'Equator Bank: Green credit lines for education',
    excerpt:
      'Dedicated sustainability credit lines for institutional solar projects.',
    category: 'Financier',
    image: '/images/insights_thumb_02.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_02.jpg',
    ],
    location: 'Wakiso, Uganda',
    timeline: 'Multi-year partnership',
    impact: 'Lowered cost of capital for clean energy upgrades',
    story: [
      'Equator Bank earmarks green credit lines specifically for renewable infrastructure.',
      'Shine works with bank teams to validate project ROI and ensure proper deployment.',
      'This collaboration reduces capital constraints for schools ready to upgrade.',
    ],
  },
  {
    id: 3,
    slug: 'harbor-microfinance',
    title: 'Harbor Microfinance: Flexible payment structures',
    excerpt:
      'Flexible financing for smaller schools and rural institutions.',
    category: 'Financier',
    image: '/images/insights_thumb_03.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
    ],
    location: 'Mukono, Uganda',
    timeline: 'Ongoing finance partner',
    impact: 'Expanded access for rural schools',
    story: [
      'Harbor Microfinance enables smaller schools to access solar financing with tailored repayment terms.',
      'Shine adapts project phasing to align with these schedules while preserving technical quality.',
      'The result is broader access without overextending school budgets.',
    ],
  },
  {
    id: 4,
    slug: 'summit-fintech',
    title: 'Summit Fintech: Fast approvals for rapid installs',
    excerpt:
      'Digital approvals that shorten project timelines.',
    category: 'Financier',
    image: '/images/insights_thumb_01.jpg',
    galleryImages: [
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_01.jpg',
    ],
    location: 'Jinja, Uganda',
    timeline: 'Ongoing finance partner',
    impact: 'Reduced approval time for urgent projects',
    story: [
      'Summit Fintech provides quick credit evaluation through digital onboarding.',
      'Shine coordinates project planning with faster approvals to minimize delays.',
      'Schools can move from decision to installation more quickly.',
    ],
  },
  {
    id: 5,
    slug: 'lumen-lease',
    title: 'Lumen Lease: Equipment leasing for staged growth',
    excerpt:
      'Lease structures that allow schools to scale capacity over time.',
    category: 'Financier',
    image: '/images/insights_thumb_02.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_02.jpg',
    ],
    location: 'Kampala, Uganda',
    timeline: 'Ongoing finance partner',
    impact: 'Staged upgrades without large upfront costs',
    story: [
      'Lumen Lease offers equipment leasing that matches phased campus expansion.',
      'Shine aligns technical design to support add-on capacity without rework.',
      'Schools expand their systems as needs grow while keeping cash flow stable.',
    ],
  },
  {
    id: 6,
    slug: 'northline-capital',
    title: 'Northline Capital: Project finance for large campuses',
    excerpt:
      'Structured finance for multi-site installations.',
    category: 'Financier',
    image: '/images/insights_thumb_03.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
    ],
    location: 'Entebbe, Uganda',
    timeline: 'Ongoing finance partner',
    impact: 'Enabled multi-campus rollouts',
    story: [
      'Northline Capital supports larger projects with multi-site financing structures.',
      'Shine uses these facilities to scale deployments across networked school systems.',
      'This unlocks broader coverage without sacrificing quality or oversight.',
    ],
  },
  {
    id: 7,
    slug: 'bluecrest-coop',
    title: 'Bluecrest Cooperative: Community-backed lending',
    excerpt:
      'Local cooperative lending for regional education partners.',
    category: 'Financier',
    image: '/images/insights_thumb_01.jpg',
    galleryImages: [
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_01.jpg',
    ],
    location: 'Wakiso, Uganda',
    timeline: 'Ongoing finance partner',
    impact: 'Expanded access through community lending',
    story: [
      'Bluecrest Cooperative pools community funds to support regional education upgrades.',
      'Shine partners with local coordinators to validate project readiness and maintain accountability.',
      'This model helps smaller schools access financing with local support.',
    ],
  },
  {
    id: 8,
    slug: 'equinox-grants',
    title: 'Equinox Grants: Blended finance for rural schools',
    excerpt:
      'Grant-plus-loan structures for off-grid locations.',
    category: 'Financier',
    image: '/images/insights_thumb_02.jpg',
    galleryImages: [
      '/images/insights_thumb_03.jpg',
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
    ],
    location: 'Mukono, Uganda',
    timeline: 'Ongoing finance partner',
    impact: 'Enabled off-grid schools to adopt solar',
    story: [
      'Equinox Grants blends grant funding with low-cost financing for rural schools.',
      'Shine uses the blended structure to deliver installations that would otherwise be delayed by cost.',
      'Rural institutions gain reliable energy without heavy upfront burden.',
    ],
  },
  {
    id: 9,
    slug: 'nova-pay',
    title: 'Nova Pay: Pay-as-you-save plans for schools',
    excerpt:
      'Payments linked to measured energy savings.',
    category: 'Financier',
    image: '/images/insights_thumb_03.jpg',
    galleryImages: [
      '/images/insights_thumb_01.jpg',
      '/images/insights_thumb_02.jpg',
      '/images/insights_thumb_03.jpg',
    ],
    location: 'Kampala, Uganda',
    timeline: 'Ongoing finance partner',
    impact: 'Aligned payments with real savings',
    story: [
      'Nova Pay structures repayment around savings realized after installation.',
      'Shine’s monitoring data feeds usage reporting, enabling transparent payback schedules.',
      'Schools see direct linkage between energy performance and financing.',
    ],
  },
];

export function getSupplierBySlug(slug: string) {
  return supplierArticles.find((article) => article.slug === slug);
}

export function getFinancierBySlug(slug: string) {
  return financierArticles.find((article) => article.slug === slug);
}

const listingSignalsBySlug: Record<string, ListingSignals> = {
  // Schools
  'st-kizito-primary-247-power': {
    status: '24/7 reliable power',
    scale: 'Classrooms, labs, staff housing',
    reliability: 'Commissioned in 6 weeks',
  },
  'greenhill-academy-generator-reduction': {
    status: 'Generator use reduced',
    scale: 'Full campus hybrid coverage',
    reliability: '68% fuel cost reduction',
  },
  'lakeview-secondary-maintenance-uptime': {
    status: 'Preventive maintenance active',
    scale: 'Campus-wide service contract',
    reliability: 'Near-zero outages',
  },
  'mirembe-college-storage-uptime': {
    status: 'Overnight continuity secured',
    scale: 'Dorms and study halls',
    reliability: 'Storage right-sized to load',
  },
  'kampala-heights-grid-tied-upgrade': {
    status: 'Grid-tied system live',
    scale: 'Rapid campus deployment',
    reliability: '10-day rollout',
  },
  'northgate-school-remote-monitoring': {
    status: 'Remote monitoring enabled',
    scale: 'Automated incident workflows',
    reliability: 'Faster response times',
  },
  'sunrise-academy-resilience-upgrade': {
    status: 'Exam-season resilience live',
    scale: 'Labs and classroom lighting',
    reliability: 'Priority circuits protected',
  },
  'riverbend-prep-load-optimization': {
    status: 'Load optimization active',
    scale: 'Operational control rules',
    reliability: 'Lower daily waste',
  },
  'hillside-secondary-campus-efficiency': {
    status: 'Phased efficiency upgrade',
    scale: 'Classrooms and boarding blocks',
    reliability: 'Fewer campus disruptions',
  },

  // Suppliers
  'aurora-solar-modules': {
    status: 'Core module supplier',
    scale: 'High-yield rooftop fleets',
    reliability: 'Long-life warranty profile',
  },
  'gridline-inverters': {
    status: 'Inverter partner active',
    scale: 'Mixed-load campus profiles',
    reliability: 'Stable conversion performance',
  },
  'lumin-battery-storage': {
    status: 'Storage partner active',
    scale: 'Modular overnight capacity',
    reliability: 'Boarding-hour continuity',
  },
  'terra-mounting': {
    status: 'Mounting systems deployed',
    scale: 'Roof and structural installs',
    reliability: 'Faster install cycles',
  },
  'flux-monitoring': {
    status: 'Telemetry integration live',
    scale: 'Dashboard-linked sensors',
    reliability: 'Early fault detection',
  },
  'volt-safety': {
    status: 'Safety stack standardized',
    scale: 'Protection and grounding kits',
    reliability: 'Lower maintenance risk',
  },
  'crest-cabling': {
    status: 'Campus cabling partner',
    scale: 'Multi-building infrastructure',
    reliability: 'Clean serviceability paths',
  },
  'helios-lighting': {
    status: 'Efficiency retrofit partner',
    scale: 'LED upgrades at scale',
    reliability: 'Extended battery runtime',
  },
  'anchor-structures': {
    status: 'Carport structure partner',
    scale: 'Shared-space generation assets',
    reliability: 'Durable dual-use footprint',
  },

  // Financiers
  'rise-credit-union': {
    status: 'Term finance active',
    scale: 'Mid-sized school upgrades',
    reliability: 'Tuition-cycle aligned plans',
  },
  'equator-bank-green-lines': {
    status: 'Green credit line partner',
    scale: 'Institutional project portfolios',
    reliability: 'Lower capital cost structures',
  },
  'harbor-microfinance': {
    status: 'Flexible lending active',
    scale: 'Rural and smaller schools',
    reliability: 'Tailored repayment windows',
  },
  'summit-fintech': {
    status: 'Digital approval partner',
    scale: 'Rapid deployment financing',
    reliability: 'Shorter approval timelines',
  },
  'lumen-lease': {
    status: 'Leasing model active',
    scale: 'Phased campus expansion',
    reliability: 'Lower upfront burden',
  },
  'northline-capital': {
    status: 'Project finance partner',
    scale: 'Multi-campus rollouts',
    reliability: 'Structured disbursement control',
  },
  'bluecrest-coop': {
    status: 'Community lending active',
    scale: 'Regional education groups',
    reliability: 'Locally backed accountability',
  },
  'equinox-grants': {
    status: 'Blended finance active',
    scale: 'Off-grid institutions',
    reliability: 'Grant + loan model stability',
  },
  'nova-pay': {
    status: 'Pay-as-you-save live',
    scale: 'Performance-linked portfolios',
    reliability: 'Repayment tied to savings',
  },
};

export function getListingSignals(article: ProjectArticle): ListingSignals {
  const mapped = listingSignalsBySlug[article.slug];
  if (mapped) return mapped;

  if (article.category === 'Project') {
    return {
      status: 'School transition active',
      scale: article.impact,
      reliability: article.timeline,
    };
  }

  if (article.category === 'Supplier') {
    return {
      status: 'Supplier partnership active',
      scale: article.impact,
      reliability: article.timeline,
    };
  }

  return {
    status: 'Finance partnership active',
    scale: article.impact,
    reliability: article.timeline,
  };
}

const schoolCardSignalsBySlug: Record<string, SchoolCardSignals> = {
  'st-kizito-primary-247-power': {
    district: 'Kampala',
    buildings: 10,
    students: 820,
    solarTransitionPct: 78,
    hasInternet: true,
  },
  'greenhill-academy-generator-reduction': {
    district: 'Wakiso',
    buildings: 12,
    students: 960,
    solarTransitionPct: 70,
    hasInternet: true,
  },
  'lakeview-secondary-maintenance-uptime': {
    district: 'Mukono',
    buildings: 9,
    students: 700,
    solarTransitionPct: 64,
    hasInternet: true,
  },
  'mirembe-college-storage-uptime': {
    district: 'Jinja',
    buildings: 11,
    students: 890,
    solarTransitionPct: 72,
    hasInternet: true,
  },
  'kampala-heights-grid-tied-upgrade': {
    district: 'Kampala',
    buildings: 8,
    students: 640,
    solarTransitionPct: 58,
    hasInternet: true,
  },
  'northgate-school-remote-monitoring': {
    district: 'Entebbe',
    buildings: 7,
    students: 510,
    solarTransitionPct: 55,
    hasInternet: true,
  },
  'sunrise-academy-resilience-upgrade': {
    district: 'Kampala',
    buildings: 9,
    students: 760,
    solarTransitionPct: 67,
    hasInternet: false,
  },
  'riverbend-prep-load-optimization': {
    district: 'Mukono',
    buildings: 6,
    students: 480,
    solarTransitionPct: 49,
    hasInternet: false,
  },
  'hillside-secondary-campus-efficiency': {
    district: 'Wakiso',
    buildings: 10,
    students: 840,
    solarTransitionPct: 62,
    hasInternet: true,
  },
};

export function getSchoolCardSignals(article: ProjectArticle): SchoolCardSignals | null {
  if (article.category !== 'Project') return null;
  return schoolCardSignalsBySlug[article.slug] ?? null;
}

function formatUsdCompact(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}m`;
  if (value >= 1_000) return `$${Math.round(value / 1_000)}k`;
  return `$${Math.round(value)}`;
}

export function getPrimaryMetricBadges(article: ProjectArticle): PrimaryMetricBadge[] {
  const metrics = article.metrics;
  if (!metrics) return [];

  const badges: PrimaryMetricBadge[] = [];

  if (typeof metrics.resilienceScore === 'number') {
    badges.push({
      key: 'resilience',
      value: `${metrics.resilienceScore}`,
      tooltip: `SHINE Resilience Score: ${metrics.resilienceScore}/100`,
    });
  }

  if (typeof metrics.storage?.autonomyHours === 'number') {
    const chemistry = metrics.storage.chemistry
      ? `${metrics.storage.chemistry.toLowerCase()} `
      : '';
    badges.push({
      key: 'storage',
      value: `${metrics.storage.autonomyHours}h`,
      tooltip: `${metrics.storage.kwh} kWh ${chemistry}storage · ${metrics.storage.autonomyHours} hour autonomy`,
    });
  }

  if (typeof metrics.savings?.generatorReductionPct === 'number') {
    badges.push({
      key: 'savings',
      value: `${metrics.savings.generatorReductionPct}%`,
      tooltip: `${metrics.savings.generatorReductionPct}% generator reduction`,
    });
  } else if (typeof metrics.savings?.annualDieselSavingsUsd === 'number') {
    badges.push({
      key: 'savings',
      value: formatUsdCompact(metrics.savings.annualDieselSavingsUsd),
      tooltip: `Saved $${metrics.savings.annualDieselSavingsUsd.toLocaleString()} in diesel annually`,
    });
  }

  if (metrics.connectivity?.enabled) {
    const uptime = metrics.connectivity.uptimePct;
    const provider = metrics.connectivity.provider ?? 'network link';
    const uptimeText = typeof uptime === 'number' ? `${Math.round(uptime)}% uptime` : 'uptime monitored';
    badges.push({
      key: 'connectivity',
      value: typeof uptime === 'number' ? `${Math.round(uptime)}%` : 'On',
      tooltip: `Connected via ${provider} · ${uptimeText}`,
    });
  }

  return badges.slice(0, 4);
}
