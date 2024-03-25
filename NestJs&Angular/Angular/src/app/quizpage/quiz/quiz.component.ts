import { Component, OnInit } from '@angular/core';
import { Question } from '../question/question';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../quiz.service';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { SharedDataService } from 'src/app/services/shared.data.service';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  id: number ;
  questions: Question[];
  userAnswers: { [id: number]: number } = {};
  quizDuration:number ;
  quizStartTime!: Date;
  remainingTime !:number;  
  private timerInterval: number;
  private timer: any;
  hasQuizBeenSubmitted = false; 

  constructor(
    private acr: ActivatedRoute,
    private quizService: QuizService,
    private router: Router,
    private apiService: ApiServiceService,
    private sharedDataService: SharedDataService,
    private toastr: ToastrService
    ) {
    this.questions = [];
    this.id = this.acr.snapshot.params['id'];
    this.quizDuration = 60; // Quiz duration in seconds
    this.timerInterval = 1000;
    this.timer = null;

  }

  ngOnInit() {
    this.quizService.getQuestions(this.id).subscribe({
      next: (response) => {
        this.questions = response;
        this.questions.forEach(question => {
          this.userAnswers[question.id] = -1;
        });

      },
      error: (error) => {
        console.error(error);
        this.toastr.error('Failed to load questions.');

      }
    });
    this.startTimer();
  }


  startTimer() {
    this.quizStartTime = new Date();
    const timerInterval = 1000;
    const timer = setInterval(() => {
      const now = new Date();
      const elapsedTime = Math.round((now.getTime() - this.quizStartTime.getTime()) / 1000);
      this.remainingTime = Math.max(this.quizDuration - elapsedTime, 0);
      if (this.remainingTime <= 0) {
        clearInterval(timer);
        if (this.router.url === '/'+this.acr.snapshot.url.join('/')) {
          if (!this.hasQuizBeenSubmitted) {
          this.toastr.info('Time is up! Your quiz is submitted.');
            this.submitQuiz();
          }
        }
      }
    }, timerInterval);
  }
  
  submitQuiz() {
    if (this.hasQuizBeenSubmitted) {
      this.toastr.warning('Quiz has already been submitted.');
      return; // Prevent multiple submissions
    }
    this.hasQuizBeenSubmitted = true;
    this.quizService.submitQuiz(this.userAnswers,this.id).subscribe({
      next: (response) => {
        this.sharedDataService.setQuizScore(response.score);
        this.router.navigate(['/testresult']);
      },
      error: (error) => {
        console.error(error);
        this.toastr.error('Failed to submit the quiz.');

      }
    });
  }
  onAnswer(id: number, answerIndex: number) {
    this.userAnswers[id] = answerIndex;
  }
}
