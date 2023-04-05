
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../../NSservice/auth.service';
import {  NgZone } from '@angular/core';
import { Auth,  getAuth, } from '@angular/fire/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { UsersService } from 'src/app/NSservice/users.service';
import { MsalService } from '@azure/msal-angular';
import { TestgService } from 'src/app/NSservice/testg.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})




export class LoginComponent implements OnInit {
   
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{6,}$')])
  });
  
   msname = this.msalservice.instance.getActiveAccount();
  
  FormMode: boolean = true;
    forgotMode: boolean = true;
    Forswitch(){
      if(this.FormMode){
        this.router.navigate(['/Signup']).then()
      }else{
        this.router.navigate(['/Signup']).then()
      }
    }
  
   forgot(){
      if(this.forgotMode){
        this.router.navigate(['/forgot']).then()
     }else{
       this.router.navigate(['/Login']).then()
     }
   }

  constructor(private authService: AuthService, private toast: HotToastService, private router: Router,
    public ngZone: NgZone,
    public afAuth:Auth,
    public userservice:UsersService,
    private msalservice:MsalService,
    private test:TestgService
    ) {}


  ngOnInit(): void {
    this.msalservice.instance.handleRedirectPromise().then( res => {
       
      if (res != null && res.account != null) {
        this.msalservice.instance.setActiveAccount(res.account)
        
      }
      
    })
    
    
  }

   
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password }:any = this.loginForm.value;
    this.authService.login(email, password).pipe(
      this.toast.observe({
        success: 'Logged in successfully ✅',
        loading: 'Logging in... ☕',
        error: ({ message }) => `There was an error: User Not found! 🥲 Frist you go to sign-up Link`
      })
    ).subscribe(() => {
      this.router.navigate(['/home']);
    });

  }
  provider = new GoogleAuthProvider();



  setd(){
    this.authService.Googleuser();
  }
  
  microsoft(){
this.authService.MSALLogin();

// return window.location.reload();
 }

 facebook(){
   this.authService.facebookuser();
 }
 dom:any;

 showPassword:boolean=false;
 showHidePassword() {
   this.showPassword = !this.showPassword;
 }
 reset(){
  this.showPassword = false;
 }
    // The user object has basic properties such as display name, email, etc.

}

