export interface Product {
  productId: number;
  title: string;
  description: string;
  pageUrl: string;
  gitHubSrc: string;
  technologyUsed: Array<string>;
  createDate: string;
  imgSrc: string | null;
}

export interface Career {
  careerId: number;
  jobIcon: string;
  company: string;
  position: string;
  department: string;
  responsibilities: string;
  achievements: Array<{
    achievementId: number;
    genre: string;
    title: string;
    description: string | null;
    from: string | null;
    to?: string | null;
    responsibility?: string | null;
    teamSize?: string | number | null;
    technologiesUsed: string[];
    scopeOfWork?: string | null;
    pageUrl?: string | null;
    imgSrc?: string | null;
  }>;
  startDate: string;
  endDate: string;
}

export interface OccupationList {
  occupation1: string;
  occupation2: string;
  occupation3: string;
}
