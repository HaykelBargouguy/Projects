import { Component, OnInit } from '@angular/core';
import { DahsboardserviceService } from './dahsboardservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: any[] = [];
  currentUser: any;

  constructor(
    private dashboardService: DahsboardserviceService,
  ) {}

  ngOnInit() {
    this.dashboardService.getUsersWithTotalScores().subscribe(users => {
      this.users = users.sort((a, b) => b.totalScore - a.totalScore);
      this.assignRanks(this.users);
    });
    this.loadCurrentUser();

  }

  private loadCurrentUser() {
    this.dashboardService.getUserProfile().subscribe(user => {
      this.currentUser = user; 
      console.log(this.currentUser);
    });
  }

  private assignRanks(users: any[]): void {
    users.forEach((user, index) => {
      user.rank = index + 1;
    });
  }
}
