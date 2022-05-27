import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  isYearlyCheked: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  handleOnCheck = () => {
    this.isYearlyCheked = !this.isYearlyCheked;
    console.log(this.isYearlyCheked);
  };
}
