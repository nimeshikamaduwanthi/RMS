import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isYearlyCheked: boolean = true;
  currentSection = '';
  constructor() {}

  ngOnInit(): void {}

  handleOnCheck = () => {
    this.isYearlyCheked = !this.isYearlyCheked;
    console.log(this.isYearlyCheked);
  };
}
