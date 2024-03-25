export interface Milestone {
  id: string; // Changed from milestoneId to id
  description: string;
  orderNumber: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  validations: any[]; // Specify the type if you have a more specific one
  recommandedCertifications: any[]; // Same as above
  recommandedCourses: any[]; // Same as above
  quiz: {
    id: number;

  }
  roadmap: {
    id: string;
    title: string;
    domain: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}