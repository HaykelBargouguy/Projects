import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private quizScore: number=0;

  constructor() { }

  setQuizScore(score: number) {
    this.quizScore = score;
  }

  getQuizScore(): number {
    return this.quizScore;
  }
}
