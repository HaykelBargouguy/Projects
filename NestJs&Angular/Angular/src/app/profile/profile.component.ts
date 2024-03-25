import { Component } from '@angular/core';
import { ProfileService } from './profileservice.service';
import { AuthentificationService } from '../authentication/services/authentification.service';
import { RoadmapserviceService } from '../roadmaps/roadmapservice.service';
import { Roadmap } from '../roadmaps/roadmap';
import { ToastrService } from 'ngx-toastr';

interface RoadmapProgress {
  roadmap: Roadmap;
  progress: number;
  isSubscribed: boolean;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: any = {};
  confirmPassword: any;
  achievements: any;
  roadmapsProgress: RoadmapProgress[] = [];
  currentView = 'achievements';

  
  constructor(private profileService: ProfileService,public authentificationService: AuthentificationService, private roadmapService: RoadmapserviceService, private toastr: ToastrService) {}

  ngOnInit() {
    this.loadUserProfile();
    this.loadRoadmapsWithProgress();

  }



  loadRoadmapsWithProgress(): void {
    this.roadmapService.roadmaps$.subscribe(roadmaps => {
      if (roadmaps) {
        roadmaps.forEach(roadmap => {
          this.roadmapService.getRoadmapProgress(roadmap.id).subscribe(
            progressData => {
              const isSubscribed = progressData != null;
              const progress = progressData;
              this.roadmapsProgress.push({ roadmap, progress, isSubscribed });
            },
            error => console.error('Error fetching roadmap progress:', error)
          );
        });
      }
    });
  }




  navigateTo(view: string) {
    this.currentView = view;
  }

  loadUserProfile() {
    this.profileService.getUserProfile().subscribe(
      data => {
        this.user = data;
        this.toastr.success('User profile loaded successfully');

      },
      error => {
        this.toastr.error('Failed to load user profile');
      }
    );
  }

  updateProfile() {
    if (this.user.password !== this.confirmPassword) {
      this.toastr.error('Passwords do not match');
      return;
    }
  
    this.profileService.updateUserProfile(this.user).subscribe(
      response => {
        this.toastr.success('Profile updated successfully'); 
      },
      error => {
        this.toastr.error('Failed to update user profile');
      }
    );
  }

  logout(){
    this.authentificationService.logout();
  }
}