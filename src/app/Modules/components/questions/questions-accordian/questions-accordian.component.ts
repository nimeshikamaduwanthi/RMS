import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions-accordian',
  templateUrl: './questions-accordian.component.html',
  styleUrls: ['./questions-accordian.component.css'],
})
export class QuestionsAccordianComponent implements OnInit {
  public singleBranchExpand = false;
  constructor() {}

  ngOnInit(): void {}
}
