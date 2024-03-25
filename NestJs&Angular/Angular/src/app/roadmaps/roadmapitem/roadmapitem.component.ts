import { Component, Input } from '@angular/core';
import { RoadmapserviceService } from '../roadmapservice.service';
import { AuthentificationService } from '../../authentication/services/authentification.service'; // Correct service import
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-roadmapitem',
  templateUrl: './roadmapitem.component.html',
  styleUrls: ['./roadmapitem.component.css']
})
export class RoadmapitemComponent {
  @Input() name!: string;

  constructor(
    private roadmapService: RoadmapserviceService,
    private authService: AuthentificationService,
    private toastr: ToastrService
  ) {}

  image!: string;

  ngOnInit() {
    this.image = 'assets/images/' + this.name + '.jpg';
  }

  subscribeToRoadmap() {
    if (this.authService.isAuthenticated()) {
      this.roadmapService.subscribeToRoadmap(this.name).subscribe({
        next: (response) => {
          this.toastr.success('Successfully subscribed to the roadmap!'); // Display success toast
        },
        error: (error) => {
          this.toastr.error('Failed to subscribe to the roadmap.'); // Display error toast
        }
      });
    } else {
      this.toastr.error('User must be logged in to subscribe.'); // Display error toast for unauthenticated users
    }
  }
  
  
}