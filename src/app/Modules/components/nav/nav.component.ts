import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Modules/pages/login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  lordPopup: boolean = false;
  currentSection = '';
  constructor(private dialogRef: MatDialog) {}

  openDialog() {
    this.lordPopup = true;
    this.dialogRef.open(LoginComponent, {
      data: {},
    });
  }

  ngOnInit(): void {}
}
