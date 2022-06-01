import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsAccordianComponent } from './questions-accordian/questions-accordian.component';

@NgModule({
  declarations: [QuestionsAccordianComponent],
  exports: [QuestionsAccordianComponent],
  imports: [CommonModule],
})
export class QuestionsModule {}
