import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { ShareService } from 'src/app/services/share.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  cartList: any[] = [];
  itemNumber: number = 0;
  isLoggedIn: boolean = false;

  constructor(private router:Router, private shareService:ShareService, private menuService: MenuService,private _dialog: MatDialog, ){}

  private _modal!: MatDialogRef<any>
  @ViewChild('cartModal') cartModal!: TemplateRef<any>;

  ngOnInit(): void {
    this.shareService.getLoginStatus().subscribe(status => {
      this.isLoggedIn = status;
      
    });
    this.menuService.itemNumber$.subscribe(itemNumber => {
      this.itemNumber = itemNumber;
    });
    this.menuService.currentCartList.subscribe(cartList => {
      this.cartList = cartList;
    });
  }
  toLogin(){
    this.router.navigate(['login']);
  }
  logOut(){
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }
 
  openCart() {
      this._modal = this._dialog.open(this.cartModal, {
        width: '50%',
        disableClose: true,
      });
    
  }

  closeModal(){
    this._modal.close();
  }
}
