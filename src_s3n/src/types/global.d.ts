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

export interface JobHistory {
  jobId: number;
  company: string;
  position: string;
  department: string;
  responsibilities: Array<string>;
  achievements: Array<{
    from: string;
    to: string;
    description: string;
  }>;
  startDate: string;
  endDate: string;
}
