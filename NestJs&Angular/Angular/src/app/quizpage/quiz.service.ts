import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiUrl } from '../config/config';
import { Question } from './question/question';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) 
    {}

  getQuestions(quizId : number): Observable<Question[]> {
    return this.http.get<Question[]>(ApiUrl.questions+"/by-quiz/"+quizId).pipe(
      map((questions: Question[]) => {
        return questions.map(question => {
          if (typeof question.options === 'string') {
            question.options = JSON.parse(question.options);
          }
          return question;
        });
      })
    );
  }
  
  
  submitQuiz(userAnswers: { [questionId: number]: number },quizId : number): Observable<any> {
    const answers = Object.entries(userAnswers).map(([questionId, answerIndex]) => ({
      questionId: parseInt(questionId),
      userAnswer: answerIndex
    }));
    const payload = {
      quizId : quizId,
      answers: answers
    };
    return this.http.post(ApiUrl.verifyQuiz, payload);
  }

}
