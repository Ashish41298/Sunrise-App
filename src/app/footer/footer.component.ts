import {  Component, HostListener, NgZone, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../NSservice/users.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  handler: any;
  myFooList: any;
constructor(private usersService:UsersService,
  public dialog: MatDialog,private router:Router ){}
openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef, { data: this.myFooList });
    myTempDialog.afterClosed().subscribe((res) => {
      window.scroll(0,0); 
    });
   
  }
user$ = this.usersService.currentUserProfile$;

@ViewChild('dialogRef')
dialogRef!: TemplateRef<any>;
loaddt:boolean = false;
ngOnInit(): void {
  this.submit();
  setInterval(() => {
    this.loaddt =true;
  }, 7000);
}

msgform = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
});
get email() {
  return this.msgform.value.email
}
  submit(){
    if(this.msgform.valid && this.msgform!==null ){
      this.router.navigate(['comments']);
      window.scroll(0,0);   
    }
  }
 
 
}
