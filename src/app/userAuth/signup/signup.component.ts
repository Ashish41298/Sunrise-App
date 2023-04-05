import { Component, Input, OnInit } from '@angular/core';
import { getAuth, sendEmailVerification } from "firebase/auth";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { forkJoin, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProfileUser } from '../../models/user';
import { AuthService } from '../../NSservice/auth.service';
import { UsersService } from '../../NSservice/users.service';




export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent  implements OnInit {


  signUpForm = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      mobileno:new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{6,}$')]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    private authService: AuthService,
    private router: Router,
    private toast: HotToastService,
    private usersService: UsersService,
  ) {}


  ngOnInit(): void {

  }
  FormMode: boolean = true;

  Forswitch() {
        if (this.FormMode) {
         this.router.navigate(['/Login']).then()
           } else {
        this.router.navigate(['/Login']).then()
      }
     }
    ProfileMode: boolean = true;
         EditPro() {
       if (this.ProfileMode) {
        this.router.navigate(['/profile']).then()
     }   }
     
  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get mobileno() {
    return this.signUpForm.get('mobileno');
  }
 
  submit() {
     if (!this.signUpForm.valid) {
      return;
    }
     
    const { name, email, password }:any = this.signUpForm.value;
    
    const result =this.authService
      .signUp(email, password)
      .pipe(
        switchMap(({ user: { uid } }) =>
          this.usersService.addUser({ uid, email, displayName: name })
        ),
        this.toast.observe({
          success: 'Congrats! You are all signed up ✅',
          loading: 'Signing up... ☕ ',
         error: ({ message }) => `${message} 😢 `,
         
         })
      )
      .subscribe(() => {
        this.router.navigate(['/profile']);
        const auth = getAuth();
        const user = auth.currentUser
        if(user!==null){
          from(sendEmailVerification(user)
          .then((res) => 
           console.log(res), (err)=>console.log(err)
          ));
        }
       
      });  
      
  }
  showPassword:boolean=false;
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
  reset(){
    this.showPassword = false;
   }
}






