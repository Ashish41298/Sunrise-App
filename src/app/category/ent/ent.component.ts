import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from 'src/app/NSservice/NewserviceService';

@Component({
  selector: 'app-ent',
  templateUrl: './ent.component.html',
  styleUrls: ['./ent.component.css']
})
export class EntComponent implements OnInit {
  constructor(private api:NewserviceService, private router: Router) { }
  ent:any=[];
  enterror:boolean=true;
  ngOnInit(): void {
    this.entn();
  }
  entn(){
    this.api.entertainmentsn().subscribe((result)=>{
      this.ent = result.channel.item;
       },error=>{if(error.status == 404){this.enterror=false;} });
  }

  tabsnav0(){
    this.router.navigate(['/category']);
  }
  tabsnav1(){
    this.router.navigate(['/home']);
  }
  scroll(el: HTMLElement) {
  el.scroll(0, 0);
  el.style.scrollBehavior = 'smooth';
  window.scroll(0, 0);
  }
  sht: boolean = false;
  shbtn() {
  this.sht = !this.sht
  }
  goback(){
    this.router.navigate(['/home']);
  }

}
