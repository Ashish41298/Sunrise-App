import { Injectable } from '@angular/core';
import {
  doc,
  docData,
  Firestore,
  setDoc,
  updateDoc,
  collection,
  getDoc
} from '@angular/fire/firestore';
import {  from,  Observable, of, } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { Muser, ProfileUser } from '../models/user';
import { AuthService } from './auth.service';
import {  MsalService} from '@azure/msal-angular';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
 
  constructor(private firestore: Firestore, private authService: AuthService,
   private msalservice:MsalService ) {}

  get currentUserProfile$(): Observable<ProfileUser | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<ProfileUser>;
      })
    );
  }

  addUser(user: ProfileUser): Observable<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(setDoc(ref, user));
  }
  

  updateUser(user: ProfileUser): Observable<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(updateDoc(ref, { ...user }));
  }
  uid:any= this.msalservice.instance.getActiveAccount()?.tenantId
 updatems(profileData:any): Observable<void> {
  
    const ref = doc(this.firestore, 'users',this.uid);
    return from(updateDoc(ref, { ...profileData }));
  }

  googleuser(user:Credential): Observable<void> {
    const ref = doc(this.firestore, 'users',);
    return from(setDoc(ref, { ...user }));
  }
 
}


