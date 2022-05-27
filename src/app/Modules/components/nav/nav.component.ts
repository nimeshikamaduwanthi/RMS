import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/Modules/pages/login/login.component';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  lordPopup: boolean = false;
  currentSection = '';
  constructor(
    private dialogRef: MatDialog,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  openDialog() {
    this.lordPopup = true;
    this.dialogRef.open(LoginComponent, {
      data: {},
    });
  }

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '',
    });
  }
}
