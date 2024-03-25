export class Question {
  id : number;
  content : string;
  options : string[];
  testQuiz : number;
  correctOption : number;
  constructor() {
    this.id = 0;
    this.content = '';
    this.options = [];
    this.testQuiz = 0;
    this.correctOption = 0;
  }

}
