import { Component, HostListener, OnInit } from '@angular/core';
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
  loadPopup: boolean = false;
  currentSection = '';

  constructor(
    private dialogRef: MatDialog,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '',
    });
  }

  openDialog() {
    this.loadPopup = true;
    this.dialogRef.open(LoginComponent, {
      data: {},
      backdropClass: 'backdropBackground',
    });
  }
}
