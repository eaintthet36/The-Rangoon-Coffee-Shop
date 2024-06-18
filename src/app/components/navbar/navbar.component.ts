import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private router:Router, private shareService:ShareService){}
  ngOnInit(): void {
    this.shareService.getLoginStatus().subscribe(status => {
      this.isLoggedIn = status;
      
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
