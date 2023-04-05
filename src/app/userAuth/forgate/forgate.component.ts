import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Auth} from '@angular/fire/auth';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { from } from 'rxjs/internal/observable/from';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-forgate',
  templateUrl: './forgate.component.html',
  styleUrls: ['./forgate.component.css']
})
export class ForgateComponent implements OnInit {

  forgot= new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  get email() {
    return this.forgot.get('email');
  }
  constructor(private rout:Router, afauth:Auth,private toast: HotToastService) { }
 
  forlogin: boolean = true;



  goback(){
    if(this.forlogin){
      this.rout.navigate(['/Login']).then()
    }else{
      this.rout.navigate(['/Login']).then()
    }
  }
  
  
  updatedata(data:any){
    const {email}:any =this.forgot.value
    console.log(email);
    const auth = getAuth();
    return from(sendPasswordResetEmail(auth, email)).pipe(
      this.toast.observe({
        success: 'Link has been sended check your email box! ✅',
        loading: 'Link sending... ☕',
        error: ({ message }) => `somthing went to wrong!`
      })
    ).subscribe((res)=>console.log(res),(err)=>console.log(err));
    
  }

  ngOnInit(): void {
  }

}
