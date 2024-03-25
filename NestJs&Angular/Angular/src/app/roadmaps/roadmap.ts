import { Milestone } from "./milestone";

export interface Roadmap {
    roadmapID: string;
    title: string;
    domain: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    milestones: Milestone[];
  }

  export class Roadmap implements Roadmap {
    id: string;
    title: string;
    domain: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    milestones: Milestone[];


  
    constructor() {
      this.id = '';
      this.title = '';
      this.domain = '';
      this.description = '';
      this.createdAt = '';
      this.updatedAt = '';
      this.deletedAt = null;
      this.milestones = [];
    }
  }
  