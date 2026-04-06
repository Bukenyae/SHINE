import {
  financierArticles,
  projectArticles,
  supplierArticles,
  type ProjectArticle,
} from '@/data/projects';

export type ModeKey = 'schools' | 'partners';
export type PartnerMode = 'suppliers' | 'financiers';
export type StoryBasePath = '/projects' | '/suppliers' | '/financiers';

type EcosystemMode = {
  key: ModeKey;
  label: string;
  helper: string;
  basePath: StoryBasePath;
  articles: ProjectArticle[];
};

type PartnerView = {
  label: string;
  helper: string;
  basePath: StoryBasePath;
  articles: ProjectArticle[];
  railTitles: string[];
};

export const ecosystemModes: Record<ModeKey, EcosystemMode> = {
  schools: {
    key: 'schools',
    label: 'Schools',
    helper: 'Browse real school transitions to reliable solar power.',
    basePath: '/projects',
    articles: projectArticles,
  },
  partners: {
    key: 'partners',
    label: 'Partners',
    helper: 'Browse the deployment and finance partners helping SHINE scale.',
    basePath: '/suppliers',
    articles: supplierArticles,
  },
};

export const railTitles: Record<ModeKey, string[]> = {
  schools: [
    'Popular school transitions',
    'Reliable campuses in Uganda',
    'Recently deployed systems',
  ],
  partners: ['Core equipment partners', 'Deployment infrastructure vendors', 'Monitoring and service partners'],
};

export const partnerViews: Record<PartnerMode, PartnerView> = {
  suppliers: {
    label: 'Energy Partners',
    helper: 'Explore suppliers supporting SHINE deployments end-to-end.',
    basePath: '/suppliers',
    articles: supplierArticles,
    railTitles: ['Core equipment partners', 'Deployment infrastructure vendors', 'Monitoring and service partners'],
  },
  financiers: {
    label: 'Finance Partners',
    helper: 'See finance partners helping schools adopt solar infrastructure.',
    basePath: '/financiers',
    articles: financierArticles,
    railTitles: ['Funding partners by focus', 'Blended finance and leasing models', 'Capital partners expanding access'],
  },
};

