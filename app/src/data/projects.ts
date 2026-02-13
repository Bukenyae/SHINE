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
