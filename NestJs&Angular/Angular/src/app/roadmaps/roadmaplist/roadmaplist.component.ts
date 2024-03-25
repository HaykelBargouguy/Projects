import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoadmapserviceService } from '../roadmapservice.service';
import { Roadmap } from '../roadmap'; // Assuming you have this interface/class

@Component({
  selector: 'app-roadmaplist',
  templateUrl: './roadmaplist.component.html',
  styleUrls: ['./roadmaplist.component.css']
})
export class RoadmaplistComponent implements OnInit {
  roadmaps: Roadmap[] = []; 
  errorMessage: string = '';

  constructor(
    private roadmapService: RoadmapserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roadmapService.getAllRoadmaps().subscribe(
      data => {
        this.roadmaps = data;
      },
      error => console.error('Error fetching roadmaps:', error)
    );
  }
  

  private loadRoadmaps() {
    this.roadmapService.getAllRoadmaps().subscribe({
      next: (data) => this.roadmaps = data,
      error: (err) => this.errorMessage = err
    });
  }

  navigateToRoadmap(roadmapId: string): void {
    this.router.navigate(['/roadmap'], { queryParams: { roadmapId: roadmapId } });
  }
}
