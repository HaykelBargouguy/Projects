import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Question} from "./question";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() question!: Question;
  @Output() answer = new EventEmitter<number>();
  selectedOptionIndex: number | null = null;

  onSelectionChange(index: number) {
    this.selectedOptionIndex = index;
    this.answer.emit(index);
  }
}
