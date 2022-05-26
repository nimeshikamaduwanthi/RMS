import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css'],
})
export class BlogCardComponent implements OnInit {
  currentDate = new Date().toString();
  currentMonth = new Date().toString();

  constructor(private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd') ?? '';
    this.currentMonth = this.datePipe.transform(this.currentMonth, 'MMM') ?? '';
    console.log(this.datePipe.transform(this.currentDate, 'MMM') ?? '');
  }

  ngOnInit(): void {}
}
