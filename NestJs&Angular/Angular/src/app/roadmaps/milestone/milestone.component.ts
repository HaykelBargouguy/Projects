import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Milestone } from '../milestone';
import { Title } from '@angular/platform-browser';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ApiUrl } from 'src/app/config/config';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.css']
})
export class MilestoneComponent {
  @Input()
  milestone!: Milestone; 
  showDetails: boolean = false;
  quizId = '';
  constructor(
    private router: Router,
    private apiservice: ApiServiceService,
    ) {}

  navigateToQuiz() {
    this.apiservice.get(ApiUrl.quiz+'/title/'+this.milestone.id).subscribe((data: any) => {
      this.quizId = data.id;
    }
    );
    if (this.quizId) {
      this.router.navigate(['/quiz/' + this.quizId]);
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
