import { Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from './login-dialogs/success/success.component';
import { FailComponent } from './login-dialogs/fail/fail.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required,]]
})
constructor(
  private fb:FormBuilder,
  private authService: AuthService,
  private router:Router,
  private shareService:ShareService,
  private dialog: MatDialog,
)
{}

get email(){
  return this.loginForm.controls['email'];
}

get password(){
  return this.loginForm.controls['password'];
}

LoginUser(){
const {email, password} = this.loginForm.value;
this.authService.getUserByEmail(email as string).subscribe(
  response => {
    if(response.length > 0 && response[0].password === password){
      sessionStorage.setItem('email', email as string);
      this.shareService.setLoginStatus(true);
      this.router.navigate(['home']);
      const dialogRef = this.dialog.open(SuccessComponent);
      setTimeout(() => {
        dialogRef.close();
      }, 900);
    }
 
  else{
    const dialogRef = this.dialog.open(FailComponent);
      setTimeout(() => {
        dialogRef.close();
      }, 2000);
      this.loginForm.reset();
  }
}
)
}

}
