import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/shared/password-match.directive';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/interfaces/auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from './register-dialogs/success/success.component';
import { FailComponent } from './register-dialogs/fail/fail.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$')]],
    email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required,]],
  confirmPassword: ['',[Validators.required]]
  },{
    Validators: passwordMatchValidator
  });
  router: any;

constructor(private fb:FormBuilder, private AuthService: AuthService, private route: Router,
  private dialog: MatDialog,
 ){}

get fullName(){
  return this.registerForm.controls['fullName'];
}

get email(){
  return this.registerForm.controls['email'];
}

get password(){
  return this.registerForm.controls['password'];
}

get confirmPassword(){
  return this.registerForm.controls['confirmPassword'];
}

submitDetails(){
  const postData = {...this.registerForm.value};
  delete postData.confirmPassword;
  this.AuthService.registerUser(postData as User).subscribe( 
  response => {
    const dialogRef = this.dialog.open(SuccessComponent);
    setTimeout(() => {
      dialogRef.close();
    }, 900);
    this.route.navigate(['login'])
  },
  error => {const dialogRef = this.dialog.open(FailComponent);
    setTimeout(() => {
      dialogRef.close();
    }, 2000);
    this.registerForm.reset();}
  )
}
}
