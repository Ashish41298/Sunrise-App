import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  authState,
  createUserWithEmailAndPassword,
  updateProfile,
  UserInfo,
  UserCredential,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  FacebookAuthProvider,
  
} from '@angular/fire/auth';
import {
  Firestore,
  doc,
  setDoc,
} from '@angular/fire/firestore';
import { MsalService} from '@azure/msal-angular';
import {  from, Observable, of,} from 'rxjs';
import { concatMap } from 'rxjs/internal/operators/concatMap';
import { AuthenticationResult } from '@azure/msal-browser';
import { Muser } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
 
  currentUser$ = authState(this.auth);
  user!: User;
  mduser!:Muser; 
  constructor(private auth: Auth,private afs:Firestore,private msalservice:MsalService,
     ) {
   
  }

  signUp(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));   
  }


  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }
  

    updateProfile(profileData: Partial<UserInfo>): Observable<any> {
      const user = this.auth.currentUser;
      return of(user).pipe(
        concatMap((user) => {
          if (!user) throw new Error('Not authenticated');

          return updateProfile(user, profileData);
      })
      );
    }
  anyout(): Observable<any> {
    if(this.msalservice.instance.getActiveAccount()!==null){
      this.msalservice.logout()
     window.location.reload();
    }
   
    return from(this.auth.signOut());
  }
    
     async MSALLogin(){
      const cuser:any={}
      this.msalservice.loginPopup().subscribe((response: AuthenticationResult)=>{
     this.msalservice.instance.setActiveAccount(response.account);
     const nds:any = this.msalservice.instance.getActiveAccount();
     const acc:any = {
       uid:this.msalservice.instance.getActiveAccount()?.tenantId,
       email:this.msalservice.instance.getActiveAccount()?.username,
       displayName:this.msalservice.instance.getActiveAccount()?.name,
       photoURL: '../../../assets/images/user-icon-modified.png'
     }
   const ref = doc(this.afs, 'users',acc.uid);
    from(setDoc(ref, { ...acc })).subscribe((res)=>{
     return window.location.reload();
    } )
     })

     
    }
   
  async Googleuser() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this.auth,provider);
      return this.updateUserData(credential.user);
  }
  async facebookuser() {
    const provider = new FacebookAuthProvider();
    const credential = await signInWithPopup(this.auth,provider);
      return this.updateUserData(credential.user);
      
  }

 updateUserData(user: User) {
 
     const userRef= doc(this.afs, 'users', user.uid);
     
     const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
       photoURL: user.photoURL,
     };
     console.log(JSON.stringify(data));
      if(data!==null){
     from(setDoc(userRef, data));
    //days ago data will be 
     }
    
   }

  } 





