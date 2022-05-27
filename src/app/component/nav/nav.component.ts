import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private dialogRef: MatDialog) {}

  openDialog() {
    console.log('hi');
    this.dialogRef.open(LoginComponent, {
      data: {
        name: 'Samuel',
      },
    });
  }

  ngOnInit(): void {}
}
