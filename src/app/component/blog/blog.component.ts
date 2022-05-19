import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [DatePipe],
})
export class BlogComponent implements OnInit {
  currentDate = new Date().toString();
  currentMonth = new Date().toString();

  constructor(private datePipe: DatePipe) {
    this.currentDate = this.datePipe.transform(this.currentDate, 'dd') ?? '';
    this.currentMonth = this.datePipe.transform(this.currentMonth, 'MMM') ?? '';
    console.log(this.datePipe.transform(this.currentDate, 'MMM') ?? '');
  }

  ngOnInit(): void {}
}
