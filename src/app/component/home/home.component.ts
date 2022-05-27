import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public singleBranchExpand = false;
  priceAnnualMonth = 1;
  isYearlyCheked: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  handleOnCheck = () => {
    this.isYearlyCheked = !this.isYearlyCheked;
    console.log(this.isYearlyCheked);
  };
}
