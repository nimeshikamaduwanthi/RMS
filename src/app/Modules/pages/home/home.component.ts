import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  priceAnnualMonth = 1;
  isYearlyCheked: boolean = true;

  ngOnInit(): void {}

  handleOnCheck = () => {
    this.isYearlyCheked = !this.isYearlyCheked;
    console.log(this.isYearlyCheked);
  };
}
