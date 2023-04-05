import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../NSservice/users.service';
import { TestgService } from '../NSservice/testg.service';
import { collection, doc, Firestore, getDoc } from '@angular/fire/firestore';
import { Auth, authState } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  bntStyle?: string ;
  constructor(private usersService:UsersService, private test:TestgService,private afs:Firestore,private auth:Auth,public datepipe: DatePipe,private msalservice:MsalService, private router: Router) { 
  }
  msname = this.msalservice.instance.getActiveAccount()?.tenantId;
  currentDateTime =this.datepipe.transform((new Date), 'dd-MM-yyyy');
  alluser:any=[];
  uid:any;
  photo:any;
  displayName:any;
  currentUser$ = authState(this.auth);
  ngOnInit() {
    this.notification=[];
    this.sending();
    this.currentDateTime;
      this.currentUser$.subscribe(async (res)=>{
          this.uid = res?.uid; 
          if(res?.uid){
            const docRef = doc(this.afs, "users",res!.uid);
          const docSnap = await getDoc(docRef)
          this.alluser = docSnap.data();
          }else{console.log("null");
          }   
        })     
  }
   
  user$ = this.usersService.currentUserProfile$;

  commentsu = new FormGroup({
    comments: new FormControl('', [Validators.required])
  });
  status: boolean = false;
  notification:any=[
   
  ];
  allnoty:any=[];
  userphoto!:any;
  
  resetcbox(){
    this.commentsu.reset();
  }
 clickEvent(){
  const {comments} = this.commentsu.value;
    this.status = !this.status; 
   this.commentsu.reset();
   if(this.uid){
    this.notification.push({
      comments: comments,
      photoURL:this.alluser.photoURL,
     displayName:this.alluser.displayName,
     currentDateTime:this.currentDateTime,
     like:this.likesCount
      })   
   }else{
    this.notification.push({
      comments: comments,
      photoURL:'../../../assets/images/user-icon-modified.png',
     displayName:this.acc.displayName,
     currentDateTime:this.currentDateTime,
     like:this.likesCount
      })
   } 
 this.test.comment(this.notification).subscribe();
}
public acc:any = {
  uid:this.msalservice.instance.getActiveAccount()?.tenantId,
  email:this.msalservice.instance.getActiveAccount()?.username,
  displayName:this.msalservice.instance.getActiveAccount()?.name,
}

 sending(){
  this.test.onsave().subscribe((res)=>{
    const data = JSON.stringify(res);
    const db = JSON.parse(data);
   this.notification = db;
 })

 }
 togglematli(gg:any,index:any){
 console.log(gg.checked[index]);
 this.notification[index].like += (gg.checked)? 1:-1;
 this.test.comment(this.notification).subscribe();
 }
 staff:boolean=false;
 likesCount:number=0;
 isActive = false;
onedit(index:any){
   this.notification.splice(index,1);
   this.test.comment(this.notification).subscribe();
}
showEmojiPicker = false;
  
  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
        this.showEmojiPicker = !this.showEmojiPicker;
  }
  emojies='';
  addEmoji(event: { emoji: { native: any; }; }) {
    const {comments} = this.commentsu.value;
    console.log(`${event.emoji.native}`)
    const text = `${comments}${event.emoji.native}`;
      this.emojies = text 
  }

  onFocus() {
    console.log('focus');
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur')
  }
  

}




