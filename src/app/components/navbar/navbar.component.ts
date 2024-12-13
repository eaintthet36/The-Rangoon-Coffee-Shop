import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { ShareService } from 'src/app/services/share.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: any;
  routerLinkActive: any;
  constructor(
    private router: Router,
    private shareService: ShareService,
    private menuService: MenuService,
    private _dialog: MatDialog
  ) {}

  private _modal!: MatDialogRef<any>;

  ngOnInit(): void {
    this.shareService.getLoginStatus().subscribe((status) => {
      this.isLoggedIn = status;
    });
    this.user = sessionStorage.getItem('email');
  }
  toLogin() {
    this.router.navigate(['login']);
  }
  logOut() {
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }

  closeModal() {
    this._modal.close();
  }
}
