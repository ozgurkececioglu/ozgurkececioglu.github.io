export interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: Array<string>;
  tags?: Array<string>;
}
