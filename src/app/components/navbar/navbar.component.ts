import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

itemNumber: number = 0;
  isLoggedIn: boolean = false;
  constructor(private router:Router, private shareService:ShareService, private menuService: MenuService){}
  ngOnInit(): void {
    this.shareService.getLoginStatus().subscribe(status => {
      this.isLoggedIn = status;
      
    });
    this.menuService.itemNumber$.subscribe(itemNumber => {
      this.itemNumber = itemNumber;
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
 
}
