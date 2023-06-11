export interface Product {
  productId: number;
  title: string;
  description: string;
  pageUrl: string;
  imgSrc: string;
  gitHubSrc: string;
  technologyUsed: Array<string>;
  createDate: string;
}

export interface Career {
  careerId: number;
  company: string;
  position: string;
  department: string;
  responsibilities: string;
  achievements: Array<{
    achievementId: number;
    title: string;
    from: string;
    to: string;
    description: string;
    responsibility: string;
    teamSize: string;
    technologiesUsed: string;
    scopeOfWork: string;
  }>;
  startDate: string;
  endDate: string;
}
