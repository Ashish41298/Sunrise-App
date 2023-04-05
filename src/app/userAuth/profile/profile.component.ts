import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { tap } from 'rxjs/internal/operators/tap';

import { Muser, ProfileUser } from '../../models/user';
import { ImageUploadService } from '../../NSservice/img-uplod.service';
import { UsersService } from '../../NSservice/users.service';
import {  MsalService} from '@azure/msal-angular';

@UntilDestroy()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

   vrify =this.msalservice.instance.getActiveAccount()
  user$ = this.usersService.currentUserProfile$;
  profileForm = new FormGroup({
    uid: new FormControl(''),
    displayName: new FormControl('', Validators.required),
    mobileno: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    address: new FormControl(''),
  });
  mobile:any =this.profileForm.value;
  mobileno= this.mobile.mobileno;
  constructor(
    private imageUploadService: ImageUploadService,
    private toast: HotToastService,
    private usersService: UsersService,
    private router:Router,
    private msalservice:MsalService,
     
  ) {}
   FormMode: boolean = true;
     Forswitch() {
       if (this.FormMode) {
         this.router.navigate(['/Login']).then()
       } else {
         this.router.navigate(['/Login']).then()
       }
     }
     

     ngOnInit(): void {
      this.usersService.currentUserProfile$
        .pipe(untilDestroyed(this), tap(console.log))
        .subscribe((user) => {
          this.profileForm.patchValue({ ...user });
        });
    }
  
    uploadFile(event: any, { uid }: ProfileUser) {
      this.imageUploadService
        .uploadImage(event.target.files[0], `images/profile/${uid}`)
        .pipe(
          this.toast.observe({
            loading: 'Uploading... ☕',
            success: 'Image uploaded successfully ✅',
            error: 'There was an error in uploading the image 🥲',
          }),
          switchMap((photoURL) =>
            this.usersService.updateUser({
              uid,
              photoURL,
            })
          )
        ).subscribe(()=>{window.location.reload()});
    }
    saveProfile() {
      const profileData:any = this.profileForm.value;
      this.usersService
        .updateUser(profileData)
        .pipe(
          this.toast.observe({
            loading: 'Saving profile data...',
            success: 'Profile updated successfully',
            error: 'There was an error in updating the profile',
          })
        )
        .subscribe(async () => {
          await this.router.navigate(['/Login']),
            window.location.reload()
          
        });
    }
   savemsdb(){
    const profileData = this.profileForm.value;
    
     this.usersService.updatems(profileData).pipe(
      this.toast.observe({
        loading: 'Saving profile data...',
        success: 'Profile updated successfully',
        error: 'There was an error in updating the profile',
      })
     ).subscribe(() => {
      this.router.navigate(['/Login']);
    });
    // console.log(mdata.uid);
    
    // const ref = doc(this.firestore, 'users',mdata.uid);
    // const res = from(updateDoc(ref, { ...profileData}));
    // console.log(profileData);
    
   }
    
     
      
  }
  



