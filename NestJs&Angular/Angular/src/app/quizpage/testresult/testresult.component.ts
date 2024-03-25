import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared.data.service';

@Component({
  selector: 'app-testresult',
  templateUrl: './testresult.component.html',
  styleUrls: ['./testresult.component.css']
})
export class TestresultComponent implements OnInit {
  score: number=0;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.score = this.sharedDataService.getQuizScore(); // Retrieve the score
  }
}
