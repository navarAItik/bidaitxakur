export interface Review {
  id: string;
  businessId: string;
  userId: string;
  rating: number;
  title: string;
  comment: string;
  createdAt: string;
  visitDate?: string;
  images?: string[];
  verifiedVisit: boolean;
}
