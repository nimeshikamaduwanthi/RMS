import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsAccordianComponent } from './questions-accordian/questions-accordian.component';
import { IgxAccordionModule, IgxSwitchModule } from 'igniteui-angular';

@NgModule({
  declarations: [QuestionsAccordianComponent],
  exports: [QuestionsAccordianComponent],
  imports: [CommonModule, IgxAccordionModule, IgxSwitchModule],
})
export class QuestionsModule {}
