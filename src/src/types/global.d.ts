export interface Product {
  productId: string;
  title: string;
  description: string;
  pageUrl: string;
  gitHubSrc: string;
  technologyUsed: Array<string>;
  from: string;
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
    technologyUsed: string[];
    scopeOfWork?: string | null;
    pageUrl?: string | null;
    productId?: string | null;
  }>;
  startDate: string;
  endDate: string;
}

export interface OccupationList {
  occupation1: string;
  occupation2: string;
  occupation3: string;
}
