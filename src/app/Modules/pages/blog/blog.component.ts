import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [DatePipe],
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
